<?php

require_once __DIR__ . '/assets/php/config.php';
require_once __DIR__ . '/assets/php/db.php';

$accessKey = $_GET['key'] ?? '';

if ($accessKey !== ADMIN_ACCESS_KEY) {
    http_response_code(403);
    echo '<h2 style="font-family: sans-serif; text-align: center; margin-top: 4rem;">دخول غير مصرح به</h2>';
    exit;
}

$pdo = getPDO();
$messages = $pdo->query("
    SELECT id, full_name, email, phone, topic, message, created_at
    FROM contact_messages
    ORDER BY created_at DESC
")->fetchAll();

?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لوحة رسائل التواصل | جزيل</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #f7f4ef;
            --surface: #ffffff;
            --text: #3E2C1C;
            --text-muted: #7a6755;
            --accent: #8B5E3C;
            --radius: 16px;
        }
        body {
            font-family: "Tajawal", sans-serif;
            background: var(--bg);
            color: var(--text);
            margin: 0;
            padding: 2rem;
        }
        h1 {
            margin-top: 0;
        }
        .table-wrapper {
            overflow-x: auto;
            border-radius: var(--radius);
            box-shadow: 0 15px 35px rgba(0,0,0,0.08);
            background: var(--surface);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            min-width: 960px;
        }
        th, td {
            padding: 1rem 1.25rem;
            text-align: right;
            border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        th {
            background: rgba(139, 94, 60, 0.1);
            font-weight: 700;
            color: var(--accent);
        }
        tr:last-child td {
            border-bottom: none;
        }
        .message-body {
            white-space: pre-line;
            line-height: 1.7;
        }
        .empty-state {
            text-align: center;
            padding: 3rem;
            color: var(--text-muted);
        }
        .meta {
            color: var(--text-muted);
            font-size: 0.9rem;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }
        .header small {
            color: var(--text-muted);
        }
    </style>
</head>
<body>
    <div class="header">
        <div>
            <h1>رسائل نموذج التواصل</h1>
            <small>عدد الرسائل: <?= count($messages) ?></small>
        </div>
        <small>
            <strong>تلميح:</strong> احفظ هذه الصفحة في المفضّلة مع المعامل ?key=... للوصول السريع.
        </small>
    </div>

    <div class="table-wrapper">
        <?php if (!empty($messages)): ?>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>الاسم</th>
                        <th>البريد</th>
                        <th>الهاتف</th>
                        <th>النوع</th>
                        <th>الرسالة</th>
                        <th>تاريخ الإرسال</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($messages as $index => $row): ?>
                        <tr>
                            <td><?= $index + 1 ?></td>
                            <td><?= htmlspecialchars($row['full_name'], ENT_QUOTES, 'UTF-8') ?></td>
                            <td>
                                <a href="mailto:<?= htmlspecialchars($row['email'], ENT_QUOTES, 'UTF-8') ?>">
                                    <?= htmlspecialchars($row['email'], ENT_QUOTES, 'UTF-8') ?>
                                </a>
                            </td>
                            <td class="meta"><?= $row['phone'] ? htmlspecialchars($row['phone'], ENT_QUOTES, 'UTF-8') : '-' ?></td>
                            <td class="meta"><?= $row['topic'] ? htmlspecialchars($row['topic'], ENT_QUOTES, 'UTF-8') : '-' ?></td>
                            <td class="message-body"><?= nl2br(htmlspecialchars($row['message'], ENT_QUOTES, 'UTF-8')) ?></td>
                            <td class="meta"><?= htmlspecialchars($row['created_at'], ENT_QUOTES, 'UTF-8') ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php else: ?>
            <div class="empty-state">لا توجد رسائل حتى الآن.</div>
        <?php endif; ?>
    </div>
</body>
</html>

