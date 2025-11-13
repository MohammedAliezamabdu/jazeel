document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const statusBox = document.getElementById("contactStatus");

    if (!form || !statusBox) return;

    const setStatus = (type, message) => {
        statusBox.textContent = message;
        statusBox.dataset.status = type;
    };

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = {
            fullName: form.fullName.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            topic: form.topic.value.trim(),
            message: form.message.value.trim(),
        };

        form.querySelector("button[type='submit']").disabled = true;
        setStatus("loading", "جاري إرسال رسالتك...");

        try {
            const response = await fetch("assets/php/save_message.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                const errors = result.errors
                    ? Object.values(result.errors).join(" - ")
                    : result.message || "تعذر إرسال الرسالة.";
                setStatus("error", errors);
            } else {
                setStatus("success", "تم إرسال الرسالة بنجاح، سنعاود التواصل معك قريباً.");
                form.reset();
            }
        } catch (error) {
            setStatus("error", "حدث خطأ غير متوقع، يرجى المحاولة لاحقاً.");
        } finally {
            form.querySelector("button[type='submit']").disabled = false;
            if (typeof window.initButtonRipples === "function") {
                window.initButtonRipples();
            }
        }
    });
});


