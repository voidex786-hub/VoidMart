// ── CHECKOUT MODAL ──

function openCheckout() {
  if (cart.length === 0) {
    showToast('⚠ Your cart is empty!');
    return;
  }
  document.getElementById('checkoutOverlay').classList.add('open');
  document.getElementById('dim').classList.add('show');
  renderCheckoutItems();
}

function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.getElementById('dim').classList.remove('show');
}

function renderCheckoutItems() {
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const count = cart.reduce((s, x) => s + x.qty, 0);
  const el = document.getElementById('checkoutItems');
  el.innerHTML = cart.map(item => `
    <div class="co-item">
      <img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'" />
      <div class="co-item-info">
        <div class="co-item-name">${item.name}</div>
        <div class="co-item-qty">Qty: ${item.qty}</div>
      </div>
      <div class="co-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
    </div>
  `).join('');
  document.getElementById('coTotal').textContent = `₹${total.toLocaleString()}`;
  document.getElementById('coCount').textContent = `${count} item${count > 1 ? 's' : ''}`;
}

function placeOrder() {
  // Get form values
  const name     = document.getElementById('coName').value.trim();
  const phone    = document.getElementById('coPhone').value.trim();
  const address  = document.getElementById('coAddress').value.trim();
  const pincode  = document.getElementById('coPincode').value.trim();
  const city     = document.getElementById('coCity').value.trim();
  const state    = document.getElementById('coState').value.trim();

  // Validate
  if (!name || !phone || !address || !pincode || !city || !state) {
    showToast('⚠ Please fill all fields!');
    highlightEmpty();
    return;
  }
  if (phone.length < 10) {
    showToast('⚠ Enter valid phone number!');
    document.getElementById('coPhone').classList.add('error');
    return;
  }
  if (pincode.length !== 6) {
    showToast('⚠ Enter valid 6-digit pincode!');
    document.getElementById('coPincode').classList.add('error');
    return;
  }

  // Build order message
  const items = cart.map(i => `  • ${i.name} x${i.qty} = ₹${(i.price * i.qty).toLocaleString()}`).join('\n');
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);

  const msg =
`🛒 *NEW ORDER — VOIDMART* 🛒

👤 *Customer Details*
Name: ${name}
Phone: ${phone}

📦 *Delivery Address*
${address}
${city}, ${state} — ${pincode}

🧾 *Order Summary*
${items}

💰 *Total: ₹${total.toLocaleString()}*

📌 Please confirm & place on Meesho!`;

  // Open WhatsApp
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');

  // Show success
  showOrderSuccess(name);
}

function highlightEmpty() {
  const fields = ['coName','coPhone','coAddress','coPincode','coCity','coState'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) el.classList.add('error');
    else el.classList.remove('error');
  });
}

function showOrderSuccess(name) {
  document.getElementById('checkoutForm').style.display = 'none';
  document.getElementById('orderSuccess').style.display = 'flex';
  document.getElementById('successName').textContent = name.split(' ')[0];
  // Clear cart after success
  setTimeout(() => {
    cart = [];
    updateCart();
    closeCheckout();
    document.getElementById('checkoutForm').style.display = 'block';
    document.getElementById('orderSuccess').style.display = 'none';
  }, 4000);
}

// Remove error on input
document.addEventListener('DOMContentLoaded', () => {
  ['coName','coPhone','coAddress','coPincode','coCity','coState'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => el.classList.remove('error'));
  });
});