// Header and Footer HTML templates
const headerHTML = `
<header class="site-header">
    <nav class="nav container">
        <a class="brand" href="index.html">
            <span class="brand-mark">JZ</span>
            <span data-translate="brand.name">جزيل للضيافة</span>
        </a>
        <div class="nav-actions">
            <button id="darkToggle" class="lang-toggle" aria-label="تبديل الوضع الليلي" title="الوضع الليلي">
                <i class="fa-solid fa-moon"></i>
            </button>
            <button id="languageToggle" class="lang-toggle" aria-label="Toggle Language">
                <span>EN</span>
            </button>
            <button class="nav-toggle" aria-label="فتح القائمة">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <ul class="nav-links">
            <li><a href="index.html" data-page="index" data-translate="nav.home">الرئيسية</a></li>
            <li><a href="products.html" data-page="products" data-translate="nav.products">منتجات جزيل</a></li>
            <li><a href="packages.html" data-page="packages" data-translate="nav.packages">بكجات المناسبات</a></li>
            <li><a href="about.html" data-page="about" data-translate="nav.about">عن جزيل</a></li>
            <li><a href="b2b.html" data-page="b2b" data-translate="nav.b2b">حلول B2B</a></li>
            <li><a href="links.html" data-page="links" data-translate="nav.links">الروابط الرسمية</a></li>
            <li><a href="contact.html" data-page="contact" data-translate="nav.contact">تواصل معنا</a></li>
        </ul>
    </nav>
</header>
`;

const footerHTML = `
<footer>
    <div class="footer-content">
        <div class="footer-top">
            <div class="brand">
                <span class="brand-mark">JZ</span>
                <span data-translate="brand.name">جزيل للضيافة</span>
            </div>
            <p data-translate="footer.description">نحتفي بالضيافة السعودية من خلال منتجات فاخرة وحلول مبتكرة تعكس قيم الكرم والأناقة.</p>
        </div>
        <div class="footer-bottom">
            <span data-translate="footer.copyright">© 2025 جزيل للضيافة. جميع الحقوق محفوظة.</span>
            <div class="footer-links">
                <a href="about.html" data-translate="footer.about">عن جزيل</a>
                <a href="links.html" data-translate="footer.links">روابطنا</a>
                <a href="contact.html" data-translate="footer.support">الدعم والتواصل</a>
            </div>
        </div>
    </div>
</footer>
`;

// Load header and footer
function loadHeader() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        initNavigation();
        setActivePage();
        initLanguageToggle();
        initDarkModeToggle();
    }
}

function initLanguageToggle() {
    const langBtn = document.getElementById('languageToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'ar';
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            if (typeof setLanguage === 'function') {
                setLanguage(newLang);
            }
        });
        // Update button text on load
        const currentLang = localStorage.getItem('language') || 'ar';
        langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    }
}

function loadFooter() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

function initNavigation() {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            const isActive = navToggle.classList.toggle("active");
            navLinks.classList.toggle("mobile-visible", isActive);
            navLinks.classList.toggle("mobile-hidden", !isActive);
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navToggle.classList.remove("active");
                navLinks.classList.remove("mobile-visible");
                navLinks.classList.add("mobile-hidden");
            });
        });
    }
}

function setActivePage() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const pageName = currentPage.replace(".html", "") || "index";
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
        const navLinks = document.querySelectorAll(".nav-links a");
        navLinks.forEach((link) => {
            const linkPage = link.getAttribute("data-page");
            if (linkPage === pageName) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadFooter();
    requestAnimationFrame(() => {
        initButtonRipples();
        initScrollAnimations();
        initScrollTopButton();
    });
});

function initDarkModeToggle() {
    const toggle = document.getElementById("darkToggle");
    const body = document.body;
    // apply stored preference
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
    }
    updateDarkToggleIcon();
    if (toggle) {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            const isDark = body.classList.contains("dark-mode");
            localStorage.setItem("dark-mode", isDark);
            updateDarkToggleIcon();
        });
    }
}

function updateDarkToggleIcon() {
    const toggle = document.getElementById("darkToggle");
    if (!toggle) return;
    const isDark = document.body.classList.contains("dark-mode");
    toggle.textContent = isDark ? "☀" : "☾";
}

function initButtonRipples() {
    const rippleTargets = document.querySelectorAll(".btn, .jazeel-btn");
    rippleTargets.forEach((element) => {
        if (element.dataset.rippleBound === "true") return;
        element.dataset.rippleBound = "true";
        element.style.position = element.style.position || "relative";
        element.style.overflow = element.style.overflow || "hidden";
        element.addEventListener("click", (event) => {
            const rect = element.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const ripple = document.createElement("span");
            ripple.className = "btn-ripple";
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
            element.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

function initScrollAnimations() {
    if (window.__jazilScrollObserverInitialized) return;
    const animatedElements = document.querySelectorAll("[data-animate]");
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-on-scroll", "is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: "0px 0px -10% 0px",
        }
    );

    animatedElements.forEach((element) => {
        element.classList.add("animate-on-scroll");
        observer.observe(element);
    });

    window.__jazilScrollObserverInitialized = true;
}

function initScrollTopButton() {
    if (document.getElementById("scrollTopBtn")) {
        return;
    }

    const btn = document.createElement("button");
    btn.id = "scrollTopBtn";
    btn.className = "scroll-top-btn";
    btn.title = "العودة للأعلى";
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btn);

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            btn.classList.add("is-visible");
        } else {
            btn.classList.remove("is-visible");
        }
    };

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
}

window.initButtonRipples = initButtonRipples;
