/**
 * Aura Realms — Bespoke Private Island & Jet Concierge
 * Interactive Luxury Amenity Inspector & Concierge Booking Engine
 */

// Amenity Specifications Catalog
const AMENITY_DETAILS = {
  helipad: {
    title: 'Private Helipad & Rotor Hub',
    subtitle: 'ICAO Annex 14 & FAA Class H1 Certified Facility',
    iconSvg: `<svg class="amenity-svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:36px;height:36px;">
      <circle cx="12" cy="12" r="9.5" stroke="#d4af37" stroke-width="1.5"></circle>
      <circle cx="12" cy="12" r="6" stroke="#d4af37" stroke-dasharray="2 2" stroke-width="1"></circle>
      <path d="M8 7.5v9M16 7.5v9M8 12h8" stroke="#d4af37" stroke-width="2.2"></path>
    </svg>`,
    specs: [
      { label: 'Aircraft Clearance', value: 'Sikorsky S-76 / AW139 (Max 7.5t)' },
      { label: 'Approach Beacon', value: '24/7 NVG-Compatible LED Arrays' },
      { label: 'Fuel Station', value: 'On-site Jet-A1 Closed Fueling System' },
      { label: 'Private Security', value: 'Direct tarmac-to-villa biometric corridor' }
    ],
    highlight: 'Engineered for seamless point-to-point transition from regional international hubs or superyacht helidecks directly to your private villa doorstep in complete discretion.'
  },
  dock: {
    title: 'Deepwater Private Marina & Dock',
    subtitle: 'Superyacht Mooring & Offshore Tender Slips',
    iconSvg: `<svg class="amenity-svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:36px;height:36px;">
      <circle cx="12" cy="5" r="2.5"></circle>
      <path d="M12 7.5V19.5"></path>
      <path d="M5.5 11.5h13"></path>
      <path d="M5 14.5c1.5 4.5 12.5 4.5 14 0"></path>
      <path d="M3 20.5h18" stroke-width="1.2" stroke-dasharray="2 2"></path>
    </svg>`,
    specs: [
      { label: 'Vessel Berthing', value: 'Up to 80m (260 ft) Mega-Yacht' },
      { label: 'Draft Depth', value: '8.5m Natural Deepwater Anchorage' },
      { label: 'Tender Lift', value: 'Dual 15-ton Hydraulic Sea Lifts' },
      { label: 'Shore Utilities', value: '480V 3-Phase + High-Flow Freshwater' }
    ],
    highlight: 'Features custom teak boardwalks with concealed shore-power connectivity, private customs clearance coordination, and sheltered all-weather natural harbour protection.'
  },
  chef: {
    title: 'Private Michelin-Star Chef Brigade',
    subtitle: 'Exclusively Dedicated Culinary Masters',
    iconSvg: `<svg class="amenity-svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:36px;height:36px;">
      <path d="M12 3v2.5"></path>
      <circle cx="12" cy="3" r="1.2" fill="#d4af37"></circle>
      <path d="M4 16a8 8 0 0 1 16 0H4z"></path>
      <path d="M2.5 18.5h19"></path>
      <circle cx="8" cy="11.5" r="0.8" fill="#d4af37"></circle>
      <circle cx="12" cy="10" r="0.8" fill="#d4af37"></circle>
      <circle cx="16" cy="11.5" r="0.8" fill="#d4af37"></circle>
      <path d="M7 21h10" stroke-width="1.2"></path>
    </svg>`,
    specs: [
      { label: 'Brigade Provenance', value: '3-Star Michelin Veteran Executive Chef' },
      { label: 'Gastronomy Format', value: 'Multi-Course Daily Bespoke Degustation' },
      { label: 'Sourcing Guarantee', value: 'Daily Catch & Organic Estate Produce' },
      { label: 'Dietary Protocol', value: 'Dedicated Pastry, Sous, and Butler Team' }
    ],
    highlight: 'Menus are drafted individually every morning to your personal palate, curated around seasonal delicacies like Beluga caviar, Périgord black truffles, and line-caught reef fish.'
  },
  pool: {
    title: 'Architectural Saltwater Infinity Pool',
    subtitle: 'Climate-Controlled Seamless Horizon Edge',
    iconSvg: `<svg class="amenity-svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:36px;height:36px;">
      <path d="M2 8.5h20"></path>
      <path d="M2 13c2.5 0 3.5-1.5 6-1.5s3.5 1.5 6 1.5 3.5-1.5 6-1.5"></path>
      <path d="M2 17.5c2.5 0 3.5-1.5 6-1.5s3.5 1.5 6 1.5 3.5-1.5 6-1.5"></path>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M18 3.5l1.5 1.5M6 3.5L4.5 5"></path>
    </svg>`,
    specs: [
      { label: 'Horizon Length', value: '45m Cantilevered Infinity Edge' },
      { label: 'Water Filtration', value: 'Hydro-Pure Himalayan Salt Electrolysis' },
      { label: 'Thermal Control', value: 'Year-Round Regulated 28°C - 32°C' },
      { label: 'Acoustics & Lighting', value: 'Underwater Focal Acoustics & Fiber Optics' }
    ],
    highlight: 'Designed with zero-edge vanishing boundaries visually cascading into the ocean or mountain panorama, flanked by underwater loungers and heated volcanic stone daybeds.'
  },
  wine: {
    title: 'Sommelier Reserve Wine Cellar',
    subtitle: 'Subterranean Climate Vault with Master Sommelier',
    iconSvg: `<svg class="amenity-svg" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:36px;height:36px;">
      <path d="M10 2.5h4v3a2 2 0 0 1-.6 1.4L12 8.5l-1.4-1.6A2 2 0 0 1 10 5.5v-3z"></path>
      <rect x="7" y="8.5" width="10" height="13" rx="2"></rect>
      <path d="M10 13h4"></path>
      <circle cx="12" cy="17" r="1.5" fill="#d4af37"></circle>
    </svg>`,
    specs: [
      { label: 'Cellar Capacity', value: '3,000+ Rare Vintage Bottles' },
      { label: 'Climate Precision', value: 'Constant 12°C & 70% Relative Humidity' },
      { label: 'Grand Cru Allocations', value: 'Domaine de la Romanée-Conti, Petrus, Lafite' },
      { label: 'Tasting Salon', value: 'Private Natural Rock Barrel-Vaulted Room' }
    ],
    highlight: 'Every acquisition includes full cellar access guided by a resident Master Sommelier, with rare vertical tastings and custom bottle pairing for every evening feast.'
  }
};

// Filter Estates By Amenity
function filterByAmenity(amenityKey, buttonElement) {
  const cards = document.querySelectorAll('.estate-card');
  const pills = document.querySelectorAll('.filter-pill');
  const statusText = document.getElementById('filter-status-text');
  const resetBtn = document.getElementById('reset-filter-btn');

  pills.forEach(pill => pill.classList.remove('active'));
  if (buttonElement) {
    buttonElement.classList.add('active');
  }

  let visibleCount = 0;

  cards.forEach(card => {
    const cardAmenities = card.getAttribute('data-amenities') || '';
    if (amenityKey === 'all' || cardAmenities.includes(amenityKey)) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Update status row text
  if (amenityKey === 'all') {
    statusText.textContent = `Showing all ${visibleCount} private sanctuaries`;
    resetBtn.style.display = 'none';
  } else {
    const amenityName = AMENITY_DETAILS[amenityKey] ? AMENITY_DETAILS[amenityKey].title : amenityKey;
    statusText.textContent = `Showing ${visibleCount} sanctuaries equipped with ${amenityName}`;
    resetBtn.style.display = 'inline-block';
  }
}

// Open Amenity Detail Specs Modal
function openAmenitySpecs(amenityKey) {
  const data = AMENITY_DETAILS[amenityKey];
  if (!data) return;

  const modal = document.getElementById('amenity-modal');
  const iconHolder = document.getElementById('modal-amenity-icon');
  const titleHolder = document.getElementById('modal-amenity-title');
  const subtitleHolder = document.getElementById('modal-amenity-subtitle');
  const contentHolder = document.getElementById('modal-amenity-content');

  iconHolder.innerHTML = data.iconSvg;
  titleHolder.textContent = data.title;
  subtitleHolder.textContent = data.subtitle;

  const specsHtml = data.specs.map(item => `
    <div class="modal-spec-card">
      <div class="modal-spec-label">${item.label}</div>
      <div class="modal-spec-value">${item.value}</div>
    </div>
  `).join('');

  contentHolder.innerHTML = `
    <div class="modal-spec-grid">
      ${specsHtml}
    </div>
    <div class="modal-highlight-box">
      <strong>Aura VIP Standard:</strong> ${data.highlight}
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeAmenityModal() {
  const modal = document.getElementById('amenity-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// VIP Inquiry Modal
function openInquiryModal(estateTitle) {
  const modal = document.getElementById('inquiry-modal');
  const estateInput = document.getElementById('estate-select');
  estateInput.value = estateTitle || 'General Aura Realms Portfolio';

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeInquiryModal() {
  const modal = document.getElementById('inquiry-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function submitInquiry(e) {
  e.preventDefault();
  const form = e.target;
  const estate = form.estate.value;
  const name = form.name.value;
  const email = form.email.value;
  const guests = form.guests.value;
  const transfer = form.transfer.value;

  closeInquiryModal();
  form.reset();

  showToast(`⚜ Confidential inquiry logged for ${name}. Aura VIP Desk will contact ${email} regarding ${estate}.`);
}

// Legacy Inquire Concierge
function inquireConcierge() {
  openInquiryModal('General Portfolio Consultation');
}

// Download Brochure Simulation
function downloadBrochure(estateName) {
  showToast(`📄 Encrypted PDF Folio for "${estateName}" sent to VIP download queue.`);
}

// Toast System
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Bind Amenity Badges Click and Keyboard Events
document.addEventListener('DOMContentLoaded', () => {
  const badges = document.querySelectorAll('.amenity-badge');

  badges.forEach(badge => {
    const amenityType = badge.getAttribute('data-amenity');

    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      openAmenitySpecs(amenityType);
    });

    badge.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAmenitySpecs(amenityType);
      }
    });
  });

  // Close modals on backdrop click or ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAmenityModal();
      closeInquiryModal();
    }
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAmenityModal();
        closeInquiryModal();
      }
    });
  });
});
