// Products Data
// ملاحظة: استبدل روابط Google Drive بروابط الصور الخاصة بك
// التنسيق: https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
const productsData = [
    // Dates Products
    {
        id: 1,
        category: "dates",
        title: "تمر السكري المحشو",
        description: "تمر سكري فاخر من القصيم محشو باختيارك من المكسرات الفاخرة، معبأ بعناية في علب أنيقة.",
        image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE", // استبدل برابط Google Drive
        price: "من 85 ريال",
        fillings: [
            "فستق حلبي محمص",
            "لوز كاليفورنيا",
            "جوز البكان",
            "حمص محمص",
            "مزيج مكسرات",
            "شوكولاتة داكنة"
        ],
        options: [
            "عبوة 500 جرام",
            "عبوة 1 كيلو",
            "عبوة 2 كيلو",
            "عبوة 3 كيلو",
            "تغليف هدية فاخر",
            "إضافة رسالة شخصية",
            "طباعة شعار الشركة"
        ]
    },
    {
        id: 2,
        category: "dates",
        title: "خلاص القصيم",
        description: "تمر خلاص القصيم الأصيل بجودة ممتازة، يمكن حشوه أو تقديمه طبيعي، معبأ في عبوات فاخرة.",
        image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE", // استبدل برابط Google Drive
        price: "من 95 ريال",
        fillings: [
            "فستق حلبي",
            "لوز محمص",
            "جوز البكان",
            "مزيج ثلاثي",
            "شوكولاتة بيضاء"
        ],
        options: [
            "عبوة 500 جرام",
            "عبوة 1 كيلو",
            "عبوة 2 كيلو",
            "تغليف خشبي فاخر",
            "إضافة بطاقة شكر"
        ]
    },
    {
        id: 3,
        category: "dates",
        title: "تمر العنبرة",
        description: "تمر العنبرة النادر من المدينة المنورة، يتميز بحجمه الكبير ومذاقه الفريد، محشو حسب الطلب.",
        image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE", // استبدل برابط Google Drive
        price: "من 120 ريال",
        fillings: [
            "فستق حلبي فاخر",
            "لوز كاليفورنيا",
            "جوز البكان",
            "مزيج فاخر",
            "شوكولاتة بلجيكية"
        ],
        options: [
            "عبوة 500 جرام",
            "عبوة 1 كيلو",
            "عبوة 2 كيلو",
            "صندوق خشبي فاخر",
            "تغليف هدية مميز"
        ]
    },
    {
        id: 4,
        category: "dates",
        title: "تمر الصفاوي",
        description: "تمر الصفاوي من القصيم بجودة عالية، محشو باختيارك من الحشوات الفاخرة، معبأ بعناية.",
        image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE", // استبدل برابط Google Drive
        price: "من 75 ريال",
        fillings: [
            "فستق حلبي",
            "لوز محمص",
            "جوز البكان",
            "حمص محمص"
        ],
        options: [
            "عبوة 500 جرام",
            "عبوة 1 كيلو",
            "عبوة 2 كيلو",
            "تغليف هدية"
        ]
    },
    // Chocolate Products
    {
        id: 5,
        category: "chocolate",
        title: "شوكولاتة الزعفران الفاخرة",
        description: "ألواح شوكولاتة بلجيكية بنكهة الزعفران الأصيل، تغليف فني أنيق مناسب للهدايا والمناسبات.",
        image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE", // استبدل برابط Google Drive
        price: "من 65 ريال",
        fillings: [
            "زعفران إيراني أصيل",
            "شوكولاتة داكنة 70%",
            "قشدة فاخرة",
            "مكسرات محمصة"
        ],
        options: [
            "لوح 200 جرام",
            "لوح 400 جرام",
            "صندوق 6 ألواح",
            "صندوق 12 لوح",
            "تغليف هدية فاخر",
            "بطاقة شخصية"
        ]
    },
    {
        id: 6,
        category: "chocolate",
        title: "شوكولاتة القهوة السعودية",
        description: "شوكولاتة سويسرية بنكهة القهوة العربية الأصيلة، تجمع بين الفخامة والهوية المحلية.",
        image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE", // استبدل برابط Google Drive
        price: "من 70 ريال",
        fillings: [
            "قهوة عربية أصيلة",
            "شوكولاتة حليب",
            "كراميل",
            "بندق محمص"
        ],
        options: [
            "لوح 200 جرام",
            "لوح 400 جرام",
            "صندوق 6 ألواح",
            "تغليف هدية",
            "طباعة اسم أو رسالة"
        ]
    },
    {
        id: 7,
        category: "chocolate",
        title: "شوكولاتة محشوة بالتمر",
        description: "شوكولاتة فاخرة محشوة بتمر سكري طازج، تجربة فريدة تجمع بين الشوكولاتة البلجيكية والتمر السعودي.",
        image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE", // استبدل برابط Google Drive
        price: "من 80 ريال",
        fillings: [
            "تمر سكري طازج",
            "شوكولاتة داكنة",
            "مكسرات",
            "كراميل"
        ],
        options: [
            "صندوق 12 قطعة",
            "صندوق 24 قطعة",
            "صندوق 36 قطعة",
            "تغليف هدية فاخر",
            "بطاقة تهنئة"
        ]
    },
    {
        id: 8,
        category: "chocolate",
        title: "شوكولاتة الهيل والزعفران",
        description: "مزيج فاخر يجمع بين نكهة الهيل العطرية والزعفران الأصيل في شوكولاتة بلجيكية عالية الجودة.",
        image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE", // استبدل برابط Google Drive
        price: "من 75 ريال",
        fillings: [
            "هيل أخضر أصيل",
            "زعفران إيراني",
            "شوكولاتة حليب",
            "فانيليا"
        ],
        options: [
            "لوح 200 جرام",
            "لوح 400 جرام",
            "صندوق 6 ألواح",
            "تغليف هدية مميز"
        ]
    },
    // Trays Products
    {
        id: 9,
        category: "trays",
        title: "ًTray Norah | صينية نوره",
        description: "صينية من الخشب الطبيعي الفاخر، منسقة بعناية مع تمور محشوة، شوكولاتة، ومكسرات مختارة.",
        image: "https://raw.githubusercontent.com/MohammedAliezamabdu/icons/4a4748bc402cbac7c68c681a6fb1bd223f1e8a7c/soany/Norah.jpg",
        price: "359ر.س",
        fillings: [
            "تمر سكري محشو",
           
        ],
        options: [
            "صينية خشب طبيعي",
            "صينية رخام",
            "صينية أكريليك",
            "تنسيق حسب المناسبة",
            "إضافة شعار الشركة",
            "خدمة التجهيز الميداني"
        ]
    },
    {
        id: 10,
        category: "trays",
        title: "Tray Ranem | صينية رنيم ",
        description: "صينية مصممة خصيصاً للمناسبات الخاصة، تنسيق متقن يجمع بين المنتجات الفاخرة في عرض أنيق.",
        image: "https://raw.githubusercontent.com/MohammedAliezamabdu/icons/89b90cf5ad2e66889f45550909fe29e7b2a285d0/soany/Ranem.jpg",
        price: " 260ر.س ",
        fillings: [
            "الوزن 750 ج",
            "تمور محشوة متنوعة",
            "شوكولاتة فاخرة",
            "مكسرات فاخرة",
            "حلويات عربية",
            "قهوة وتمور"
        ],
        options: [
            "تنسيق كامل",
            "تخصيص الألوان",
            "إضافة بطاقات",
            "خدمة التجهيز",
            "طباعة شعار"
        ]
    },
    {
        id: 11,
        category: "trays",
        title: " Tray Rawan | صينية روان",
        description: "صينية مصممة لاجتماعات الشركات والفنادق، تنسيق احترافي يعكس الهوية المؤسسية.",
        image: "https://raw.githubusercontent.com/MohammedAliezamabdu/icons/136f388305af179de0e68e4cc7c30a91bf77974f/soany/Rawan.jpg",
        price: "275ر.س",
        fillings: [
            " الوزن : 320ج",
            "  رمان مجفف ",
            "  تشيز كيك ",
            "  تشيز فستق ",
           
        ],
        options: [
            "تخصيص كامل",
            "طباعة شعار الشركة",
            "تنسيق حسب الهوية",
            "خدمة دورية",
            "تجهيز ميداني"
        ]
    },
    {
        id: 12,
        category: "trays",
        title: " Tray Khloud | صينية خلود",
        description: "صينية مصممة خصيصاً للأعراس والمناسبات الكبيرة، تنسيق فاخر يجمع بين الأناقة والجودة.",
        image: "https://images.unsplash.com/photo-1612872087720-bb876e5dda7c?auto=format&fit=crop&w=600&q=80",
        price: "من 400 ريال",
        fillings: [
            "تمور محشوة فاخرة",
            "شوكولاتة فاخرة",
            "مكسرات متنوعة",
            "حلويات عربية",
            "قهوة وتمور"
        ],
        options: [
            "تنسيق فاخر",
            "تخصيص الألوان",
            "إضافة بطاقات",
            "خدمة التجهيز",
            "فريق ميداني"
        ]
    }
];

// Category names
const categoryNames = {
    dates: "التمر",
    chocolate: "الشوكولاتة",
    trays: "الصواني"
};

// Initialize products page
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("productsGrid")) {
        initProductsPage();
    }
});

function initProductsPage() {
    renderProducts("all");
    setupFilterTabs();
    setupModal();
}

function renderProducts(category) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    const filteredProducts = category === "all" 
        ? productsData 
        : productsData.filter(p => p.category === category);

    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <span class="product-category">${categoryNames[product.category]}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
            </div>
            <div class="product-footer">
                <span class="product-price">${product.price}</span>
                <button class="view-details-btn">عرض التفاصيل</button>
            </div>
        </div>
    `).join("");

    // Add click event to product cards
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", (e) => {
            // Prevent opening modal when clicking on the button (it will be handled by button click)
            if (e.target.classList.contains("view-details-btn")) {
                e.stopPropagation();
            }
            const productId = parseInt(card.dataset.productId);
            openProductModal(productId);
        });
    });

    if (typeof window.initButtonRipples === "function") {
        window.initButtonRipples();
    }
}

function setupFilterTabs() {
    const tabs = document.querySelectorAll(".filter-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const category = tab.dataset.category;
            renderProducts(category);
        });
    });
}

function setupModal() {
    const modal = document.getElementById("productModal");
    const closeBtn = document.getElementById("closeModal");

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal?.classList.contains("active")) {
            closeModal();
        }
    });
}

function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("productModal");
    const modalBody = document.getElementById("modalBody");

    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="modal-product-image">
        <span class="modal-product-category">${categoryNames[product.category]}</span>
        <h2 class="modal-product-title">${product.title}</h2>
        <p class="modal-product-description">${product.description}</p>
        
        <div class="modal-section">
            <h3 class="modal-section-title">
                <i class="fas fa-seedling"></i>
                الحشوات المتاحة
            </h3>
            <ul class="fillings-list">
                ${product.fillings.map(filling => `
                    <li><i class="fas fa-check-circle"></i> ${filling}</li>
                `).join("")}
            </ul>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title">
                <i class="fas fa-cog"></i>
                الخيارات الإضافية
            </h3>
            <ul class="options-list">
                ${product.options.map(option => `
                    <li><i class="fas fa-check"></i> ${option}</li>
                `).join("")}
            </ul>
        </div>

        <div class="modal-actions">
            <a href="contact.html" class="btn btn-primary">
                <i class="fas fa-envelope"></i>
                طلب عرض سعر
            </a>
            <a href="packages.html" class="btn btn-tertiary">
                <i class="fas fa-gift"></i>
                عرض البكجات
            </a>
        </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("productModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

