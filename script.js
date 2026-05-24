// ── WHATSAPP NUMBER ──
const WA_NUMBER = '919622980200';

// ── PRODUCTS DATA ──
const PRODUCTS = [
  { id: 1,  name: 'RGB Gaming Mouse X9',        cat: 'gaming',     icon: '🖱️',  price: 1299,  oldPrice: 1999,  badge: 'HOT',  desc: 'Ultra-precise optical sensor, 16M RGB colors, programmable 7 buttons. Built for winners.' },
  { id: 2,  name: 'Mechanical TKL Keyboard',    cat: 'gaming',     icon: '⌨️',  price: 3499,  oldPrice: 4999,  badge: 'SALE', desc: 'Blue switches, full RGB backlit, compact TKL design. Every keystroke, a statement.' },
  { id: 3,  name: 'Gaming Headset Pro 7.1',     cat: 'gaming',     icon: '🎮',  price: 2199,  oldPrice: null,  badge: 'NEW',  desc: '7.1 Surround Sound, noise-cancelling mic, 40hr battery. Hear enemies before they see you.' },
  { id: 4,  name: '240Hz Gaming Monitor',       cat: 'gaming',     icon: '🖥️',  price: 14999, oldPrice: 19999, badge: 'SALE', desc: '24" IPS, 240Hz refresh rate, 1ms response. Smoothest gameplay experience.' },
  { id: 5,  name: 'Console Controller Stand',   cat: 'gaming',     icon: '🕹️',  price: 699,   oldPrice: null,  badge: null,   desc: 'Dual controller stand with USB hub, RGB lighting. Keep your setup clean.' },
  { id: 6,  name: 'Gaming Chair Pro',           cat: 'gaming',     icon: '🪑',  price: 7999,  oldPrice: 11999, badge: 'SALE', desc: 'Ergonomic design, lumbar support, 4D armrests. Comfort for marathon sessions.' },
  { id: 7,  name: 'TWS ANC Earbuds',            cat: 'audio',      icon: '🎵',  price: 1999,  oldPrice: 2999,  badge: 'HOT',  desc: 'Active Noise Cancellation, 30hr total battery, Hi-Fi audio. Silence the world.' },
  { id: 8,  name: 'Studio Over-Ear Headphones', cat: 'audio',      icon: '🎧',  price: 4499,  oldPrice: null,  badge: 'NEW',  desc: '40mm drivers, foldable design, wired + wireless. Professional-grade sound.' },
  { id: 9,  name: 'Portable BT Speaker',        cat: 'audio',      icon: '🔊',  price: 1499,  oldPrice: 2199,  badge: 'SALE', desc: '360° sound, IP67 waterproof, 24hr playtime. Party anywhere.' },
  { id: 10, name: 'Lavalier Microphone',        cat: 'audio',      icon: '🎤',  price: 899,   oldPrice: null,  badge: null,   desc: 'Omnidirectional, compatible with phones and cameras. Creator-ready.' },
  { id: 11, name: 'DAC Audio Amplifier',        cat: 'audio',      icon: '📻',  price: 2799,  oldPrice: null,  badge: 'NEW',  desc: 'Hi-Res audio, USB-C + 3.5mm, powers all headphones. Pure audio bliss.' },
  { id: 12, name: 'MagSafe Wireless Charger',   cat: 'mobile',     icon: '⚡',  price: 899,   oldPrice: 1299,  badge: 'HOT',  desc: '15W fast charge, compatible with all Qi devices. Charge smarter, not harder.' },
  { id: 13, name: 'Phone Gimbal Stabilizer',    cat: 'mobile',     icon: '📸',  price: 3299,  oldPrice: null,  badge: 'NEW',  desc: '3-axis stabilization, auto-tracking, foldable. Cinematic shots in your pocket.' },
  { id: 14, name: 'Screen Magnifier HD',        cat: 'mobile',     icon: '📱',  price: 499,   oldPrice: null,  badge: null,   desc: '12" HD amplification, foldable, adjustable. Big screen experience, zero cost.' },
  { id: 15, name: '20000mAh Power Bank',        cat: 'mobile',     icon: '🔋',  price: 1699,  oldPrice: 2499,  badge: 'SALE', desc: '65W PD fast charge, 3 outputs, digital display. Never run out of power.' },
  { id: 16, name: 'Magnetic Car Mount',         cat: 'mobile',     icon: '🚗',  price: 399,   oldPrice: null,  badge: null,   desc: '360° rotation, strong magnetic hold, dashboard & vent mount. Eyes on the road.' },
  { id: 17, name: 'Smart LED Strip 5M',         cat: 'smart-home', icon: '💡',  price: 799,   oldPrice: 1199,  badge: 'HOT',  desc: '16M colors, app + voice control, music sync. Vibe your space.' },
  { id: 18, name: 'WiFi Smart Plug',            cat: 'smart-home', icon: '🔌',  price: 499,   oldPrice: null,  badge: 'NEW',  desc: 'Remote control, energy monitoring, timer & scheduling. Smart home starter.' },
  { id: 19, name: 'Mini Security Camera',       cat: 'smart-home', icon: '📷',  price: 1299,  oldPrice: 1799,  badge: 'SALE', desc: '1080p, night vision, motion alerts, 2-way audio. Watch over what matters.' },
  { id: 20, name: 'Smart Doorbell',             cat: 'smart-home', icon: '🔔',  price: 2499,  oldPrice: null,  badge: null,   desc: "HD video, night vision, motion detect, mobile alerts. Know who's at your door." },
  { id: 21, name: 'Smart Watch Ultra',          cat: 'wearables',  icon: '⌚',  price: 3999,  oldPrice: 5999,  badge: 'HOT',  desc: 'AMOLED display, health tracking, 10-day battery, GPS. Wear the future.' },
  { id: 22, name: 'Fitness Band Pro',           cat: 'wearables',  icon: '💪',  price: 1499,  oldPrice: null,  badge: 'NEW',  desc: '24/7 heart rate, SpO2, sleep tracking, 14-day battery. Your health, quantified.' },
  { id: 23, name: 'AR Smart Glasses',           cat: 'wearables',  icon: '🕶️',  price: 8999,  oldPrice: 12999, badge: 'SALE', desc: 'Built-in speaker, UV protection, touch controls. The future on your face.' },
  { id: 24, name: 'Smart Ring Health',          cat: 'wearables',  icon: '💍',  price: 4999,  oldPrice: null,  badge: 'NEW',  desc: 'HRV, sleep, recovery tracking. Titanium build, 7-day battery. Subtle, powerful.' },
];

// ── STATE ──
let cart = [];
let currentProduct = null;
let currentQty = 1;

// ── CURSOR ──
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
  cursorRing.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
});

document.addEventListener('mousedown', () => {
  cursor.style.transform += ' scale(0.7)';
});
document.addEventListener('mouseup', () => {
  cursor.style.transform = cursor.style.transform.replace(' scale(0.7)', '');
});

// ── RENDER PRODUCTS ──
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  PRODUCTS.forEach((p) => {
    const show = filter === 'all' || p.cat === filter;
    const card = document.createElement('div');
    card.className = 'product-card' + (show ? ' visible' : '');
    card.dataset.cat = p.cat;

    card.innerHTML = `
      <div class="product-img">
        <button class="wishlist-btn" onclick="toggleWishlist(event, ${p.id})">♡</button>
        ${p.badge ? `<div class="product-badge ${p.badge === 'NEW' ? 'new' : p.badge === 'SALE' ? 'sale' : ''}">${p.badge}</div>` : ''}
        <span style="position:relative;z-index:1;font-size:3.5rem">${p.icon}</span>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.cat.replace('-', ' ')}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-bottom">
          <div class="product-price">
            ${p.oldPrice ? `<span class="old-price">₹${p.oldPrice.toLocaleString()}</span>` : ''}
            ₹${p.price.toLocaleString()}
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id})">+ ADD</button>
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (!e.target.closest('.add-to-cart') && !e.target.closest('.wishlist-btn')) {
        openModal(p.id);
      }
    });

    grid.appendChild(card);
  });
}

// ── FILTER PRODUCTS ──
function filterProducts(cat, btn) {
  if (btn) {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  }
  document.querySelectorAll('.product-card').forEach((card) => {
    card.classList.toggle('visible', cat === 'all' || card.dataset.cat === cat);
  });
  if (cat !== 'all') {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }
}

// ── WISHLIST ──
function toggleWishlist(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
  showToast(btn.classList.contains('active') ? '♥ Added to wishlist!' : '♡ Removed from wishlist');
}

// ── MODAL ──
function openModal(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  currentProduct = p;
  currentQty = 1;
  document.getElementById('modalImg').textContent = p.icon;
  document.getElementById('modalCat').textContent = p.cat.replace('-', ' ').toUpperCase();
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').textContent = `₹${p.price.toLocaleString()}`;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('qtyNum').textContent = 1;
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('dim').classList.add('show');
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalBtn();
}

function closeModalBtn() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('dim').classList.remove('show');
}

function changeQty(d) {
  currentQty = Math.max(1, currentQty + d);
  document.getElementById('qtyNum').textContent = currentQty;
}

function addFromModal() {
  if (!currentProduct) return;
  for (let i = 0; i < currentQty; i++) addToCart(currentProduct.id, false);
  updateCart();
  closeModalBtn();
  showToast(`✓ ${currentProduct.name} added!`);
}

function buyNow() {
  if (!currentProduct) return;
  const msg = `Hi VoidMart! I want to buy:\n\n🛒 *${currentProduct.name}*\nQty: ${currentQty}\nPrice: ₹${(currentProduct.price * currentQty).toLocaleString()}\n\nPlease confirm availability and delivery.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ── CART ──
function addToCart(id, update = true) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const existing = cart.find((x) => x.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  if (update) {
    updateCart();
    showToast(`✓ ${p.name} added to cart!`);
  }
}

function removeFromCart(id) {
  cart = cart.filter((x) => x.id !== id);
  updateCart();
}

function changeCartQty(id, d) {
  const item = cart.find((x) => x.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + d);
  updateCart();
}

function updateCart() {
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const count = cart.reduce((s, x) => s + x.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = `₹${total.toLocaleString()}`;

  const el = document.getElementById('cartItems');
  if (cart.length === 0) {
    el.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>YOUR CART IS EMPTY</p>
      </div>`;
    return;
  }

  el.innerHTML = cart.map((item) => `
    <div class="cart-item">
      <div class="cart-item-img">${item.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
        <div class="cart-item-qty">
          <button class="ciq-btn" onclick="changeCartQty(${item.id}, -1)">−</button>
          <span class="ciq-num">${item.qty}</span>
          <button class="ciq-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
    </div>
  `).join('');
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const dim = document.getElementById('dim');
  const isOpen = sidebar.classList.toggle('open');
  dim.classList.toggle('show', isOpen);
}

function closeAll() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('dim').classList.remove('show');
}

// ── WHATSAPP CHECKOUT ──
function openWhatsApp(mode) {
  let msg = '';
  if (mode === 'cart' && cart.length > 0) {
    const items = cart.map((i) => `• ${i.name} x${i.qty} — ₹${(i.price * i.qty).toLocaleString()}`).join('\n');
    const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
    msg = `Hi VoidMart! I'd like to order:\n\n${items}\n\n💰 *Total: ₹${total.toLocaleString()}*\n\nPlease confirm and share payment/delivery details. Thanks!`;
  } else if (mode === 'cart') {
    showToast('⚠ Your cart is empty!');
    return;
  } else {
    msg = `Hi VoidMart! I'm interested in your products. Can you help me? 🛒`;
  }
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── INIT ──
renderProducts();