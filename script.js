// script.js

/* ---------------- DATA ---------------- */
const CATEGORIES = ["Electronics","Fashion","Home","Beauty"];

const PRODUCTS = [
  {
   id: 1,
   name: "Galaxy Nova 5G Smartphone",
   cat: "Electronics",
   price: 14999,
   mrp: 24999,
   rating: 4.3,
   deal: true,
   bg: "#fdfdfd",
   image: "https://rukminim3.flixcart.com/image/480/640/xif0q/mobile/z/k/s/-resized-original-imahn83bmvu22pyf.jpeg?q=20"
 },

  {
   id: 2,
   name: "AeroBook Pro 14\" Laptop, Intel i5, 16GB",
   cat: "Electronics",
   price: 47990,
   mrp: 62990,
   rating: 4.5,
   deal: true,
   bg: "#fdfdfd",
   image: "https://m.media-amazon.com/images/I/81NZl5AXsiL._AC_UF1000,1000_QL80_.jpg"
 },

  {
   id: 3,
   name: "PulseBeat Wireless Earbuds, ANC, 40Hr Battery",
   cat: "Electronics",
   price: 1799,
   mrp: 3999,
   rating: 4.2,
   deal: true,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHydkUz9_PInwz7ufGBZoXq1RH7Hfbt2vLPblo58UjA&s=10"
 },

 {
   id: 4,
   name: "OrbitFit Smartwatch, AMOLED, Heart Rate",
   cat: "Electronics",
   price: 2299,
   mrp: 5999,
   rating: 4.1,
   deal: false,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrK55iZPsbHcpqJVVaQCfJcAY5oa415KhzQ5psRIU7g&s=10"
 },

 {
   id: 5,
   name: "ClickMaster Wireless Mouse, Silent Click",
   cat: "Electronics",
   price: 499,
   mrp: 599,
   rating: 4.0,
   deal: false,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHV-Chdb7OB9J0K0lVerije9eA77aOdK_COu93nkEui8oDEeX10stz4sHz2OjjJ503GBB6R8GHJiP-WL6RWNMFhnRj2REPySDwr9x0hKThlcNmEdKbL3pd7bn5LEZmSE_lHCh2nNS7Og&usqp=CAc"
 },

 {
   id: 6,
   name: "StreamCast 43\" 4K Smart TV, HDR10",
   cat: "Electronics",
   price: 22999,
   mrp: 34999,
   rating: 4.1,
   deal: true,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVBnk4AfW6Duy2qIaMno09_1knggzZ8g3wSd34Es_Pw&s"
 },

 {
   id: 7,
   name: "Men's UrbanFit Running Sneakers, Breathable",
   cat: "Fashion",
   price: 1299,
   mrp: 2999,
   rating: 4.2,
   deal: true,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vDzV3a1F6fQZnB1rAfiNX9R2itpk4XFNH_7-hsRh9w&s"
 },

 {
   id: 8,
   name: "Women's Floral Wrap Dress, Cotton Blend",
   cat: "Fashion",
   price: 899,
   mrp: 1999,
   rating: 4.0,
   deal: true,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9rfobn4Xiog7-EUvmVu5ktLs9aygMHy_i3MqAY9Ifg&s=10"
 },

 {  
   id: 9,
   name: "Classic Denim Jacket, Unisex Fit",
   cat: "Fashion",
   price: 1599,
   mrp: 2799,
   rating: 4.3,
   deal: false,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZIbif5RtC4RX2SvyUeoS-R3oio-zvizPKfnAhOBw2w&s=10"
 },

  {  
   id: 10,
   name: "AviatorX Polarized Sunglasses, UV400",
   cat: "Fashion",
   price: 699,
   mrp: 1499,
   rating: 4.1,
   deal: false,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIxYXr3mlKM2brXHEJcQpI0BG6qsXJ-gVvBztKtL3PRQ&s=10"
 },

  {  
   id: 11,
   name: "Everyday Leather Wallet, RFID Blocking",
   cat: "Fashion",
   price: 499,
   mrp: 999,
   rating: 3.9,
   deal: false,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KSuzz8gpKugoBqrCIN9EvVBpxYxwHwU8kZOH4f6DwA&s"
 },

  {  
   id: 12,
   name: "TurboChef 750W Mixer Grinder, 3 Jars",
   cat: "home,electronics",
   price: 2199,
   mrp: 3999,
   rating: 4.4,
   deal: true,
   bg: "#fdfdfd",
   image: "https://img-prd-pim.poorvika.com/product/Wonderchef-select-750w-mixer-grinder-4-jars-black-Full-View.png"
 },

  {  
   id: 13,
   name: "NonStick Cookware Set, 5 Pieces",
   cat: "home,electronics",
   price: 1699,
   mrp: 3999,
   rating: 4.2,
   deal: true,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnvI4PopRsS43BcrOHirKEnB02RTfmOpU-k3DcgY3z_Q&s=10"
 },

  {  
   id: 14,
   name: "CloudSoft Memory Foam Pillow, Set of 2",
    cat: "home",
   price: 799,
   mrp: 1599,
   rating: 4.0,
   deal: false,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5H-K-TnseJg0tMkKSmWhBmFdvtINsj_f_YQ4qVCXUbA&s=10"
 },

  {  
   id: 15,
   name: "BrightGlow LED Study Lamp, Touch Control",
   cat: "home",
   price: 599,
   mrp: 1199,
   rating: 4.1,
   deal: false,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL5rKt1Migbp-4AWmtJKDWQnb7FMpK5Z9t7Q6D5DOgQ&s=10"
 },

  {  
   id: 16,
   name: "GlowSkin Vitamin C Face Serum, 30ml",
   cat: "fashion,beauty",
   price: 399,
   mrp: 899,
   rating: 4.3,
   deal: true,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-N3tg2Vqm8DFs17DJi_b6kiBVYYh_yu4agzVTb7hUg&s"
 },

  {  
   id: 17,
   name: "SilkTress Argan Hair Oil, 200ml",
   cat: "fashion,beauty",
   price: 299,
   mrp: 599,
   rating: 4.0,
   deal: false,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NVS2xzYfC4L0ifokJgZ0LOQ-EezEee5AxisWpkeqnQ&s"
 },

  {  
   id: 18,
   name: "MatteMuse Lipstick Combo, Pack of 3",
   cat: "fashion,beauty",
   price: 449,
   mrp: 999,
   rating: 4.2,
   deal: true,
   bg: "#fdfdfd",
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXMfwHA_Jsr7yexI29pA5GrUNB3Qethtmo7H_RmT_WQ&s=10"
 },
];

/* ---------------- STATE ---------------- */
let cart = {};
let wishlist = new Set();

/* ---------------- CATEGORY STRIP ---------------- */
const catStrip = document.getElementById('catStrip');

["All",...CATEGORIES].forEach(c=>{
  const b = document.createElement('button');

  b.textContent = c === "All" ? "All Categories" : c;
  b.dataset.cat = c === "All" ? "all" : c;

  if(c==="All") b.classList.add('active');

  b.onclick = ()=>{
    document.querySelectorAll('.cat-strip button')
      .forEach(x=>x.classList.remove('active'));

    b.classList.add('active');

    const radio = document.querySelector(
      `input[name=cat][value="${b.dataset.cat}"]`
    );

    if(radio) radio.checked = true;

    renderProducts();
  };

  catStrip.appendChild(b);
});

/* ---------------- FILTER WIRING ---------------- */
document.querySelectorAll('input[name=cat]').forEach(r=>
  r.addEventListener('change', ()=>{
    document.querySelectorAll('.cat-strip button').forEach(btn=>{
      btn.classList.toggle('active', btn.dataset.cat === r.value);
    });

    renderProducts();
  })
);

document.getElementById('priceRange').addEventListener('input', e=>{
  document.getElementById('priceLabel').textContent =
    '₹' + Number(e.target.value).toLocaleString('en-IN');

  renderProducts();
});

document.getElementById('ratingFilter').addEventListener('change', renderProducts);
document.getElementById('dealFilter').addEventListener('change', renderProducts);
document.getElementById('searchInput').addEventListener('input', renderProducts);

function clearFilters(){
  document.querySelector('input[name=cat][value=all]').checked = true;

  document.querySelectorAll('.cat-strip button').forEach((btn,i)=>
    btn.classList.toggle('active', i===0)
  );

  document.getElementById('priceRange').value = 100000;
  document.getElementById('priceLabel').textContent = '₹1,00,000';
  document.getElementById('ratingFilter').checked = false;
  document.getElementById('dealFilter').checked = false;
  document.getElementById('searchInput').value = '';

  renderProducts();
}

/* ---------------- RENDER PRODUCTS ---------------- */
function renderProducts(){
  const cat = document.querySelector('input[name=cat]:checked').value;
  const maxPrice = Number(document.getElementById('priceRange').value);
  const minRating = document.getElementById('ratingFilter').checked ? 4 : 0;
  const dealOnly = document.getElementById('dealFilter').checked;
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const sort = document.getElementById('sortSelect').value;

  let list = PRODUCTS.filter(p=>{
    if(cat !== 'all' && p.cat !== cat) return false;
    if(p.price > maxPrice) return false;
    if(p.rating < minRating) return false;
    if(dealOnly && !p.deal) return false;
    if(query && !p.name.toLowerCase().includes(query)) return false;

    return true;
  });

  if(sort === 'price-low') list.sort((a,b)=>a.price-b.price);
  else if(sort === 'price-high') list.sort((a,b)=>b.price-a.price);
  else if(sort === 'rating') list.sort((a,b)=>b.rating-a.rating);
  else if(sort === 'discount') list.sort((a,b)=>discountPct(b)-discountPct(a));

  document.getElementById('result-count').innerHTML =
    `Showing <b>${list.length}</b> results`;

  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  if(list.length === 0){
    grid.innerHTML = `
      <div class="empty-state">
        <div class="emoji">🔍</div>
        No products match your filters.<br>
        Try clearing a few.
      </div>
    `;
    return;
  }

  list.forEach(p=>grid.appendChild(buildCard(p)));
}

function discountPct(p){
  return Math.round((1 - p.price/p.mrp)*100);
}

function buildCard(p){
  const el = document.createElement('div');
  el.className = 'card';

  const inCart = !!cart[p.id];
  const isWished = wishlist.has(p.id);

  el.innerHTML = `
    ${p.deal ? '<span class="badge-deal">DEAL</span>' : ''}

    <button class="wish ${isWished?'active':''}"
      aria-label="Toggle wishlist"
      data-id="${p.id}">
      ${isWished?'♥':'♡'}
    </button>

    <div class="thumb" style="background:${p.bg}">
        <img src="${p.image}" alt="${p.name}" class="product-image">
    </div>

    <div class="p-name">${p.name}</div>

    <span class="p-rating">${p.rating.toFixed(1)} ★</span>

    <div class="p-price-row">
      <span class="p-price">₹${p.price.toLocaleString('en-IN')}</span>
      <span class="p-mrp">₹${p.mrp.toLocaleString('en-IN')}</span>
      <span class="p-off">${discountPct(p)}% off</span>
    </div>

    <div class="p-delivery">Free delivery by tomorrow</div>

    <button class="add-cart ${inCart?'in-cart':''}" data-id="${p.id}">
      ${inCart ? `✓ ADDED (${cart[p.id]})` : 'ADD TO CART'}
    </button>
  `;

  el.querySelector('.wish').addEventListener('click', ()=>toggleWish(p.id));
  el.querySelector('.add-cart').addEventListener('click', ()=>addToCart(p.id));

  return el;
}

function toggleWish(id){
  if(wishlist.has(id)){
    wishlist.delete(id);
  }else{
    wishlist.add(id);
    showToast('♥ Added to wishlist');
  }

  renderProducts();
}

/* ---------------- CART LOGIC ---------------- */
function addToCart(id){
  cart[id] = (cart[id]||0) + 1;

  showToast('✓ Added to cart');
  updateCartUI();
  renderProducts();
}

function changeQty(id, delta){
  if(!cart[id]) return;

  cart[id] += delta;

  if(cart[id] <= 0) delete cart[id];

  updateCartUI();
  renderProducts();
}

function removeFromCart(id){
  delete cart[id];

  updateCartUI();
  renderProducts();
}

function cartTotals(){
  let count=0, subtotal=0, mrpTotal=0;

  Object.entries(cart).forEach(([id,qty])=>{
    const p = PRODUCTS.find(x=>x.id==id);

    if(!p) return;

    count += qty;
    subtotal += p.price*qty;
    mrpTotal += p.mrp*qty;
  });

  return {
    count,
    subtotal,
    mrpTotal,
    discount: mrpTotal-subtotal
  };
}

function updateCartUI(){
  const {count, subtotal, mrpTotal, discount} = cartTotals();

  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTitle').textContent = `My Cart (${count})`;

  const itemsWrap = document.getElementById('cartItems');
  const summary = document.getElementById('cartSummary');
  const ids = Object.keys(cart);

  if(ids.length === 0){
    itemsWrap.innerHTML = `
      <div class="cart-empty">
        <div class="emoji">🛒</div>
        Your cart is empty.<br>
        Add items to see them here.
      </div>
    `;

    summary.style.display = 'none';
    return;
  }

  summary.style.display = 'block';
  itemsWrap.innerHTML = '';

  ids.forEach(id=>{
    const p = PRODUCTS.find(x=>x.id==id);
    const qty = cart[id];

    const row = document.createElement('div');
    row.className = 'cart-item';

    row.innerHTML = `
      <div class="thumb" style="background:${p.bg}">${p.emoji}</div>

      <div class="ci-info">
        <div class="p-name">${p.name}</div>

        <div class="p-price-row" style="margin-bottom:0;">
          <span class="p-price" style="font-size:14px;">
            ₹${(p.price*qty).toLocaleString('en-IN')}
          </span>
          <span class="p-mrp">
            ₹${(p.mrp*qty).toLocaleString('en-IN')}
          </span>
        </div>

        <div class="ci-bottom">
          <div class="qty-ctrl">
            <button data-act="dec" data-id="${p.id}">−</button>
            <span>${qty}</span>
            <button data-act="inc" data-id="${p.id}">+</button>
          </div>

          <button class="remove-btn" data-act="remove" data-id="${p.id}">
            REMOVE
          </button>
        </div>
      </div>
    `;

    itemsWrap.appendChild(row);
  });

  itemsWrap.querySelectorAll('[data-act]').forEach(btn=>{
    const id = btn.dataset.id;

    btn.addEventListener('click', ()=>{
      if(btn.dataset.act==='inc') changeQty(id,1);
      else if(btn.dataset.act==='dec') changeQty(id,-1);
      else removeFromCart(id);
    });
  });

  const delivery = subtotal > 500 || subtotal===0 ? 0 : 40;

  document.getElementById('sumCount').textContent = count;
  document.getElementById('sumSubtotal').textContent =
    '₹'+mrpTotal.toLocaleString('en-IN');

  document.getElementById('sumDiscount').textContent =
    '− ₹'+discount.toLocaleString('en-IN');

  document.getElementById('sumDelivery').textContent =
    delivery===0 ? 'FREE' : '₹'+delivery;

  document.getElementById('sumTotal').textContent =
    '₹'+(subtotal+delivery).toLocaleString('en-IN');
}

function checkout(){
  const {count} = cartTotals();

  if(count===0) return;

  showToast(`🎉 Order placed for ${count} item${count>1?'s':''}!`);

  cart = {};

  updateCartUI();
  renderProducts();

  setTimeout(closeCart, 900);
}

/* ---------------- DRAWER ---------------- */
function openCart(){
  document.getElementById('cartDrawer').classList.add('show');
  document.getElementById('overlay').classList.add('show');
}

function closeCart(){
  document.getElementById('cartDrawer').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
}

/* ---------------- TOAST ---------------- */
let toastTimer;

function showToast(msg){
  const t = document.getElementById('toast');

  t.textContent = msg;
  t.classList.add('show');

  clearTimeout(toastTimer);

  toastTimer = setTimeout(()=>t.classList.remove('show'), 1800);
}

/* ---------------- DEAL COUNTDOWN ---------------- */
function startClock(){
  let target = new Date().getTime() + (3*3600 + 47*60 + 12)*1000;

  function tick(){
    const now = new Date().getTime();
    let diff = Math.max(0, target - now);

    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);

    document.getElementById('dh').textContent = String(h).padStart(2,'0');
    document.getElementById('dm').textContent = String(m).padStart(2,'0');
    document.getElementById('ds').textContent = String(s).padStart(2,'0');

    if(diff<=0) target = new Date().getTime() + 4*3600*1000;
  }

  tick();
  setInterval(tick, 1000);
}

/* ---------------- INIT ---------------- */
renderProducts();
updateCartUI();
startClock();