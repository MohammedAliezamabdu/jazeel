<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'طريقة الطلب غير مدعومة.']);
    exit;
}

$payload = json_decode(file_get_contents('php://input'), true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'بيانات غير صالحة.']);
    exit;
}

$fullName = trim($payload['fullName'] ?? '');
$email = trim($payload['email'] ?? '');
$phone = trim($payload['phone'] ?? '');
$topic = trim($payload['topic'] ?? '');
$message = trim($payload['message'] ?? '');

$errors = [];

if ($fullName === '') {
    $errors['fullName'] = 'الاسم مطلوب.';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'الرجاء إدخال بريد إلكتروني صحيح.';
}

if ($message === '' || mb_strlen($message) < 10) {
    $errors['message'] = 'الرسالة يجب أن تكون 10 أحرف على الأقل.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

require_once __DIR__ . '/db.php';

try {
    $pdo = getPDO();
    $stmt = $pdo->prepare("
        INSERT INTO contact_messages (full_name, email, phone, topic, message)
        VALUES (:full_name, :email, :phone, :topic, :message)
    ");
    $stmt->execute([
        ':full_name' => $fullName,
        ':email' => $email,
        ':phone' => $phone ?: null,
        ':topic' => $topic ?: null,
        ':message' => $message,
    ]);

    echo json_encode(['success' => true, 'message' => 'تم إرسال الرسالة بنجاح.']);
} catch (Throwable $th) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'تعذر حفظ الرسالة، حاول لاحقاً.']);
}


