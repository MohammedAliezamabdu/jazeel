// Translations Data
const translations = {
    ar: {
        // Brand
        brand: {
            name: "جزيل للضيافة"
        },
        // Navigation
        nav: {
            home: "الرئيسية",
            products: "منتجات جزيل",
            packages: "بكجات المناسبات",
            about: "عن جزيل",
            b2b: "حلول B2B",
            links: "الروابط الرسمية",
            contact: "تواصل معنا"
        },
        // Common
        common: {
            viewDetails: "عرض التفاصيل",
            learnMore: "تعرف على المزيد",
            contactUs: "تواصل معنا",
            readMore: "اقرأ المزيد"
        },
        // Home Page
        home: {
            heroTitle: "ضيافة سعودية أصيلة بطابع فاخر",
            heroSubtitle: "جزيل تقدّم تجربة ضيافة متكاملة تعكس جودتنا في تقديم التمور المختارة، الشوكولاتة الفاخرة، والصواني المصممة للمناسبات الخاصة.",
            exploreProducts: "استكشف المنتجات",
            viewPackages: "اطّلع على البكجات",
            sectionsTitle: "أقسام ضيافة جزيل",
            sectionsSubtitle: "منتجات متكاملة لكل لحظة ضيافة",
            hospitalityTitle: "ضيافة المناسبات",
            hospitalityDesc: "تجهيز صواني الضيافة الفاخرة مع التمر، المكسرات، والشكولاتة لتشكّل تجربة متكاملة لضيوفك.",
            viewPackagesBtn: "عرض البكجات",
            productsTitle: "منتجات مختارة",
            productsDesc: "مجموعة متنوعة من التمور السعودية الفاخرة والشوكولاتة والحلويات المصاحبة بجودة عالية.",
            discoverProducts: "اكتشف المنتجات",
            b2bTitle: "حلول قطاع الأعمال",
            b2bDesc: "خدمات مخصصة للفنادق والشركات لتقديم ضيافة راقية تعكس هوية العلامة التجارية.",
            learnSolutions: "تعرف على الحلول",
            commitmentTitle: "التزامنا",
            commitmentSubtitle: "هوية سعودية، جودة عالمية",
            qualityTag: "جودة",
            qualityTitle: "اختيار دقيق لمصادرنا",
            qualityDesc: "نعتمد على مورّدين معتمدين محلياً لضمان جودة التمور والمنتجات المواكبة لذائقة الضيافة السعودية.",
            designTag: "تصميم",
            designTitle: "تقديم يعكس الفخامة",
            designDesc: "كل منتج يغلف بعناية وبألوان متناسقة تعبّر عن هوية جزيل وتنسجم مع مناسبات العملاء.",
            serviceTag: "خدمة",
            serviceTitle: "جاهزية للطلب",
            serviceDesc: "فريق متخصص يتابع الطلبات ويضمن وصولها في الوقت المحدد مع تقديم حلول مخصصة لكل احتياج."
        },
        // Footer
        footer: {
            description: "نحتفي بالضيافة السعودية من خلال منتجات فاخرة وحلول مبتكرة تعكس قيم الكرم والأناقة.",
            copyright: "© 2025 جزيل للضيافة. جميع الحقوق محفوظة.",
            about: "عن جزيل",
            links: "روابطنا",
            support: "الدعم والتواصل"
        }
    },
    en: {
        // Brand
        brand: {
            name: "Jazil Hospitality"
        },
        // Navigation
        nav: {
            home: "Home",
            products: "Jazil Products",
            packages: "Event Packages",
            about: "About Jazil",
            b2b: "B2B Solutions",
            links: "Official Links",
            contact: "Contact Us"
        },
        // Common
        common: {
            viewDetails: "View Details",
            learnMore: "Learn More",
            contactUs: "Contact Us",
            readMore: "Read More"
        },
        // Home Page
        home: {
            heroTitle: "Authentic Saudi Hospitality with Luxury Touch",
            heroSubtitle: "Jazil offers a complete hospitality experience that reflects our excellence in providing selected dates, premium chocolate, and trays designed for special occasions.",
            exploreProducts: "Explore Products",
            viewPackages: "View Packages",
            sectionsTitle: "Jazil Hospitality Sections",
            sectionsSubtitle: "Complete products for every hospitality moment",
            hospitalityTitle: "Event Hospitality",
            hospitalityDesc: "Preparing luxury hospitality trays with dates, nuts, and chocolate to create a complete experience for your guests.",
            viewPackagesBtn: "View Packages",
            productsTitle: "Selected Products",
            productsDesc: "A variety of premium Saudi dates, chocolate, and accompanying sweets with high quality.",
            discoverProducts: "Discover Products",
            b2bTitle: "Business Solutions",
            b2bDesc: "Customized services for hotels and companies to provide elegant hospitality that reflects the brand identity.",
            learnSolutions: "Learn About Solutions",
            commitmentTitle: "Our Commitment",
            commitmentSubtitle: "Saudi Identity, Global Quality",
            qualityTag: "Quality",
            qualityTitle: "Careful Selection of Our Sources",
            qualityDesc: "We rely on locally certified suppliers to ensure the quality of dates and products that match Saudi hospitality taste.",
            designTag: "Design",
            designTitle: "Presentation Reflecting Luxury",
            designDesc: "Each product is carefully wrapped with harmonious colors that express Jazil's identity and match customer occasions.",
            serviceTag: "Service",
            serviceTitle: "Ready to Order",
            serviceDesc: "A specialized team follows up on orders and ensures their arrival on time while providing customized solutions for every need."
        },
        // Footer
        footer: {
            description: "We celebrate Saudi hospitality through premium products and innovative solutions that reflect the values of generosity and elegance.",
            copyright: "© 2025 Jazil Hospitality. All rights reserved.",
            about: "About Jazil",
            links: "Our Links",
            support: "Support & Contact"
        }
    }
};

// Language Management
let currentLanguage = localStorage.getItem('language') || 'ar';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    translatePage();
    updateLanguageButton();
}

function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

function translatePage() {
    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key);
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Translate title attributes
    document.querySelectorAll('[data-translate-title]').forEach(element => {
        const key = element.getAttribute('data-translate-title');
        const translation = getTranslation(key);
        if (translation) {
            element.title = translation;
        }
    });

    // Translate alt attributes
    document.querySelectorAll('[data-translate-alt]').forEach(element => {
        const key = element.getAttribute('data-translate-alt');
        const translation = getTranslation(key);
        if (translation) {
            element.alt = translation;
        }
    });
}

function updateLanguageButton() {
    const langBtn = document.getElementById('languageToggle');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'ar' ? 'EN' : 'AR';
        langBtn.setAttribute('aria-label', currentLanguage === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});

