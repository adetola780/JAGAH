const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const STORAGE = {
  bag: "jagah_new_bag_v1",
  wishlist: "jagah_new_wishlist_v1",
  orders: "jagah_new_orders_v1",
  profile: "jagah_new_profile_v1",
  coupon: "jagah_new_coupon_v1",
};

const whatsappNumber = "2348125812372";
const orderStages = ["Order received", "Confirmed", "Packed", "Ready for dispatch", "On the way", "Delivered"];
const SHIRT_PRICE_NGN = 50000;

const products = [
  {
    id: "stormline-gallery-tee",
    name: "Stormline Gallery Tee",
    category: "Gallery Tees",
    price: 54,
    originalPrice: 68,
    image: "assets/jagah-storm-tee.png",
    images: ["assets/jagah-storm-tee.png", "assets/canva-jgh-page-1.png", "assets/canva-jgh-page-2.png"],
    colors: ["Graphite", "Cream"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Best pick",
    description: "Charcoal cotton tee with ocean, boat, and mountain line artwork across the body.",
    details: ["Oversized gallery fit", "Heavy cotton feel", "Cold wash inside out"],
    keywords: ["storm", "charcoal", "graphite", "boat", "ocean", "mountain", "tee"],
    date: "2026-07-09",
  },
  {
    id: "movement-jgh-tee",
    name: "Movement JGH Tee",
    category: "Graphic Drops",
    price: 48,
    originalPrice: 58,
    image: "assets/jagah-movement-tee.png",
    images: ["assets/jagah-movement-tee.png", "assets/canva-second-page-2.png"],
    colors: ["Brown", "Yellow"],
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
    description: "Warm brown tee with bold yellow JGH artwork and movement manifesto print.",
    details: ["Boxy streetwear cut", "Bold chest and back mark", "Soft cotton finish"],
    keywords: ["movement", "brown", "yellow", "jgh", "tee"],
    date: "2026-07-07",
  },
  {
    id: "midnight-stormline-gallery-tee",
    name: "Midnight Stormline Gallery Tee",
    category: "Gallery Tees",
    price: 58,
    originalPrice: 72,
    image: "assets/jagah-midnight-stormline-gallery-tee.png",
    images: ["assets/jagah-midnight-stormline-gallery-tee.png", "assets/jagah-storm-tee.png"],
    colors: ["Midnight Navy", "Cream Print"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Gallery",
    description: "Midnight navy tee with wraparound wave artwork and a detailed boat back print.",
    details: ["Premium cotton", "Oversized shoulder", "Front and back artwork"],
    keywords: ["midnight", "navy", "stormline", "ocean", "gallery"],
    date: "2026-07-09",
  },
  {
    id: "sky-tide-gallery-tee",
    name: "Sky Tide Gallery Tee",
    category: "Gallery Tees",
    price: 56,
    originalPrice: 68,
    image: "assets/jagah-sky-tide-gallery-tee.png",
    images: ["assets/jagah-sky-tide-gallery-tee.png", "assets/jagah-white-blue-tide-gallery-tee.png"],
    colors: ["Sky Blue", "Navy Print"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Fresh",
    description: "Sky blue cotton tee with tonal wave art, front logo, and back boat graphic.",
    details: ["Soft blue cotton base", "Tonal ocean artwork", "Relaxed fit"],
    keywords: ["sky", "blue", "tide", "boat", "tee"],
    date: "2026-07-08",
  },
  {
    id: "cream-tide-gallery-tee",
    name: "Cream Tide Gallery Tee",
    category: "Gallery Tees",
    price: 56,
    originalPrice: 68,
    image: "assets/jagah-cream-tide-gallery-tee.png",
    images: ["assets/jagah-cream-tide-gallery-tee.png", "assets/jagah-white-blue-tide-gallery-tee.png"],
    colors: ["Cream", "Sepia Print"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Soft tone",
    description: "Cream tee with sepia ocean illustration and a clean JAGAH chest mark.",
    details: ["Warm cream cotton", "Sepia line art", "Oversized gallery shape"],
    keywords: ["cream", "sepia", "tide", "ocean", "tee"],
    date: "2026-07-08",
  },
  {
    id: "white-blue-tide-gallery-tee",
    name: "White Blue Tide Gallery Tee",
    category: "Gallery Tees",
    price: 54,
    originalPrice: 66,
    image: "assets/jagah-white-blue-tide-gallery-tee.png",
    images: ["assets/jagah-white-blue-tide-gallery-tee.png", "assets/jagah-sky-tide-gallery-tee.png"],
    colors: ["White", "Blue Print"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Clean",
    description: "White tee with blue ocean artwork, chest mark, and back boat graphic.",
    details: ["Clean white cotton", "Blue wave illustration", "Front and back artwork"],
    keywords: ["white", "blue", "tide", "gallery"],
    date: "2026-07-08",
  },
  {
    id: "retro-identity-gallery-tee",
    name: "Retro Identity Gallery Tee",
    category: "Graphic Drops",
    price: 50,
    originalPrice: 62,
    image: "assets/jagah-retro-identity-gallery-tee.png",
    images: ["assets/jagah-retro-identity-gallery-tee.png", "assets/canva-second-page-2.png"],
    colors: ["White", "Lilac Print"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Identity",
    description: "White tee with lilac identity artwork and retro JAGAH Gallery details.",
    details: ["Large back identity print", "Vintage-inspired type", "Regular fit"],
    keywords: ["retro", "identity", "lilac", "white"],
    date: "2026-06-24",
  },
  {
    id: "peace-love-tranquility-tee",
    name: "Peace Love Tranquility Tee",
    category: "Brand Art",
    price: 44,
    originalPrice: 54,
    image: "assets/jagah-peace-love-tranquility-tee.png",
    images: ["assets/jagah-peace-love-tranquility-tee.png", "assets/canva-second-page-1.png"],
    colors: ["White", "Red Print"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Art",
    description: "White JAGAH Gallery tee with red peace, love, and tranquility artwork.",
    details: ["Campaign graphic", "Front and back logo details", "Soft white base"],
    keywords: ["peace", "love", "tranquility", "red"],
    date: "2026-06-12",
  },
  {
    id: "bloom-flight-logo-tee",
    name: "Bloom Flight Logo Tee",
    category: "Brand Art",
    price: 38,
    originalPrice: 48,
    image: "assets/jagah-bloom-flight-logo-tee.png",
    images: ["assets/jagah-bloom-flight-logo-tee.png", "assets/jagah-peace-love-tranquility-tee.png"],
    colors: ["Butter Yellow", "Floral Print"],
    sizes: ["XS", "S", "M", "L"],
    badge: "Logo",
    description: "Butter yellow fitted tee with JAGAH floral logo artwork and bird details.",
    details: ["Lightweight cotton", "Floral front logo", "Fitted cut"],
    keywords: ["bloom", "yellow", "floral", "logo"],
    date: "2026-05-23",
  },
  {
    id: "white-blue-jgh-tee",
    name: "White Blue JGH Tee",
    category: "Graphic Drops",
    price: SHIRT_PRICE_NGN,
    originalPrice: null,
    image: "assets/jagah-white-blue-jgh-tee.png",
    images: ["assets/jagah-white-blue-jgh-tee.png", "assets/jagah-movement-tee.png"],
    imageFit: "contain",
    colors: ["White", "Blue Print"],
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
    description: "White tee with blue JGH chest artwork and a bold back graphic.",
    details: ["White cotton tee", "Blue front and back JGH print", "Relaxed streetwear fit"],
    keywords: ["white", "blue", "jgh", "movement", "tee"],
    date: "2026-07-13",
  },
  {
    id: "motion-purpose-tee",
    name: "Motion Purpose Tee",
    category: "Graphic Drops",
    price: SHIRT_PRICE_NGN,
    originalPrice: null,
    image: "assets/jagah-motion-purpose-tee.png",
    images: ["assets/jagah-motion-purpose-tee.png", "assets/jagah-miracle-motion-tee.png"],
    colors: ["White", "Black Print", "Orange Detail"],
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
    description: "White tee with a motion portrait graphic, orange lens detail, and JAGAH vision artwork.",
    details: ["White cotton base", "Front and back artwork", "Motion graphic print"],
    keywords: ["motion", "purpose", "vision", "white", "orange", "tee"],
    date: "2026-05-26",
  },
  {
    id: "miracle-motion-tee",
    name: "Miracle In Motion Tee",
    category: "Brand Art",
    price: SHIRT_PRICE_NGN,
    originalPrice: null,
    image: "assets/jagah-miracle-motion-tee.png",
    images: ["assets/jagah-miracle-motion-tee.png", "assets/jagah-motion-purpose-tee.png"],
    colors: ["White", "Red Print"],
    sizes: ["S", "M", "L", "XL"],
    badge: "Fresh",
    description: "White tee with red Miracle In Motion artwork, circular back print, and JAGAH 2026 details.",
    details: ["Clean white tee", "Red graphic print", "Front and back design"],
    keywords: ["miracle", "motion", "red", "circle", "white", "tee"],
    date: "2026-05-23",
  },
];

const featuredProductIds = ["white-blue-jgh-tee", "motion-purpose-tee", "miracle-motion-tee"];

products.sort((a, b) => {
  const aIndex = featuredProductIds.indexOf(a.id);
  const bIndex = featuredProductIds.indexOf(b.id);
  if (aIndex === -1 && bIndex === -1) return 0;
  if (aIndex === -1) return 1;
  if (bIndex === -1) return -1;
  return aIndex - bIndex;
});

products.forEach((product) => {
  product.price = SHIRT_PRICE_NGN;
  product.originalPrice = null;
});

let bag = load(STORAGE.bag, []).map((item) => {
  const product = products.find((entry) => entry.id === item.id);
  return product ? { ...item, name: product.name, price: product.price, image: product.image } : item;
});
let wishlist = load(STORAGE.wishlist, []);
let orders = load(STORAGE.orders, []);
let profile = load(STORAGE.profile, {});
let coupon = load(STORAGE.coupon, "");
let filters = {
  category: "All",
  color: "",
  sort: "featured",
  query: "",
};
let activeProduct = null;
let selected = {};
let toastTimer;

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function money(value) {
  return `NGN ${Math.round(Number(value) || 0).toLocaleString("en-US")}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  })[char]);
}

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function productById(id) {
  return products.find((product) => product.id === id);
}

function lineKey(id, size, color) {
  return `${id}__${size}__${color}`;
}

function showToast(message) {
  const toast = $("[data-toast]");
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2300);
}

function init() {
  buildCategoryFilters();
  buildColorFilter();
  hydrateProfile();
  bindEvents();
  renderProducts();
  renderBag();
  renderWishlistCount();
  renderAccountOrders();
  revealOnScroll();
}

function bindEvents() {
  $("[data-category-filters]").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    filters.category = button.dataset.category;
    renderProducts();
  });

  $("#color-filter").addEventListener("change", (event) => {
    filters.color = event.target.value;
    renderProducts();
  });

  $("#sort-select").addEventListener("change", (event) => {
    filters.sort = event.target.value;
    renderProducts();
  });

  $("#site-search").addEventListener("input", (event) => {
    filters.query = event.target.value;
    renderSuggestions();
    renderProducts();
  });

  $("#site-search").addEventListener("blur", () => {
    setTimeout(() => ($(".suggestions").hidden = true), 140);
  });

  $("[data-clear-filters]").addEventListener("click", () => {
    filters = { category: "All", color: "", sort: "featured", query: "" };
    $("#site-search").value = "";
    $("#color-filter").value = "";
    $("#sort-select").value = "featured";
    renderProducts();
  });

  document.addEventListener("click", (event) => {
    const brandTile = event.target.closest("[data-brand-category]");
    if (brandTile) {
      filters.category = brandTile.dataset.brandCategory;
      filters.query = "";
      filters.color = "";
      $("#site-search").value = "";
      $("#color-filter").value = "";
      renderProducts();
      $("#shop").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const action = event.target.closest("[data-action]");
    if (!action) return;
    const id = action.dataset.id;
    if (action.dataset.action === "open") openProduct(id);
    if (action.dataset.action === "quick-add") addToBag(id);
    if (action.dataset.action === "wishlist") toggleWishlist(id);
    if (action.dataset.action === "remove-line") removeLine(action.dataset.line);
    if (action.dataset.action === "increase") changeQty(action.dataset.line, 1);
    if (action.dataset.action === "decrease") changeQty(action.dataset.line, -1);
    if (action.dataset.action === "move-wishlist") moveWishlistToBag(id);
  });

  $$("[data-open-product]").forEach((button) => {
    button.addEventListener("click", () => openProduct(button.dataset.openProduct));
  });

  $("[data-featured-product]")?.addEventListener("click", () => openProduct("white-blue-jgh-tee"));

  $$(".bag-trigger").forEach((button) => button.addEventListener("click", openBag));
  $$("[data-close-bag]").forEach((button) => button.addEventListener("click", closeBag));
  $("[data-scrim]").addEventListener("click", closeBag);
  $("[data-checkout]").addEventListener("click", openCheckout);
  $("[data-apply-coupon]").addEventListener("click", applyCoupon);
  $("[data-coupon-input]").value = coupon;

  $("[data-product-dialog]").addEventListener("click", handleProductDialogClick);
  $("[data-close-dialog]").addEventListener("click", () => $("[data-product-dialog]").close());
  $("[data-close-checkout]").addEventListener("click", () => $("[data-checkout-dialog]").close());
  $("[data-checkout-form]").addEventListener("submit", submitCheckout);

  $(".wishlist-open").addEventListener("click", openWishlist);
  $("[data-close-wishlist]").addEventListener("click", () => $("[data-wishlist-dialog]").close());
  $(".account-open").addEventListener("click", openAccount);
  $("[data-close-account]").addEventListener("click", () => $("[data-account-dialog]").close());
  $("[data-account-form]").addEventListener("submit", saveProfile);
  $("[data-track-form]").addEventListener("submit", trackOrder);
  $("[data-support-form]").addEventListener("submit", submitSupport);

  $(".menu-button").addEventListener("click", toggleMenu);
  $$(".mobile-nav a").forEach((link) => link.addEventListener("click", closeMenu));
  $("[data-footer-newsletter]")?.addEventListener("submit", submitFooterNewsletter);
}

function buildCategoryFilters() {
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  $("[data-category-filters]").innerHTML = categories.map((category) => (
    `<button type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`
  )).join("");
}

function buildColorFilter() {
  const colors = [...new Set(products.flatMap((product) => product.colors))].sort();
  $("#color-filter").insertAdjacentHTML("beforeend", colors.map((color) => (
    `<option value="${escapeHtml(color)}">${escapeHtml(color)}</option>`
  )).join(""));
}

function filteredProducts() {
  const query = normalize(filters.query);
  let items = products.filter((product) => {
    const inCategory = filters.category === "All" || product.category === filters.category;
    const inColor = !filters.color || product.colors.includes(filters.color);
    const haystack = normalize([product.name, product.category, product.description, product.keywords.join(" ")].join(" "));
    const inQuery = !query || haystack.includes(query);
    return inCategory && inColor && inQuery;
  });

  if (filters.sort === "newest") {
    items = items.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (filters.sort === "price-low") {
    items = items.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "price-high") {
    items = items.sort((a, b) => b.price - a.price);
  }

  return items;
}

function renderProducts() {
  const items = filteredProducts();
  $("[data-result-count]").textContent = `${items.length} product${items.length === 1 ? "" : "s"}`;
  $$("[data-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === filters.category);
  });
  $("[data-product-grid]").innerHTML = items.length
    ? items.map(productCard).join("")
    : `<div class="empty-note">No products match this search.</div>`;
  renderWishlistButtons();
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-media ${product.imageFit === "contain" ? "product-media-contain" : ""}">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
        <span class="badge">${escapeHtml(product.badge)}</span>
        <button class="card-wish ${wishlist.includes(product.id) ? "is-active" : ""}" type="button" data-action="wishlist" data-id="${product.id}" aria-label="Save ${escapeHtml(product.name)}">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6c-1.6-1.8-4.1-2-5.9-.4L12 6.8 9.1 4.2C7.3 2.6 4.8 2.8 3.2 4.6c-1.6 1.8-1.5 4.6.2 6.3L12 19l8.6-8.1c1.7-1.7 1.8-4.5.2-6.3Z"></path></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-brand">jagah</div>
        <h3 class="product-title">${escapeHtml(product.name)}</h3>
        <div class="price-row">
          <strong class="price">${money(product.price)}</strong>
          ${product.originalPrice ? `<span class="original-price">${money(product.originalPrice)}</span>` : ""}
        </div>
        <div class="card-actions">
          <button class="button primary" type="button" data-action="quick-add" data-id="${product.id}">Add to bag</button>
          <button class="button soft" type="button" data-action="open" data-id="${product.id}">Select</button>
        </div>
      </div>
    </article>
  `;
}

function renderSuggestions() {
  const box = $(".suggestions");
  const query = normalize(filters.query);
  if (!query) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }

  const matches = products.filter((product) => (
    normalize(`${product.name} ${product.category} ${product.keywords.join(" ")}`).includes(query)
  )).slice(0, 5);

  box.innerHTML = matches.map((product) => `
    <button type="button" data-suggest="${product.id}">
      <span>${escapeHtml(product.name)}</span>
      <strong>${money(product.price)}</strong>
    </button>
  `).join("");
  box.hidden = !matches.length;

  $$("[data-suggest]", box).forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
      openProduct(button.dataset.suggest);
      box.hidden = true;
    });
  });
}

function openProduct(id) {
  const product = productById(id);
  if (!product) return;
  activeProduct = product;
  selected = {
    id: product.id,
    image: product.images[0],
    size: product.sizes[0],
    color: product.colors[0],
    qty: 1,
  };
  renderProductDialog();
  $("[data-product-dialog]").showModal();
}

function renderProductDialog() {
  const product = activeProduct;
  if (!product) return;
  const related = products.filter((item) => item.id !== product.id).slice(0, 5);
  $("[data-product-content]").innerHTML = `
    <div class="product-page-view">
      <nav class="product-breadcrumb" aria-label="Product breadcrumb">
        <span>Home</span>
        <span>JAGAH</span>
        <span>${escapeHtml(product.category)}</span>
        <span>${escapeHtml(product.name)}</span>
      </nav>
      <div class="product-detail">
        <div class="gallery product-gallery-retail">
          <div class="thumbs">
            ${product.images.map((src) => `<button type="button" data-pick-image="${src}"><img src="${src}" alt=""></button>`).join("")}
          </div>
          <img class="product-main-image ${product.imageFit === "contain" ? "product-main-image-contain" : ""}" src="${selected.image}" alt="${escapeHtml(product.name)}">
          <div class="model-note">Model: JAGAH campaign fit / Wearing size M</div>
        </div>
        <div class="buybox retail-buybox">
          <button class="share-button" type="button" aria-label="Share product">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18 8a3 3 0 1 0-2.8-4H15a3 3 0 0 0 .2 1L8.8 9.1a3 3 0 1 0 0 5.8l6.4 4.1a3 3 0 1 0 .9-1.8l-6.4-4.1a3 3 0 0 0 0-2.2l6.4-4.1A3 3 0 0 0 18 8Z"></path></svg>
          </button>
          <h2>${escapeHtml(product.name)}</h2>
          <div class="price-row product-price-line">
            <strong class="price">${money(product.price)}</strong>
            ${product.originalPrice ? `<span class="original-price">${money(product.originalPrice)}</span>` : ""}
          </div>
          <div class="rating-row" aria-label="Product rating">
            <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <strong>4.8</strong>
            <a href="#support">(${product.reviewCount || 24} reviews)</a>
          </div>
          <p>${escapeHtml(product.description)}</p>
          <div class="option-row retail-option">
            <strong>Colour: ${escapeHtml(selected.color)}</strong>
            <div class="option-buttons colour-options">
              ${product.colors.map((color) => `<button class="${color === selected.color ? "is-selected" : ""}" type="button" data-pick-color="${escapeHtml(color)}">${escapeHtml(color)}</button>`).join("")}
            </div>
          </div>
          <div class="option-row retail-option">
            <div class="size-head">
              <strong>Size</strong>
              <a href="#support">Find your JAGAH size</a>
            </div>
            <div class="option-buttons size-options">
              ${product.sizes.map((size) => `<button class="${size === selected.size ? "is-selected" : ""}" type="button" data-pick-size="${escapeHtml(size)}">${escapeHtml(size)}</button>`).join("")}
            </div>
          </div>
          <div class="qty-row">
            <strong>Quantity</strong>
            <div class="qty-controls">
              <button class="qty-button" type="button" data-dialog-qty="-1">-</button>
              <span>${selected.qty}</span>
              <button class="qty-button" type="button" data-dialog-qty="1">+</button>
            </div>
          </div>
          <div class="product-cta-row">
            <button class="retail-add-button" type="button" data-dialog-add>Add to bag</button>
            <button class="retail-wish-button" type="button" data-action="wishlist" data-id="${product.id}" aria-label="Save product">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6c-1.6-1.8-4.1-2-5.9-.4L12 6.8 9.1 4.2C7.3 2.6 4.8 2.8 3.2 4.6c-1.6 1.8-1.5 4.6.2 6.3L12 19l8.6-8.1c1.7-1.7 1.8-4.5.2-6.3Z"></path></svg>
            </button>
          </div>
          <button class="button dark full" type="button" data-dialog-buy>Buy now</button>
          <div class="delivery-card">
            <strong>Free delivery on qualifying orders.</strong>
            <span>Checkout sends your size, colour and address to WhatsApp 08125812372.</span>
          </div>
          <details class="product-accordion" open>
            <summary>Size & fit</summary>
            <p>Relaxed streetwear shape. Choose your regular size for a clean oversized fit.</p>
          </details>
          <details class="product-accordion">
            <summary>Product details</summary>
            <ul>
              ${product.details.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </details>
        </div>
      </div>
      <section class="related-products" aria-label="You might also like">
        <h3>You might also like</h3>
        <div>
          ${related.map((item) => `
            <article class="related-card">
              <img src="${item.image}" alt="${escapeHtml(item.name)}">
              <button class="card-wish ${wishlist.includes(item.id) ? "is-active" : ""}" type="button" data-action="wishlist" data-id="${item.id}" aria-label="Save ${escapeHtml(item.name)}">
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6c-1.6-1.8-4.1-2-5.9-.4L12 6.8 9.1 4.2C7.3 2.6 4.8 2.8 3.2 4.6c-1.6 1.8-1.5 4.6.2 6.3L12 19l8.6-8.1c1.7-1.7 1.8-4.5.2-6.3Z"></path></svg>
              </button>
              <strong>${money(item.price)}</strong>
              <span>${escapeHtml(item.name)}</span>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function handleProductDialogClick(event) {
  if (!activeProduct) return;
  const image = event.target.closest("[data-pick-image]");
  const color = event.target.closest("[data-pick-color]");
  const size = event.target.closest("[data-pick-size]");
  const qty = event.target.closest("[data-dialog-qty]");
  if (image) selected.image = image.dataset.pickImage;
  if (color) selected.color = color.dataset.pickColor;
  if (size) selected.size = size.dataset.pickSize;
  if (qty) selected.qty = Math.max(1, selected.qty + Number(qty.dataset.dialogQty));
  if (image || color || size || qty) renderProductDialog();
  if (event.target.closest("[data-dialog-add]")) {
    addToBag(activeProduct.id, selected);
  }
  if (event.target.closest("[data-dialog-buy]")) {
    addToBag(activeProduct.id, selected);
    $("[data-product-dialog]").close();
    openBag();
  }
}

function addToBag(id, options = {}) {
  const product = productById(id);
  if (!product) return;
  const size = options.size || product.sizes[0];
  const color = options.color || product.colors[0];
  const qty = options.qty || 1;
  const line = lineKey(id, size, color);
  const existing = bag.find((item) => item.line === line);
  if (existing) {
    existing.qty += qty;
  } else {
    bag.push({
      line,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      qty,
    });
  }
  save(STORAGE.bag, bag);
  renderBag();
  showToast(`${product.name} added to bag.`);
}

function renderBag() {
  const list = $("[data-bag-items]");
  list.innerHTML = bag.map((item) => `
    <article class="bag-line">
      <img src="${item.image}" alt="${escapeHtml(item.name)}">
      <div>
        <div class="bag-line-head">
          <h3>${escapeHtml(item.name)}</h3>
          <strong>${money(item.price * item.qty)}</strong>
        </div>
        <small>${escapeHtml(item.color)} / ${escapeHtml(item.size)}</small>
        <div class="line-actions">
          <button type="button" data-action="decrease" data-line="${item.line}">-</button>
          <span>${item.qty}</span>
          <button type="button" data-action="increase" data-line="${item.line}">+</button>
          <button type="button" data-action="remove-line" data-line="${item.line}">Remove</button>
        </div>
      </div>
    </article>
  `).join("");

  $("[data-bag-empty]").hidden = bag.length > 0;
  const totals = bagTotals();
  $("[data-subtotal]").textContent = money(totals.subtotal);
  $("[data-discount]").textContent = `-${money(totals.discount)}`;
  $("[data-delivery]").textContent = totals.delivery ? money(totals.delivery) : "Free";
  $("[data-total]").textContent = money(totals.total);
  $$("[data-bag-count]").forEach((node) => (node.textContent = String(bag.reduce((sum, item) => sum + item.qty, 0))));
}

function bagTotals() {
  const subtotal = bag.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = ["jagah10", "jgh10"].includes(normalize(coupon)) ? subtotal * 0.1 : 0;
  const delivery = 0;
  return { subtotal, discount, delivery, total: Math.max(subtotal - discount + delivery, 0) };
}

function removeLine(line) {
  bag = bag.filter((item) => item.line !== line);
  save(STORAGE.bag, bag);
  renderBag();
}

function changeQty(line, delta) {
  const item = bag.find((entry) => entry.line === line);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) bag = bag.filter((entry) => entry.line !== line);
  save(STORAGE.bag, bag);
  renderBag();
}

function applyCoupon() {
  coupon = $("[data-coupon-input]").value.trim();
  save(STORAGE.coupon, coupon);
  renderBag();
  showToast(coupon ? "Promo code saved." : "Promo code cleared.");
}

function openBag() {
  $("[data-scrim]").hidden = false;
  document.body.classList.add("is-locked");
  requestAnimationFrame(() => {
    $("[data-scrim]").classList.add("is-open");
    $("[data-bag-drawer]").classList.add("is-open");
    $("[data-bag-drawer]").setAttribute("aria-hidden", "false");
  });
}

function closeBag() {
  $("[data-scrim]").classList.remove("is-open");
  $("[data-bag-drawer]").classList.remove("is-open");
  $("[data-bag-drawer]").setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  setTimeout(() => {
    if (!$("[data-bag-drawer]").classList.contains("is-open")) $("[data-scrim]").hidden = true;
  }, 200);
}

function openCheckout() {
  if (!bag.length) {
    showToast("Add a product to your bag first.");
    return;
  }
  renderCheckoutSummary();
  closeBag();
  $("[data-checkout-dialog]").showModal();
}

function renderCheckoutSummary() {
  const totals = bagTotals();
  $("[data-checkout-summary]").innerHTML = `
    <h3>Order summary</h3>
    ${bag.map((item) => `
      <div class="summary-item">
        <img src="${item.image}" alt="${escapeHtml(item.name)}">
        <div>
          <strong>${escapeHtml(item.name)}</strong>
          <small>${escapeHtml(item.color)} / ${escapeHtml(item.size)} x ${item.qty}</small>
        </div>
        <strong>${money(item.price * item.qty)}</strong>
      </div>
    `).join("")}
    <div class="summary-row"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div>
    <div class="summary-row"><span>Discount</span><strong>-${money(totals.discount)}</strong></div>
    <div class="summary-row"><span>Delivery</span><strong>${totals.delivery ? money(totals.delivery) : "Free"}</strong></div>
    <div class="summary-row total"><span>Total</span><strong>${money(totals.total)}</strong></div>
  `;
}

function submitCheckout(event) {
  event.preventDefault();
  if (!bag.length) return;
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const order = {
    id: `JGH-${String(Date.now()).slice(-6)}`,
    date: new Date().toISOString(),
    customer: data,
    items: [...bag],
    totals: bagTotals(),
    status: 1,
  };
  orders.unshift(order);
  save(STORAGE.orders, orders);
  profile = { ...profile, name: data.name, phone: data.phone };
  save(STORAGE.profile, profile);
  const message = orderMessage(order);
  bag = [];
  save(STORAGE.bag, bag);
  renderBag();
  renderAccountOrders();
  event.currentTarget.reset();
  $("[data-checkout-dialog]").close();
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  showToast(`Order ${order.id} created. WhatsApp is opening.`);
}

function orderMessage(order) {
  return [
    `Hello JAGAH, I want to place order ${order.id}.`,
    "",
    "Items:",
    ...order.items.map((item) => `- ${item.name} / ${item.color} / ${item.size} / qty ${item.qty} / ${money(item.price * item.qty)}`),
    "",
    `Subtotal: ${money(order.totals.subtotal)}`,
    `Discount: ${money(order.totals.discount)}`,
    `Delivery: ${order.totals.delivery ? money(order.totals.delivery) : "Free"}`,
    `Total: ${money(order.totals.total)}`,
    "",
    `Name: ${order.customer.name}`,
    `Phone: ${order.customer.phone}`,
    `Address: ${order.customer.address}, ${order.customer.city}`,
    `Delivery method: ${order.customer.delivery}`,
    `Payment: ${order.customer.payment}`,
  ].join("\n");
}

function toggleWishlist(id) {
  wishlist = wishlist.includes(id) ? wishlist.filter((item) => item !== id) : [...wishlist, id];
  save(STORAGE.wishlist, wishlist);
  renderWishlistCount();
  renderWishlistButtons();
  renderWishlistList();
}

function renderWishlistCount() {
  $("[data-wishlist-count]").textContent = String(wishlist.length);
}

function renderWishlistButtons() {
  $$("[data-action='wishlist']").forEach((button) => {
    button.classList.toggle("is-active", wishlist.includes(button.dataset.id));
  });
}

function openWishlist() {
  renderWishlistList();
  $("[data-wishlist-dialog]").showModal();
}

function renderWishlistList() {
  const list = $("[data-wishlist-list]");
  const items = wishlist.map(productById).filter(Boolean);
  list.innerHTML = items.length ? items.map((product) => `
    <article class="saved-row">
      <img src="${product.image}" alt="${escapeHtml(product.name)}">
      <div>
        <strong>${escapeHtml(product.name)}</strong>
        <small>${money(product.price)}</small>
      </div>
      <button class="button primary" type="button" data-action="move-wishlist" data-id="${product.id}">Add</button>
    </article>
  `).join("") : `<p class="empty-note">No saved pieces yet.</p>`;
}

function moveWishlistToBag(id) {
  addToBag(id);
  wishlist = wishlist.filter((item) => item !== id);
  save(STORAGE.wishlist, wishlist);
  renderWishlistCount();
  renderWishlistList();
  renderProducts();
}

function openAccount() {
  hydrateProfile();
  renderAccountOrders();
  $("[data-account-dialog]").showModal();
}

function hydrateProfile() {
  $("[data-profile-name]").value = profile.name || "";
  $("[data-profile-phone]").value = profile.phone || "";
  $("[data-profile-email]").value = profile.email || "";
}

function saveProfile(event) {
  event.preventDefault();
  profile = Object.fromEntries(new FormData(event.currentTarget).entries());
  save(STORAGE.profile, profile);
  showToast("Profile saved.");
}

function renderAccountOrders() {
  const list = $("[data-account-orders]");
  list.innerHTML = orders.length ? orders.slice(0, 3).map((order) => `
    <div class="order-row">
      <span>${escapeHtml(order.id)}</span>
      <strong>${money(order.totals.total)}</strong>
      <small>${new Date(order.date).toLocaleDateString()}</small>
    </div>
  `).join("") : `<p class="empty-note">No saved orders yet.</p>`;
}

function trackOrder(event) {
  event.preventDefault();
  const value = normalize($("#track-input").value);
  const order = orders.find((item) => normalize(item.id) === value);
  const target = $("[data-track-result]");
  if (!order) {
    target.innerHTML = `<p>No saved order found for that number.</p>`;
    return;
  }
  target.innerHTML = `
    <h3>${escapeHtml(order.id)} - ${money(order.totals.total)}</h3>
    <p>${new Date(order.date).toLocaleString()}</p>
    <div class="timeline">
      ${orderStages.map((stage, index) => `<span class="${index <= order.status ? "is-done" : ""}">${stage}</span>`).join("")}
    </div>
  `;
}

function submitSupport(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const message = [
    "Hello JAGAH, I need help.",
    `Name: ${data.name}`,
    `Contact: ${data.contact}`,
    `Message: ${data.message}`,
  ].join("\n");
  event.currentTarget.reset();
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

function submitFooterNewsletter(event) {
  event.preventDefault();
  event.currentTarget.reset();
  showToast("You are on the JAGAH drop list.");
}

function toggleMenu() {
  const nav = $(".mobile-nav");
  const button = $(".menu-button");
  const isOpen = !nav.hidden;
  nav.hidden = isOpen;
  button.setAttribute("aria-expanded", String(!isOpen));
}

function closeMenu() {
  $(".mobile-nav").hidden = true;
  $(".menu-button").setAttribute("aria-expanded", "false");
}

function revealOnScroll() {
  const items = $$("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });
  items.forEach((item) => observer.observe(item));
}

init();
