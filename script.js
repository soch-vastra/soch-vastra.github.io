const suits = [
  {
    id: "101",
    itemNo: "ITEM NO: 101",
    title: "The 'Aayat' Embellished Organza Set",
    badge: "Pure Organza",
    soldOut: true,
    images: ["images/1 (1).jpg", "images/1 (2).jpg", "images/1 (3).jpg", "images/1 (4).jpg", "images/1(5).jpg"],
    fabric: "Pure Twill Organza",
    work: "Original Pearl with Dabka work, Timeless Paisley motif & Neckline detail",
    dupatta: "Premium Organza Dupatta with fine embroidery and pearl detailing",
    occasion: "Festive & Grand Celebrations"
  },
  {
    id: "b-50",
    itemNo: "ITEM NO: B-50",
    title: "Green Jiraf Silk Heritage Suit",
    badge: "Jiraf Silk",
    soldOut: true,
    images: ["images/2 (1).jpg", "images/2 (2).jpg"],
    fabric: "Pure Premium Jiraf Silk",
    work: "Beautiful Zari, Dabka & Sequin work on Neckline with Zari on Daman",
    dupatta: "Pure Premium Jiraf Silk Dupatta with rich & graceful drape",
    occasion: "Main Functions, Parties & Celebrations"
  },
  {
    id: "b-42",
    itemNo: "ITEM NO: B-42",
    title: "Royal Maheshwari Zari Silk Suit",
    badge: "Maheshwari Silk",
    soldOut: true,
    images: ["images/3 (1).jpg", "images/3 (2).jpg"],
    fabric: "Pure Maheshwari Premium Silk",
    work: "Designer Neck with Nag buttons, Samosa Gota lace & fine Zari work",
    dupatta: "Pure Silk with elegant Zari Work & beautiful Zari Tassels",
    occasion: "Classy and Sophisticated Party Look"
  },
  {
    id: "b-34-1",
    itemNo: "ITEM NO: B-34",
    title: "Maslin Silk Floral Digital Print Suit",
    badge: "Silk Maslin",
    soldOut: false,
    images: ["images/4 (1).jpg", "images/4 (2).jpg"],
    fabric: "Premium Silk Maslin",
    work: "Original pearl with black metallic pot work, sequence and fine thread work",
    dupatta: "Pure machine silk dupatta with stylish tassels",
    occasion: "Ethnic Parties & Festive Gatherings"
  },
  {
    id: "b-46",
    itemNo: "ITEM NO: B-46",
    title: "Modal Musleen Soothing Silk Suit",
    badge: "Modal Musleen",
    soldOut: false,
    images: ["images/5 (1).jpg", "images/5 (2).jpg"],
    fabric: "Pure Modal Musleen Silk (Skin soothing & breathable)",
    work: "Designer neck with cut work, lace work on daman & sleeves",
    dupatta: "Pure elegance dupatta with beautiful lace border",
    occasion: "Premium Ethnic Wear for a Timeless You"
  },
  {
    id: "b-40-shimmer",
    itemNo: "ITEM NO: B-40",
    title: "Jacquard Shimmer Party Wear Suit",
    badge: "Jacquard Shimmer",
    soldOut: false,
    images: ["images/6 (1).jpg", "images/6 (2).jpg"],
    fabric: "Jacquard Shimmer Kurta with Lining",
    work: "Premium Metallic Pearl & Sequence Work with Neck Patch Work",
    dupatta: "Full-length striped dupatta with an all-around lace border",
    occasion: "Festive, Party & Special Occasions"
  },
  {
    id: "b-34-final",
    itemNo: "ITEM NO: B-34",
    title: "Pure Soft Silk Self Weaving Suit",
    badge: "Pure Soft Silk",
    soldOut: false,
    images: ["images/7 (1).jpg", "images/7 (2).jpg"],
    fabric: "Pure Soft Silk with Soft Premium Bottom",
    work: "All-Over Self Thread Weaving with Subtle Self Zari Work",
    dupatta: "Striped Soft Organza Dupatta with Delicate Lace Detailing",
    occasion: "Haldi Functions, Festive Gatherings & Special Parties"
  },
  {
    id: "b-40-kanjivaram",
    itemNo: "ITEM NO: B-40",
    title: "Pure Kanjivaram Silk Peacock Suit",
    badge: "Kanjivaram Silk",
    soldOut: true,
    images: ["images/8 (1).jpg", "images/8 (2).jpg"],
    fabric: "Pure Kanjivaram Soft Silk",
    work: "Pure Soft Zari All-Over Work with Elegant Peacock Centre Motif",
    dupatta: "Dupatta with Premium Soft Zari Border, Butis & Tassels",
    occasion: "Karwa Chauth, Weddings & Festive Celebrations"
  },
  {
    id: "b-18-1",
    itemNo: "ITEM NO: B-18",
    title: "Pure Mal Cotton Mirror Work Suit",
    badge: "Mal Cotton",
    soldOut: true,
    images: ["images/9 (1).jpg", "images/9 (2).jpg", "images/9 (3).jpg"],
    fabric: "Pure Mal Cotton (Feather Soft & Breathable)",
    work: "Elegant Resham Work with Hints of Mirror Work & Cotton Lace Daman",
    dupatta: "Premium Dupatta with Booti Work & Zari Border with Cotton Lace",
    occasion: "Parties, Festive Wear & Special Occasions"
  },
  {
    id: "b-19",
    itemNo: "ITEM NO: B-19",
    title: "Pure Jamdani Silk Mirror Work Suit",
    badge: "Jamdani Silk",
    soldOut: true,
    images: ["images/10 (1).jpg", "images/10 (2).jpg"],
    fabric: "Pure Jamdani Silk with Self Zari Weaving",
    work: "Rich Resham Embroidery with Mirror Work & Self Zari Weaving",
    dupatta: "Premium Dupatta with Zari Border & All Around Cotton Lace",
    occasion: "Weddings, Festivals & Special Occasions"
  },
  {
    id: "b-52-kanjivaram",
    itemNo: "ITEM NO: B-52",
    title: "Pure Kanjivaram Silk Knot Work Suit",
    badge: "Pure Kanjivaram Silk",
    soldOut: false,
    images: ["images/11 (1).jpg", "images/11 (2).jpg"],
    fabric: "Pure Kanjivaram Silk with Plain Bottom",
    work: "Knot Work, Sequin Detailing, Intricate Embroidery & Self Zari Work",
    dupatta: "Premium Dupatta with Stripes, Elegant Work & Lace Detailing",
    occasion: "Festive, Wedding & Party Wear"
  },
  {
    id: "b-52",
    itemNo: "ITEM NO: B-52",
    title: "Premium Gaji Silk Collection",
    badge: "Premium Gaji Silk",
    soldOut: false,
    images: ["images/12 (1).jpg", "images/12 (2).jpg"],
    fabric: "100% Pure Gaji Silk Kurti & Dupatta, Pure Cotton Plaited Bottom",
    work: "Mirror work yoke, embellished daman detail, intricate hand-crafted embellishments, and finest traditional prints",
    dupatta: "Pure Gaji silk dupatta with elegant traditional print and premium detailing",
    occasion: "Unstitched suit set for festive, party, and ethnic wear"
  },
  {
    id: "b-20-silk",
    itemNo: "ITEM NO: B-20",
    title: "Pure Maheshwari Silk Suit",
    badge: "Pure Maheshwari Silk",
    soldOut: false,
    images: ["images/13.jpg"],
    fabric: "Pure Maheshwari Silk (With Lining)",
    work: "Elegant traditional print, soft, lightweight & skin-friendly, with lining for extra comfort",
    dupatta: "Dupatta fabric with zari border",
    occasion: "Perfect for office wear, party wear, ethnic wear & festive wear"
  },
  {
    id: "gajji-silk-b20",
    itemNo: "ITEM NO: B-20",
    title: "Premium Gajji Silk Unstitched Suit Set",
    badge: "Premium Gajji Silk",
    soldOut: true,
    images: ["images/14.jpg"],
    fabric: "100% Pure Gajji Silk Kurti & Dupatta with Pure Cotton Plane Bottom",
    work: "Mirror work yoke, embellished daman detail, finest traditional prints & hand-crafted embellishments",
    dupatta: "Pure Gajji Silk Dupatta",
    occasion: "Unstitched Suit Set - Festive & Traditional Wear"
  },
  {
    id: "b-20-maheshwari-silk",
    itemNo: "ITEM NO: B-20",
    title: "Pure Maheshwari Silk Suit",
    badge: "Pure Maheshwari Silk",
    soldOut: true,
    images: ["images/15.jpg"],
    fabric: "Pure Maheshwari Silk with Plain Bottom",
    work: "Patola Inspired Traditional Print, lightweight & skin-friendly",
    dupatta: "Pure Maheshwari Silk Dupatta with Zari Border",
    occasion: "Premium Party Wear, Festive Wear & Ethnic Wear"
  },
  {
    id: "premium-cotton-b24",
    itemNo: "ITEM NO: B-24",
    title: "Premium Cotton Patch & Lace Work Suit",
    badge: "Premium Cotton",
    soldOut: true,
    images: ["images/16.jpg"],
    fabric: "Premium Cotton Suit (Without Lining, Skin-Friendly & Soothing on Skin)",
    work: "Printed Kurta with Patch Work & Lace Work, Bottom with Patch Work & Lace Work",
    dupatta: "Dupatta with Lace Border",
    occasion: "Perfect for Summers & Rainy Weather"
  },
  {
    id: "jacquard-cotton-b24",
    itemNo: "ITEM NO: B-24",
    title: "Premium Jacquard Cotton Suit",
    badge: "Premium Jacquard Cotton",
    soldOut: true,
    images: ["images/17.jpg"],
    fabric: "Premium Jacquard Cotton with Plain Cotton Bottom (Skin par bahut soft aur soothing hai)",
    work: "Thread Patch Work & Jaipuri Patch Work",
    dupatta: "Matching Printed Dupatta with Floral Motifs",
    occasion: "Elegant & Comfortable, Perfect for Everyday & Festive Wear"
  },
  {
    id: "premium-jaipuri-cotton-b20",
    itemNo: "ITEM NO: B-20",
    title: "Premium Jaipuri Cotton Suit",
    badge: "Jaipuri Cotton",
    soldOut: true,
    images: ["images/18.jpg"],
    fabric: "Pure Jaipuri Cotton with Foil Print (Soft, Breathable & Skin-Friendly Fabric)",
    work: "Elegant Thread Work with Beautiful Knot Work, Hand-Embroidered Detailing on Front & Delicate Lace on Daman",
    dupatta: "Premium Chiffon Dupatta with Tassels",
    occasion: "Perfect for Everyday Elegance & Festive Wear"
  },
  {
    id: "b-24-shimmer-linen",
    itemNo: "ITEM NO: B-24",
    title: "Pure Premium Silk Shimmer Linen Suit Set",
    badge: "Shimmer Linen",
    soldOut: true,
    images: ["images/19.jpg"],
    fabric: "Pure Premium Silk Shimmer Linen with Soft & Comfortable Premium Cotton Bottom",
    work: "Elegant Neck Detailing with Thread Work & Mirror Accents, Elegant Self Weaving",
    dupatta: "Silk Shimmer Linen Dupatta with Self Weaving Zari Border",
    occasion: "A Perfect Blend of Elegance, Comfort & Tradition - Timeless Ethnic Wear"
  },
  {
    id: "south-cotton-b18",
    itemNo: "ITEM NO: B-18",
    title: "Pure South Cotton Floral Print Suit",
    badge: "Pure South Cotton",
    soldOut: true,
    images: ["images/20.jpg"],
    fabric: "Pure South Cotton Kurta & Premium South Cotton Plain Bottom",
    work: "Beautiful all-over floral print, soft, breathable & comfortable",
    dupatta: "Pure South Cotton Dupatta with rich zari border",
    occasion: "Grace in every thread - Perfect for Everyday Elegance & Festive Wear"
  },
  {
    id: "b-20-jaipuri",
    itemNo: "ITEM NO: B-20",
    title: "Premium Jaipuri Cotton Silk Suit",
    badge: "Jaipuri Cotton Silk",
    soldOut: true,
    images: ["images/22.jpg"],
    fabric: "Premium Jaipuri Cotton Silk",
    work: "Traditional Jaipuri print with handcrafted detailing",
    dupatta: "Premium Jaipuri Cotton Silk Dupatta",
    occasion: "Festive & Everyday Wear"
  },
  {
    id: "b-10-chanderi",
    itemNo: "ITEM NO: B-10",
    title: "Premium Chanderi Suit with Exquisite Resham Work",
    badge: "Chanderi",
    soldOut: false,
    images: ["images/23.jpg"],
    fabric: "Soft Chanderi Fabric (Premium Quality)",
    work: "Exquisite Resham Work, Neckline Detailing & All Over Buti Work",
    dupatta: "Dupatta with Heavy Embroidered Floral Border",
    occasion: "Grace in every drape - Perfect for Festive & Special Occasions"
  },
  {
    id: "b-34-floral",
    itemNo: "ITEM NO: B-34",
    title: "Premium Silk Pearl & Dabka Work Suit",
    badge: "Premium Silk",
    soldOut: false,
    images: ["images/21.jpg"],
    fabric: "Pure Premium Silk with a soft textured finish",
    work: "Original Pearl with Dabka Work and elegant embroidered neckline",
    dupatta: "Premium striped dupatta with a coordinated border",
    occasion: "Ethnic Parties & Festive Gatherings"
  },
  {
    id: "b-22-folk-art",
    itemNo: "ITEM NO: B-22",
    title: "Artistic Folk Art Unstitched Suit Set",
    badge: "Premium Cotton-Silk Blend",
    soldOut: true,
    images: ["images/388863.png"],
    fabric: "Pure Cotton-Silk Blend Fabric with a Soft Feel",
    work: "Artistic Folk Art Print with Detailed Neckline and Daman Work",
    dupatta: "Printed Dupatta with Traditional Folk Art Design",
    occasion: "Premium Ethnic Wear for Festive Gatherings & Special Occasions"
  },
  {
    id: "item-25",
    title: "Designer Embroidered Festive Suit Set",
    badge: "Festive Collection",
    soldOut: false,
    images: ["images/25.jpeg", "images/25(1).jpeg", "images/25(2).jpeg"],
    fabric: "Premium Designer Fabric with Soft Inner Lining",
    work: "Intricate Thread Embroidery, Neckline Detailing & Fine Work",
    dupatta: "Matching Designer Dupatta with Elegant Border",
    occasion: "Festive, Wedding & Special Party Wear"
  },
  {
    id: "item-26",
    title: "Mehendi Grace Taneria Silk Suit",
    badge: "Taneria Silk Edit",
    soldOut: false,
    images: ["images/26.jpeg"],
    fabric: "Taneria Silk Suit with Fine Aura Silk Bottom",
    work: "Thread & Zari Embroidery with Sequin Highlights, Delicate Buti Work & Elegant Neckline Detail",
    dupatta: "Taneria Silk Dupatta with Detailed Border",
    occasion: "Festive & Special Occasions"
  },
  {
    id: "item-27",
    title: "Peach Blossom Taneria Silk Suit",
    badge: "Taneria Silk Edit",
    soldOut: false,
    images: ["images/27.jpeg"],
    fabric: "Taneria Silk Suit with Fine Aura Silk Bottom",
    work: "Thread & Zari Embroidery with Sequin Highlights, Fine Handwork & Elegant Design",
    dupatta: "Taneria Silk Dupatta with Detailed Border",
    occasion: "Festive & Special Occasions"
  }
];

let statusFilter = "all";

function updateAvailabilityMessage() {
  const message = document.getElementById("availabilityMessage");
  if (!message) return;
  const copy = {
    all: { className: "", icon: "✦", title: "The complete Soch Vastr edit", description: "Browse available and sold-out styles in the original collection order." },
    available: { className: "available", icon: "✓", title: "Ready to become your next favourite", description: "These styles are available now and ready to add to your cart." },
    soldOut: { className: "sold-out", icon: "—", title: "Archive pieces, currently sold out", description: "A look back at the styles that have already found their homes." }
  }[statusFilter];

  message.className = `availability-message ${copy.className}`;
  message.innerHTML = `
    <div class="availability-icon">${copy.icon}</div>
    <div>
      <strong>${copy.title}</strong>
      <span>${copy.description}</span>
    </div>
  `;
}

document.querySelectorAll("[data-status-filter]").forEach(button => {
  button.addEventListener("click", () => {
    statusFilter = button.dataset.statusFilter;
    document.querySelectorAll("[data-status-filter]").forEach(control => {
      const isActive = control === button;
      control.classList.toggle("active", isActive);
      control.setAttribute("aria-pressed", String(isActive));
    });
    updateAvailabilityMessage();
    renderGrid();
  });
});

function renderGrid() {
  const container = document.getElementById("productGrid");
  if (!container) return;
  const filteredSuits = suits.filter(s => {
    if (statusFilter === "available") return !s.soldOut;
    if (statusFilter === "soldOut") return s.soldOut === true;
    return true;
  });

  container.innerHTML = filteredSuits.map((s, index) => `
    <div class="card" style="--card-index: ${index};" onclick="openDetailModal('${s.id}')">
      <div>
        <div class="card-img-wrap">
          <img src="${s.images[0]}" alt="${s.title}" onerror="this.onerror=null; this.src='https://placehold.co/600x800/FAF5EE/7C2D12?text=Soch+Vastr';" />
          <span class="tag-left">${s.badge}</span>
          <div class="swipe-hint">
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
            ${s.images.length} Photos • Tap to view
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${s.title}</h3>
          <div class="details-box">
            <div><strong>Kurta:</strong> ${s.fabric}</div>
            <div><strong>Work:</strong> ${s.work}</div>
            <div><strong>Dupatta:</strong> ${s.dupatta}</div>
            <div><strong>Occasion:</strong> ${s.occasion}</div>
          </div>
        </div>
      </div>
      <div class="card-action">
        <button class="add-btn" ${s.soldOut ? 'disabled' : ''} onclick="event.stopPropagation();">${s.soldOut ? 'Sold Out' : 'Add to Cart'}</button>
      </div>
    </div>
  `).join("");
}

function openDetailModal(id) {
  const suit = suits.find(s => s.id === id);
  const modal = document.getElementById("detailModal");
  const content = document.getElementById("modalDynamicContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="gallery-container">
      <div class="swipe-track" id="swipeTrack">
        ${suit.images.map((img, idx) => `
          <div class="swipe-slide" id="slide-${idx}">
            <img src="${img}" alt="${suit.title} preview" onerror="this.onerror=null; this.src='https://placehold.co/600x800/FAF5EE/7C2D12?text=Soch+Vastr';" />
          </div>
        `).join("")}
      </div>
      <div style="font-size: 11px; color: #78716C; margin-top: 8px; font-weight: 500;">👉 Swipe horizontally or select thumbnails below</div>
      <div class="thumbnail-row">
        ${suit.images.map((img, idx) => `
          <button class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="scrollToSlide(${idx})">
            <img src="${img}" alt="thumb" onerror="this.onerror=null; this.src='https://placehold.co/100x100/FAF5EE/7C2D12?text=Img';" />
          </button>
        `).join("")}
      </div>
    </div>
    <div class="modal-info">
      <div>
        <h3>${suit.title}</h3>
        <div class="details-box" style="margin-top: 14px;">
          <div><strong>Fabric:</strong> ${suit.fabric}</div>
          <div><strong>Work & Pattern:</strong> ${suit.work}</div>
          <div><strong>Dupatta:</strong> ${suit.dupatta}</div>
          <div><strong>Ideal For:</strong> ${suit.occasion}</div>
        </div>
      </div>
    </div>
  `;
  modal.style.display = "flex";

  const track = document.getElementById("swipeTrack");
  track.addEventListener("scroll", () => {
    const slideWidth = track.offsetWidth;
    const currentIdx = Math.round(track.scrollLeft / slideWidth);
    document.querySelectorAll(".thumb-btn").forEach((btn, i) => {
      btn.classList.toggle("active", i === currentIdx);
    });
  });
}

function scrollToSlide(idx) {
  const track = document.getElementById("swipeTrack");
  const slide = document.getElementById(`slide-${idx}`);
  if (slide && track) {
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }
}

function closeDetailModal() {
  const modal = document.getElementById("detailModal");
  if (modal) modal.style.display = "none";
}

updateAvailabilityMessage();
renderGrid();