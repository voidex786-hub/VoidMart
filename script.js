const WA_NUMBER = '919622980200';

const PRODUCTS = [
  {
    id: 1,
    name: 'RGB Gaming Mouse',
    cat: 'gaming',
    img: 'https://m.media-amazon.com/images/I/51oZgHkQHDL._SX522_.jpg',
    price: 399,
    oldPrice: 599,
    badge: 'HOT',
    desc: '3 Button RGB Light wired optical gaming mouse. Sports design for laptops & PC. Plug and play, no drivers needed.'
  },
  {
    id: 2,
    name: 'Portronics Wireless Mouse',
    cat: 'gaming',
    img: 'https://m.media-amazon.com/images/I/51O7oMaDKML._SX522_.jpg',
    price: 899,
    oldPrice: 1499,
    badge: 'SALE',
    desc: 'Portronics wireless mouse with 7 color RGB lights. 2.4GHz & Bluetooth. Up to 9 days battery life.'
  },
  {
    id: 3,
    name: 'Mobile Charging Stand',
    cat: 'mobile',
    img: 'https://m.media-amazon.com/images/I/61QJE+-KZAL._SX522_.jpg',
    price: 249,
    oldPrice: 399,
    badge: null,
    desc: 'Desktop mobile stand for charging. Universal fit, sturdy design. Keep your phone at perfect viewing angle.'
  },
  {
    id: 4,
    name: 'Ring Light with Tripod 10"',
    cat: 'mobile',
    img: 'https://m.media-amazon.com/images/I/51oNaS-EITL._SX522_.jpg',
    price: 899,
    oldPrice: 1299,
    badge: 'HOT',
    desc: '10 inch LED ring light with 7 feet tripod stand. 3 color modes, foldable & lightweight. Perfect for YouTube, Reels, TikTok.'
  },
  {
    id: 5,
    name: 'Fast Charger 3-in-1 Cable',
    cat: 'mobile',
    img: 'https://m.media-amazon.com/images/I/71PP2kMLAeL._SX522_.jpg',
    price: 349,
    oldPrice: 499,
    badge: 'NEW',
    desc: 'Fast charger 3.1A with Micro, Type-C & iPhone cables. Compatible with all smartphones. Braided nylon cable.'
  },
  {
    id: 6,
    name: 'Power Bank 10000mAh',
    cat: 'mobile',
    img: 'https://m.media-amazon.com/images/I/51mFsV0PpNL._SX522_.jpg',
    price: 799,
    oldPrice: 1199,
    badge: 'SALE',
    desc: '10000mAh power bank. Dual USB output, dual input. Lithium ion, compatible with all smartphones.'
  },
  {
    id: 7,
    name: 'Car Phone Mount',
    cat: 'mobile',
    img: 'https://m.media-amazon.com/images/I/61LGDyGiKpL._SX522_.jpg',
    price: 499,
    oldPrice: 799,
    badge: null,
    desc: 'Adjustable car phone holder. Universal long arm windshield mount. 360 degree rotation, strong suction cup.'
  },
  {
    id: 8,
    name: 'Anime Gaming Mouse Pad',
    cat: 'gaming',
    img: 'https://m.media-amazon.com/images/I/81nt2JGotQL._SX522_.jpg',
    price: 299,
    oldPrice: 499,
    badge: 'HOT',
    desc: 'Solo Leveling dark theme printed anime gaming mouse pad. Non-slip rubber base. Perfect for anime lovers and gamers.'
  },
  {
    id: 9,
    name: 'Ichigo Keychain Set of 2',
    cat: 'anime',
    img: 'https://m.media-amazon.com/images/I/71A+LK8Yb5L._SX522_.jpg',
    price: 399,
    oldPrice: null,
    badge: 'NEW',
    desc: 'Bleach Ichigo anime keychain set of 2. Perfect gift for anime fans and collectors.'
  },
  {
    id: 10,
    name: 'Anime iPhone 13 Pro Case',
    cat: 'anime',
    img: 'https://images.meesho.com/images/products/940443647/glto3_512.webp',
    price: 599,
    oldPrice: 999,
    badge: 'NEW',
    desc: 'Apple iPhone 13 Pro metal back anime print case. Shockproof hard back with camera protection. HxH Killua design.'
  },
];

let cart = [];
let currentProduct = null;
let currentQty = 1;

// CURSOR
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
  cursorRing.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
});

// RENDER PRODUCTS
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  PRODUCTS.forEach((p) => {
    const show = filter === 'all' || p.cat === filter;
    const card = document.createElement('div');
    card.className = 'product-card' + (show ? ' visible' : '');
    card.dataset.cat = p.cat;
    card.innerHTML = `
      <div class="product-img" style="position:relative;overflow:hidden;">
        <button class="wishlist-btn" onclick="toggleWishlist(event,${p.id})">♡</button>
        ${p.badge ? `<div class="product-badge ${p.badge==='NEW'?'new':p.badge==='SALE'?'sale':''}">${p.badge}</div>` : ''}
        <img src="${p.img}" alt="${p.name}"
          style="width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;z-index:1;"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div style="display:none;width:100%;height:100%;position:absolute;top:0;left:0;align-items:center;justify-content:center;font-size:3rem;z-index:0;">${getCatEmoji(p.cat)}</div>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-bottom">
          <div class="product-price">
            ${p.oldPrice ? `<span class="old-price">₹${p.oldPrice}</span>` : ''}
            ₹${p.price}
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id})">+ ADD</button>
        </div>
      </div>`;
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.add-to-cart') && !e.target.closest('.wishlist-btn')) openModal(p.id);
    });
    grid.appendChild(card);
  });
}

function getCatEmoji(cat) {
  const map = { gaming: '🎮', mobile: '📱', anime: '🎌' };
  return map[cat] || '📦';
}

function filterProducts(cat, btn) {
  if (btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  document.querySelectorAll('.product-card').forEach(card => {
    card.classList.toggle('visible', cat === 'all' || card.dataset.cat === cat);
  });
  if (cat !== 'all') document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function toggleWishlist(e, id) {
  e.stopPropagation();
  const btn = e.currentTarget;
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
  showToast(btn.classList.contains('active') ? '♥ Wishlisted!' : '♡ Removed from wishlist');
}

// MODAL
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  currentQty = 1;
  const modalImg = document.getElementById('modalImg');
  modalImg.innerHTML = `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;" onerror="this.parentElement.innerHTML='<span style=font-size:5rem>${getCatEmoji(p.cat)}</span>'" />`;
  document.getElementById('modalCat').textContent = p.cat.toUpperCase();
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').textContent = '₹' + p.price;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('qtyNum').textContent = 1;
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('dim').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalBtn();
}

function closeModalBtn() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('dim').classList.remove('show');
  document.body.style.overflow = '';
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
  showToast('✓ ' + currentProduct.name + ' added!');
}

function buyNow() {
  if (!currentProduct) return;
  const msg = `Hi VoidMart! I want to buy:\n\n🛒 *${currentProduct.name}*\nQty: ${currentQty}\nPrice: ₹${currentProduct.price * currentQty}\n\nPlease confirm availability and delivery details.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// CART
function addToCart(id, update = true) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });
  if (update) { updateCart(); showToast('✓ ' + p.name + ' added!'); }
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCart();
}

function changeCartQty(id, d) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + d);
  updateCart();
}

function updateCart() {
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const count = cart.reduce((s, x) => s + x.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = '₹' + total.toLocaleString();
  const el = document.getElementById('cartItems');
  if (cart.length === 0) {
    el.innerHTML = `<div class="cart-empty"><div class="empty-icon">🛒</div><p>YOUR CART IS EMPTY</p></div>`;
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;" onerror="this.parentElement.textContent='${getCatEmoji(item.cat)}'"/>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price * item.qty}</div>
        <div class="cart-item-qty">
          <button class="ciq-btn" onclick="changeCartQty(${item.id},-1)">−</button>
          <span class="ciq-num">${item.qty}</span>
          <button class="ciq-btn" onclick="changeCartQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>`).join('');
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const dim = document.getElementById('dim');
  const isOpen = sidebar.classList.toggle('open');
  dim.classList.toggle('show', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeAll() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('dim').classList.remove('show');
  document.body.style.overflow = '';
}

function openWhatsApp(mode) {
  let msg = '';
  if (mode === 'cart' && cart.length > 0) {
    const items = cart.map(i => `• ${i.name} x${i.qty} = ₹${i.price * i.qty}`).join('\n');
    const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
    msg = `Hi VoidMart! I want to order:\n\n${items}\n\nTotal: ₹${total}\n\nPlease confirm and share payment details!`;
  } else if (mode === 'cart') {
    showToast('⚠ Your cart is empty!');
    return;
  } else {
    msg = `Hi VoidMart! I am interested in your products. Can you help me?`;
  }
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

renderProducts();