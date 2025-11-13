// Packages Data and Rendering (mirrors products page behavior)
// التصنيفات: أعراس، ضيافة، تخرج — مع تفاصيل مخصصة حسب طلبك

const packagesData = [
	{
		id: 101,
		category: "wedding",
		title: "بكجات الضيافة (الزواج)",
		description: "تنسيقات فاخرة لحفلات الزواج تشمل صواني، تمور محشوة، وشوكولاتة بتخصيص أسماء العروسين.",
		image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE",
		price: "حسب الطلب",
		sections: [
			{ title: "تفاصيل البكجات", items: [
				{ name: "تصاميم حسب طابع الحفل", image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=120&h=120&fit=crop" },
				{ name: "تنسيق طاولة ضيافة كامل", image: "https://images.unsplash.com/photo-1505937096995-51f7d12b9b06?w=120&h=120&fit=crop" },
				{ name: "تخصيص ألوان وتغليف", image: "https://images.unsplash.com/photo-1512916206824-947dc1b22926?w=120&h=120&fit=crop" }
			]},
			{ title: "محتوى البكجات", items: [
				{ name: "تمور فاخرة محشوة", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9d7?w=120&h=120&fit=crop" },
				{ name: "شوكولاتة بلجيكية مختارة", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?w=120&h=120&fit=crop" },
				{ name: "حلويات عربية وغربية", image: "https://images.unsplash.com/photo-1541976076758-347942db1970?w=120&h=120&fit=crop" },
				{ name: "مقبلات وميني سندويتش", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=120&h=120&fit=crop" }
			]},
			{ title: "أشكال الصياني", items: [
				{ name: "دائري متعدد الأدوار", image: "https://images.unsplash.com/photo-1586201375754-1421e0aa2f12?w=120&h=120&fit=crop" },
				{ name: "مستطيل رخامي", image: "https://images.unsplash.com/photo-1523419409543-8f5ae80d40c7?w=120&h=120&fit=crop" },
				{ name: "أكريليك شفاف", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=120&h=120&fit=crop" },
				{ name: "خشب طبيعي", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=120&h=120&fit=crop" }
			]},
			{ title: "حشوات الشوكولاتة", items: [
				{ name: "نوتيلا", image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5e72?w=120&h=120&fit=crop" },
				{ name: "فستق", image: "https://images.unsplash.com/photo-1599599810769-356db199e7d6?w=120&h=120&fit=crop" },
				{ name: "كراميل مملح", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?w=120&h=120&fit=crop" },
				{ name: "فانيلا", image: "https://images.unsplash.com/photo-1541782814453-0409be5b3727?w=120&h=120&fit=crop" }
			]},
			{ title: "حشوات التمر", items: [
				{ name: "فستق حلبي", image: "https://images.unsplash.com/photo-1599599810769-356db199e7d6?w=120&h=120&fit=crop" },
				{ name: "لوز محمص", image: "https://images.unsplash.com/photo-1589212850451-cf7cbe478f87?w=120&h=120&fit=crop" },
				{ name: "جوز البكان", image: "https://images.unsplash.com/photo-1598373182133-52452f7691a2?w=120&h=120&fit=crop" },
				{ name: "جوز الهند", image: "https://images.unsplash.com/photo-1601315488302-82dfe8434c14?w=120&h=120&fit=crop" }
			]},
			{ title: "حشوات المعجنات", items: [
				{ name: "جبن كريمي", image: "https://images.unsplash.com/photo-1559560843-45f5a2f9b7e7?w=120&h=120&fit=crop" },
				{ name: "سبانخ", image: "https://images.unsplash.com/photo-1542444459-db63c86e6e12?w=120&h=120&fit=crop" },
				{ name: "لحم متبل", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=120&h=120&fit=crop" }
			]},
			{ title: "حشوات الموالح", items: [
				{ name: "روست بيف", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=120&h=120&fit=crop" },
				{ name: "دجاج مشوي", image: "https://images.unsplash.com/photo-1544025162-8b298a61a5e0?w=120&h=120&fit=crop" },
				{ name: "بطاطس بالترافل", image: "https://images.unsplash.com/photo-1505575972945-270b6aebc3f1?w=120&h=120&fit=crop" }
			]},
			{ title: "الأصناف الخاصة", items: [
				{ name: "شوكولاتة باسم العروسين", image: "https://images.unsplash.com/photo-1542326237-94b1c5a538d1?w=120&h=120&fit=crop" },
				{ name: "قهوة مختصة", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=120&h=120&fit=crop" },
				{ name: "محطات حلا جوالة", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=120&h=120&fit=crop" }
			]},
			{ title: "حلا الزفة", items: [
				{ name: "حلويات فردية بتغليف ذهبي", image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=120&h=120&fit=crop" },
				{ name: "تارتات ميني مزينة", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=120&h=120&fit=crop" }
			]}
		]
	},
	{
		id: 102,
		category: "hospitality",
		title: "بكجات الضيافة",
		description: "باقات مرنة للمناسبات العائلية وضيافة الشركات مع خيارات تسليم وتجهيز في الموقع.",
		image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE",
		price: "حسب الطلب",
		sections: [
			{ title: "تفاصيل البكجات", items: [
				{ name: "مقاسات متنوعة", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=120&h=120&fit=crop" },
				{ name: "خدمة تسليم أو تجهيز", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&h=120&fit=crop" },
				{ name: "تخصيص هوية بصرية", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=120&h=120&fit=crop" }
			]},
			{ title: "محتوى البكجات", items: [
				{ name: "تمور مختارة", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9d7?w=120&h=120&fit=crop" },
				{ name: "شوكولاتة فاخرة", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?w=120&h=120&fit=crop" },
				{ name: "معجنات ساخنة", image: "https://images.unsplash.com/photo-1551782450-17144c3a09f2?w=120&h=120&fit=crop" },
				{ name: "مقبلات باردة", image: "https://images.unsplash.com/photo-1505575972945-270b6aebc3f1?w=120&h=120&fit=crop" }
			]},
			{ title: "أشكال الصياني", items: [
				{ name: "خشب", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=120&h=120&fit=crop" },
				{ name: "رخام", image: "https://images.unsplash.com/photo-1523419409543-8f5ae80d40c7?w=120&h=120&fit=crop" },
				{ name: "أكريليك", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=120&h=120&fit=crop" }
			]},
			{ title: "حشوات الشوكولاتة", items: [
				{ name: "نوتيلا", image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5e72?w=120&h=120&fit=crop" },
				{ name: "بيضاء", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?w=120&h=120&fit=crop" },
				{ name: "فستق", image: "https://images.unsplash.com/photo-1599599810769-356db199e7d6?w=120&h=120&fit=crop" },
				{ name: "برالين بندق", image: "https://images.unsplash.com/photo-1541782814453-0409be5b3727?w=120&h=120&fit=crop" }
			]},
			{ title: "حشوات التمر", items: [
				{ name: "عسل عضوي", image: "https://images.unsplash.com/photo-1514996937319-344454492b37?w=120&h=120&fit=crop" },
				{ name: "سمسم محمص", image: "https://images.unsplash.com/photo-1621990345502-f4bda61eba9b?w=120&h=120&fit=crop" },
				{ name: "عجينة لوز", image: "https://images.unsplash.com/photo-1582902288363-3b5f3ac8b6df?w=120&h=120&fit=crop" },
				{ name: "بِقان", image: "https://images.unsplash.com/photo-1598373182133-52452f7691a2?w=120&h=120&fit=crop" }
			]},
			{ title: "حشوات المعجنات", items: [
				{ name: "جبن", image: "https://images.unsplash.com/photo-1559560843-45f5a2f9b7e7?w=120&h=120&fit=crop" },
				{ name: "دجاج كريمي", image: "https://images.unsplash.com/photo-1604908176946-8f3d3b306602?w=120&h=120&fit=crop" },
				{ name: "سبانخ", image: "https://images.unsplash.com/photo-1542444459-db63c86e6e12?w=120&h=120&fit=crop" }
			]},
			{ title: "حشوات الموالح", items: [
				{ name: "كيش", image: "https://images.unsplash.com/photo-1604908554049-1d7e2d36df47?w=120&h=120&fit=crop" },
				{ name: "ميني بيتزا", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=120&h=120&fit=crop" },
				{ name: "دجاج بالسمسم", image: "https://images.unsplash.com/photo-1544025162-8b298a61a5e0?w=120&h=120&fit=crop" }
			]}
		]
	},
	{
		id: 103,
		category: "graduation",
		title: "بكجات التخرج",
		description: "تجهيزات احتفالية بطابع الجامعة مع حلويات فريش وحشوات مالحة للمشاركة.",
		image: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE",
		price: "حسب الطلب",
		sections: [
			{ title: "المحتويات", items: [
				{ name: "هدايا تذكارية", image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=120&h=120&fit=crop" },
				{ name: "صواني حلا بطابع الجامعة", image: "https://images.unsplash.com/photo-1514517095791-6b3a67b79e5f?w=120&h=120&fit=crop" },
				{ name: "لوحات تهنئة للصور", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=120&h=120&fit=crop" }
			]},
			{ title: "حشوات الشوكولاتة وفريش", items: [
				{ name: "نكهات فواكه موسمية", image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=120&h=120&fit=crop" },
				{ name: "تشيز كيك بايتس", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=120&h=120&fit=crop" },
				{ name: "تارتات فريش", image: "https://images.unsplash.com/photo-1551029506-0807df4f9d18?w=120&h=120&fit=crop" }
			]},
			{ title: "حشوات الموالح", items: [
				{ name: "أقماع دجاج وتونة", image: "https://images.unsplash.com/photo-1544025162-8b298a61a5e0?w=120&h=120&fit=crop" },
				{ name: "لفائف خضار بالجبن", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=120&h=120&fit=crop" },
				{ name: "ميني برجر", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=120&h=120&fit=crop" }
			]}
		]
	}
];

const packageCategoryNames = {
	all: "الكل",
	wedding: "الأعراس",
	hospitality: "الضيافة",
	graduation: "التخرج"
};

document.addEventListener("DOMContentLoaded", () => {
	if (document.getElementById("packagesGrid")) {
		initPackagesPage();
	}
});

function initPackagesPage() {
	renderPackages("all");
	setupPackageFilterTabs();
	setupPackageModal();
}

function renderPackages(category) {
	const grid = document.getElementById("packagesGrid");
	if (!grid) return;

	const filtered = category === "all"
		? packagesData
		: packagesData.filter(p => p.category === category);

	grid.innerHTML = filtered.map(pkg => `
		<div class="product-card" data-package-id="${pkg.id}">
			<img src="${pkg.image}" alt="${pkg.title}" class="product-image">
			<div class="product-info">
				<span class="product-category">${packageCategoryNames[pkg.category]}</span>
				<h3 class="product-title">${pkg.title}</h3>
				<p class="product-description">${pkg.description}</p>
			</div>
			<div class="product-footer">
				<span class="product-price">${pkg.price}</span>
				<button class="view-details-btn">عرض التفاصيل</button>
			</div>
		</div>
	`).join("");

	document.querySelectorAll(".product-card").forEach(card => {
		card.addEventListener("click", (e) => {
			if (e.target.classList.contains("view-details-btn")) {
				e.stopPropagation();
			}
			const id = parseInt(card.dataset.packageId);
			openPackageModal(id);
		});
	});

	if (typeof window.initButtonRipples === "function") {
		window.initButtonRipples();
	}
}

function setupPackageFilterTabs() {
	const tabs = document.querySelectorAll(".filter-tab");
	tabs.forEach(tab => {
		tab.addEventListener("click", () => {
			tabs.forEach(t => t.classList.remove("active"));
			tab.classList.add("active");
			const category = tab.dataset.category;
			renderPackages(category);
		});
	});
}

function setupPackageModal() {
	const modal = document.getElementById("packageModal");
	const closeBtn = document.getElementById("closePackageModal");

	if (closeBtn) {
		closeBtn.addEventListener("click", closePackageModal);
	}

	if (modal) {
		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				closePackageModal();
			}
		});
	}

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && modal?.classList.contains("active")) {
			closePackageModal();
		}
	});
}

function openPackageModal(packageId) {
	const pkg = packagesData.find(p => p.id === packageId);
	if (!pkg) return;

	const modal = document.getElementById("packageModal");
	const modalBody = document.getElementById("packageModalBody");
	if (!modal || !modalBody) return;

	const sectionsHtml = pkg.sections.map(section => `
		<div class="modal-section">
			<h3 class="modal-section-title">
				<i class="fas fa-list-ul"></i>
				${section.title}
			</h3>
			<ul class="options-list">
				${section.items.map(item => {
					if (typeof item === "string") {
						return `<li><i class="fas fa-check"></i> ${item}</li>`;
					}
					const safeImg = item.image || "assets/icons/packages.png";
					return `
						<li style="display: grid; grid-template-columns: 56px 1fr; gap: .75rem; align-items: center;">
							<img src="${safeImg}" alt="${item.name}" style="width: 56px; height: 56px; object-fit: cover; border-radius: 8px; border: 1px solid #eee;">
							<span>${item.name}</span>
						</li>
					`;
				}).join("")}
			</ul>
		</div>
	`).join("");

	modalBody.innerHTML = `
		<img src="${pkg.image}" alt="${pkg.title}" class="modal-product-image">
		<span class="modal-product-category">${packageCategoryNames[pkg.category]}</span>
		<h2 class="modal-product-title">${pkg.title}</h2>
		<p class="modal-product-description">${pkg.description}</p>
		${sectionsHtml}
		<div class="modal-actions">
			<a href="contact.html" class="btn btn-primary">
				<i class="fas fa-envelope"></i>
				طلب عرض سعر
			</a>
			<a href="products.html" class="btn btn-tertiary">
				<i class="fas fa-store"></i>
				عرض المنتجات
			</a>
		</div>
	`;

	modal.classList.add("active");
	document.body.style.overflow = "hidden";
}

function closePackageModal() {
	const modal = document.getElementById("packageModal");
	if (modal) {
		modal.classList.remove("active");
		document.body.style.overflow = "";
	}
}


