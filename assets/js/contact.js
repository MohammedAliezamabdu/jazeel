document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const statusBox = document.getElementById("contactStatus");
    const submitBtn = form?.querySelector("button[type='submit']");

    if (!form || !statusBox || !submitBtn) return;

    /* -------------------------------------------
        وظيفة عرض الرسائل (نجاح / خطأ / تحميل)
    -------------------------------------------- */
    const setStatus = (type, message) => {
        statusBox.textContent = message;
        statusBox.dataset.status = type; // success | error | loading
        statusBox.classList.add("visible");

        if (type !== "loading") {
            setTimeout(() => statusBox.classList.remove("visible"), 3500);
        }
    };

    /* -------------------------------------------
        التحقق قبل إرسال البيانات
    -------------------------------------------- */
    const validateForm = (data) => {
        if (!data.fullName) return "الاسم الكامل مطلوب.";
        if (!data.email) return "البريد الإلكتروني مطلوب.";
        if (!data.message) return "الرسالة مطلوبة.";

        // فحص الإيميل
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) return "صيغة البريد الإلكتروني غير صحيحة.";

        return null;
    };

    /* -------------------------------------------
        عند الضغط على إرسال
    -------------------------------------------- */
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = {
            fullName: form.fullName.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            topic: form.topic.value.trim(),
            message: form.message.value.trim(),
        };

        // تحقق من الخطأ قبل الإرسال
        const validationError = validateForm(formData);
        if (validationError) {
            setStatus("error", validationError);
            return;
        }

        /* تعطيل زر الإرسال */
        submitBtn.disabled = true;
        setStatus("loading", "جاري إرسال رسالتك...");

        try {
            const response = await fetch("assets/php/save_message.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            /* فشل */
            if (!response.ok || !result.success) {
                const msg =
                    result.errors
                        ? Object.values(result.errors).join(" - ")
                        : result.message || "تعذر إرسال الرسالة.";
                setStatus("error", msg);
            }
            /* نجاح */
            else {
                setStatus("success", "تم إرسال الرسالة بنجاح! سنعود إليك خلال وقت قصير.");
                form.reset();
            }

        } catch (error) {
            setStatus("error", "حدث خطأ غير متوقع، يرجى المحاولة لاحقاً.");
        }

        finally {
            submitBtn.disabled = false;

            // إعادة تحميل تأثير الـ Ripple
            if (typeof window.initButtonRipples === "function") {
                window.initButtonRipples();
            }
        }
    });
});
