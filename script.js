const SESSION_STORAGE_KEY = "voitixaSession";
const ORDER_STORAGE_KEY = "voitixaOrders";
const USER_STORAGE_KEY = "voitixaUsers";
const CART_STORAGE_PREFIX = "voitixaCart:";

const defaultProducts = [
  {
    id: 1,
    name: "NovaClick RGB Gaming Mouse",
    category: "gaming",
    originalPrice: 699,
    price: 499,
    rating: 4.8,
    tag: "Best seller",
    description: "Lightweight wired mouse with 7200 DPI, side buttons, and bright RGB for ranked nights.",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=80",
    alt: "Black gaming mouse with colored lighting"
  },
  {
    id: 2,
    name: "SyncPad Mechanical Keyboard 87",
    category: "gaming",
    originalPrice: 1899,
    price: 1499,
    rating: 4.7,
    tag: "Hot deal",
    description: "Compact blue-switch keyboard for gaming setups, school desks, and first stream stations.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
    alt: "Mechanical keyboard on a desk"
  },
  {
    id: 3,
    name: "PocketVolt 20000mAh Power Bank",
    category: "gadgets",
    originalPrice: 1199,
    price: 899,
    rating: 4.6,
    tag: "Travel pick",
    description: "High-capacity backup power with USB-C charging for commute days and campus life.",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80",
    alt: "Portable power bank charging a phone"
  },
  {
    id: 4,
    name: "MetroBook Air 14 Refreshed",
    category: "laptops",
    originalPrice: 18990,
    price: 15990,
    rating: 4.5,
    tag: "Apayao stock",
    description: "Slim 14-inch laptop with SSD storage for online classes, documents, and daily browsing.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    alt: "Open laptop on a desk"
  },
  {
    id: 5,
    name: "VividCam 1080p Webcam",
    category: "accessories",
    originalPrice: 899,
    price: 699,
    rating: 4.4,
    tag: "Work ready",
    description: "Clear video for meetings, online classes, streaming, and client calls from home.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=900&q=80",
    alt: "Webcam mounted on a monitor"
  },
  {
    id: 6,
    name: "PulsePods Low-Latency Earbuds",
    category: "gadgets",
    originalPrice: 1499,
    price: 999,
    rating: 4.6,
    tag: "Low latency",
    description: "Wireless earbuds with gaming mode, clean calls, and pocket-friendly battery life.",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=80",
    alt: "Wireless earbuds with charging case"
  },
  {
    id: 7,
    name: "XynPhone G5 128GB",
    category: "smartphones",
    originalPrice: 7990,
    price: 6490,
    rating: 4.5,
    tag: "Student pick",
    description: "Budget smartphone with 128GB storage, smooth social apps, and all-day battery.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    alt: "Smartphone on a table"
  },
  {
    id: 8,
    name: "CoolRise Laptop Stand Pro",
    category: "accessories",
    originalPrice: 749,
    price: 549,
    rating: 4.3,
    tag: "Desk upgrade",
    description: "Foldable aluminum stand that lifts your screen and improves airflow during long sessions.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
    alt: "Laptop setup with external accessories"
  },
  {
    id: 9,
    name: "ClearCall USB Condenser Mic",
    category: "accessories",
    originalPrice: 1699,
    price: 1199,
    rating: 4.7,
    tag: "Creator kit",
    description: "Plug-and-play desktop mic for class reports, Discord calls, podcasts, and livestreams.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
    alt: "Microphone on a desk setup"
  },
  {
    id: 10,
    name: "VoltSnap 65W GaN Charger",
    category: "gadgets",
    originalPrice: 1299,
    price: 899,
    rating: 4.8,
    tag: "Fast charge",
    description: "Compact USB-C charger for phones, tablets, earbuds, and many lightweight laptops.",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
    alt: "Phone charger and cable on a table"
  },
  {
    id: 11,
    name: "XynPhone Lite A3 64GB",
    category: "smartphones",
    originalPrice: 5490,
    price: 4490,
    rating: 4.4,
    tag: "Entry phone",
    description: "Affordable everyday phone for calls, social apps, school chats, and basic photos.",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80",
    alt: "Smartphone standing on a plain surface"
  },
  {
    id: 12,
    name: "AeroPad RGB Cooling Stand",
    category: "gaming",
    originalPrice: 1399,
    price: 999,
    rating: 4.5,
    tag: "Laptop gaming",
    description: "Cooling pad with quiet fans and adjustable height for long gaming or editing sessions.",
    image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=900&q=80",
    alt: "Laptop on a gaming desk"
  },
  {
    id: 13,
    name: "MetroBook Study 15 SSD",
    category: "laptops",
    originalPrice: 22990,
    price: 18990,
    rating: 4.6,
    tag: "School ready",
    description: "15-inch laptop with SSD speed, number pad, webcam, and room for assignments and files.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    alt: "Silver laptop on a desk"
  },
  {
    id: 14,
    name: "StreamBeam LED Light Bar",
    category: "accessories",
    originalPrice: 1099,
    price: 799,
    rating: 4.5,
    tag: "Setup glow",
    description: "Adjustable desk light for clearer video calls, late-night homework, and product photos.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
    alt: "Desk lamp glowing beside a laptop"
  },
  {
    id: 15,
    name: "ShieldCase Rugged Phone Kit",
    category: "smartphones",
    originalPrice: 599,
    price: 399,
    rating: 4.3,
    tag: "Phone care",
    description: "Shock-resistant case, tempered glass, and cleaning cloth for common phone sizes.",
    image: "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?auto=format&fit=crop&w=900&q=80",
    alt: "Phone accessories arranged on a table"
  },
  {
    id: 16,
    name: "QuestPad 10 Learning Tablet",
    category: "gadgets",
    originalPrice: 6990,
    price: 5790,
    rating: 4.4,
    tag: "Family pick",
    description: "10-inch tablet for video lessons, reading apps, streaming, and simple productivity.",
    image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80",
    alt: "Tablet on a desk"
  }
];

let products = [...defaultProducts];
let activeFilter = "all";
let cart = [];
let currentSession = loadSession();

const loginSection = document.querySelector("#login");
const consumerDashboard = document.querySelector("#consumerDashboard");
const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");
const loginMessage = document.querySelector("#loginMessage");
const savedAccountList = document.querySelector("#savedAccountList");
const userSignupForm = document.querySelector("#userSignupForm");
const signupGmailInput = document.querySelector("#signupGmailInput");
const signupPasswordInput = document.querySelector("#signupPasswordInput");
const signupConfirmInput = document.querySelector("#signupConfirmInput");
const userSignupMessage = document.querySelector("#userSignupMessage");
const passwordToggleButtons = document.querySelectorAll("[data-toggle-password]");
const showSignupButton = document.querySelector("#showSignupButton");
const loginNavButton = document.querySelector("#loginNavButton");
const logoutButton = document.querySelector("#logoutButton");

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
const categoryLinks = document.querySelectorAll("[data-filter-link]");
const sortSelect = document.querySelector("#sortSelect");
const resultCount = document.querySelector("#resultCount");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector("#cartCount");
const cartToggle = document.querySelector("#cartToggle");
const cartPanel = document.querySelector("#cartPanel");
const clearCart = document.querySelector("#clearCart");
const checkoutButton = document.querySelector("#checkoutButton");
const checkoutMessage = document.querySelector("#checkoutMessage");
const consumerTitle = document.querySelector("#consumerTitle");
const consumerProductCount = document.querySelector("#consumerProductCount");
const consumerCartCount = document.querySelector("#consumerCartCount");
const consumerCartTotal = document.querySelector("#consumerCartTotal");
const consumerGreeting = document.querySelector("#consumerGreeting");
const accountEmail = document.querySelector("#accountEmail");
const accountSavedDate = document.querySelector("#accountSavedDate");
const accountOrderCount = document.querySelector("#accountOrderCount");
const dealsForm = document.querySelector("#dealsForm");
const dealsMessage = document.querySelector("#dealsMessage");

const peso = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0
});

function loadUsers() {
  const storedUsers = localStorage.getItem(USER_STORAGE_KEY);
  if (!storedUsers) return [];

  try {
    const parsedUsers = JSON.parse(storedUsers);
    return Array.isArray(parsedUsers) ? parsedUsers : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
}

function getAccountName(email) {
  const name = email.split("@")[0].replace(/[._-]+/g, " ").trim();
  if (!name) return "buyer";
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function renderSavedAccounts() {
  const users = loadUsers();

  savedAccountList.innerHTML = users
    .map((user) => `<option value="${user.gmail}"></option>`)
    .join("");
}

function fillSavedAccount(gmail) {
  const user = loadUsers().find((item) => item.gmail === gmail);
  if (!user) return;

  usernameInput.value = user.gmail;
  passwordInput.value = user.password;
  loginMessage.textContent = `Saved account loaded for ${getAccountName(user.gmail)}.`;
  passwordInput.focus();
}

function getCartKey(username) {
  return `${CART_STORAGE_PREFIX}${username.trim().toLowerCase()}`;
}

function loadSavedCart(username) {
  if (!username) return [];

  try {
    const savedCart = JSON.parse(localStorage.getItem(getCartKey(username)) || "[]");
    return Array.isArray(savedCart) ? savedCart : [];
  } catch {
    return [];
  }
}

function saveCurrentCart() {
  if (!currentSession) return;
  localStorage.setItem(getCartKey(currentSession.username), JSON.stringify(cart));
}

function loadOrders() {
  try {
    const orders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY) || "[]");
    return Array.isArray(orders) ? orders : [];
  } catch {
    return [];
  }
}

function isGmail(email) {
  return email.trim().toLowerCase().endsWith("@gmail.com");
}

function loadSession() {
  const storedSession = localStorage.getItem(SESSION_STORAGE_KEY);
  if (!storedSession) return null;

  try {
    return JSON.parse(storedSession);
  } catch {
    return null;
  }
}

function saveSession(session) {
  currentSession = session;
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  cart = loadSavedCart(session.username);
}

function clearSession() {
  currentSession = null;
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

function hideSignupForm() {
  userSignupForm.classList.add("hidden");
  showSignupButton.setAttribute("aria-expanded", "false");
}

function showDashboard(isLoggedIn) {
  loginSection.classList.toggle("hidden", Boolean(isLoggedIn));
  consumerDashboard.classList.toggle("hidden", !isLoggedIn);
  loginNavButton.classList.toggle("hidden", Boolean(isLoggedIn));
  logoutButton.classList.toggle("hidden", !isLoggedIn);
  cartToggle.classList.toggle("hidden", !isLoggedIn);

  if (isLoggedIn) {
    consumerDashboard.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getVisibleProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = activeFilter === "all" || product.category === activeFilter;
    const matchesSearch = [product.name, product.category, product.description, product.tag]
      .join(" ")
      .toLowerCase()
      .includes(query);

    return matchesCategory && matchesSearch;
  });

  return filtered.sort((a, b) => {
    if (sortSelect.value === "low") return a.price - b.price;
    if (sortSelect.value === "high") return b.price - a.price;
    if (sortSelect.value === "rating") return b.rating - a.rating;
    return a.id - b.id;
  });
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();

  resultCount.textContent = visibleProducts.length === products.length
    ? "Showing all products"
    : `Showing ${visibleProducts.length} product${visibleProducts.length === 1 ? "" : "s"}`;

  if (visibleProducts.length === 0) {
    productGrid.innerHTML = '<p class="empty-results">No matching products yet.</p>';
    return;
  }

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.alt || product.name}" loading="lazy">
      <div class="product-copy">
        <div>
          <div class="product-meta">
            <span class="badge">${product.tag}</span>
            <span>${Number(product.rating).toFixed(1)} rating</span>
          </div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        </div>
        <div class="price-row">
          <div class="price-stack">
            <span class="original-price">${peso.format(product.originalPrice || product.price)}</span>
            <span class="price">${peso.format(product.price)}</span>
          </div>
          <button class="add-button" type="button" data-id="${product.id}">Add to cart</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your next upgrade starts here.</p>';
  } else {
    cartItems.innerHTML = cart.map((item) => `
      <div class="cart-line">
        <div>
          <strong>${item.name}</strong>
          <span>${item.quantity} x ${peso.format(item.price)}</span>
          <div class="cart-qty">
            <button type="button" data-action="decrease" data-id="${item.id}">-</button>
            <button type="button" data-action="increase" data-id="${item.id}">+</button>
            <button class="remove-button" type="button" data-action="remove" data-id="${item.id}">Remove</button>
          </div>
        </div>
        <strong>${peso.format(item.price * item.quantity)}</strong>
      </div>
    `).join("");
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartTotal.textContent = peso.format(total);
  cartCount.textContent = count;
  consumerCartCount.textContent = count;
  consumerCartTotal.textContent = peso.format(total);
  saveCurrentCart();
}

function renderConsumerStats() {
  consumerProductCount.textContent = products.length;
  renderAccountSummary();
  renderCart();
}

function renderAccountSummary() {
  if (!currentSession) {
    consumerTitle.textContent = "Shop products, add to cart, and buy from Voitixa Tech PH.";
    consumerGreeting.textContent = "Welcome back. Your saved account is ready.";
    accountEmail.textContent = "No account yet";
    accountSavedDate.textContent = "After sign up";
    accountOrderCount.textContent = "0";
    return;
  }

  const users = loadUsers();
  const savedUser = users.find((user) => user.gmail === currentSession.username);
  const orders = loadOrders().filter((order) => order.customer === currentSession.username);
  const createdAt = savedUser?.createdAt ? new Date(savedUser.createdAt) : null;
  const accountName = getAccountName(currentSession.username);

  consumerTitle.textContent = `Welcome back, ${accountName}.`;
  consumerGreeting.textContent = "Your Gmail account, saved cart, and order history are ready in this browser.";
  accountEmail.textContent = currentSession.username;
  accountSavedDate.textContent = createdAt
    ? createdAt.toLocaleDateString("en-PH", { year: "numeric", month: "short", day: "numeric" })
    : "Saved locally";
  accountOrderCount.textContent = String(orders.length);
}

function renderEverything() {
  renderProducts();
  renderConsumerStats();
}

function addToCart(productId) {
  if (!currentSession) {
    loginMessage.textContent = "Login as a buyer first to add products to your cart.";
    loginSection.classList.remove("hidden");
    loginSection.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  checkoutMessage.textContent = `${product.name} added to cart.`;
  renderCart();
}

function updateCart(productId, action) {
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  if (action === "increase") item.quantity += 1;
  if (action === "decrease") item.quantity -= 1;
  if (action === "remove" || item.quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.id !== productId);
  }

  renderCart();
}

function checkoutCart() {
  if (!currentSession) {
    checkoutMessage.textContent = "Login as a buyer before buying products.";
    loginSection.classList.remove("hidden");
    loginSection.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (cart.length === 0) {
    checkoutMessage.textContent = "Your cart is empty.";
    return;
  }

  const orders = loadOrders();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  orders.push({
    id: Date.now(),
    customer: currentSession.username,
    total,
    items: cart,
    date: new Date().toISOString()
  });
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));

  cart = [];
  checkoutMessage.textContent = `Order placed. Total: ${peso.format(total)}.`;
  renderConsumerStats();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  if (!isGmail(username)) {
    loginMessage.textContent = "Please use a Gmail address.";
    return;
  }

  const users = loadUsers();
  const user = users.find((item) => item.gmail === username && item.password === password);
  if (!user) {
    loginMessage.textContent = "Account not found. Please sign up first or check your password.";
    return;
  }

  saveSession({ username });
  loginMessage.textContent = "";
  userSignupMessage.textContent = "";
  loginForm.reset();
  renderSavedAccounts();
  hideSignupForm();
  showDashboard(true);
  renderEverything();
});

showSignupButton.addEventListener("click", () => {
  userSignupForm.classList.remove("hidden");
  showSignupButton.setAttribute("aria-expanded", "true");
  loginMessage.textContent = "";
  userSignupMessage.textContent = "";
  signupGmailInput.focus();
});

userSignupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const gmail = signupGmailInput.value.trim().toLowerCase();
  const password = signupPasswordInput.value;
  const confirmPassword = signupConfirmInput.value;

  if (!isGmail(gmail)) {
    userSignupMessage.textContent = "Please sign up with a Gmail address.";
    return;
  }

  if (password !== confirmPassword) {
    userSignupMessage.textContent = "Passwords do not match.";
    return;
  }

  const users = loadUsers();
  const existingUser = users.find((user) => user.gmail === gmail);
  if (existingUser) {
    userSignupMessage.textContent = "This Gmail already has an account. Please login.";
    return;
  }

  users.push({
    gmail,
    password,
    createdAt: new Date().toISOString()
  });
  saveUsers(users);
  saveSession({ username: gmail });
  loginMessage.textContent = "";
  userSignupMessage.textContent = "Account created and saved for easy login.";
  userSignupForm.reset();
  renderSavedAccounts();
  hideSignupForm();
  showDashboard(true);
  renderEverything();
});

usernameInput.addEventListener("change", () => {
  fillSavedAccount(usernameInput.value.trim().toLowerCase());
});

passwordToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.querySelector(`#${button.dataset.togglePassword}`);
    if (!input) return;

    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    button.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
    button.setAttribute("aria-pressed", String(isHidden));
    button.querySelector("span").textContent = isHidden ? "Hide" : "Show";
  });
});

loginNavButton.addEventListener("click", () => {
  hideSignupForm();
  loginSection.classList.remove("hidden");
  loginSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

logoutButton.addEventListener("click", () => {
  saveCurrentCart();
  clearSession();
  cart = [];
  renderCart();
  hideSignupForm();
  showDashboard(false);
  loginSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProducts();
  });
});

categoryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activeFilter = link.dataset.filterLink;
    filterButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === activeFilter);
    });
    renderProducts();
  });
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-button");
  if (!button) return;
  addToCart(Number(button.dataset.id));
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  updateCart(Number(button.dataset.id), button.dataset.action);
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

cartToggle.addEventListener("click", () => {
  const isOpen = cartToggle.getAttribute("aria-expanded") === "true";
  cartToggle.setAttribute("aria-expanded", String(!isOpen));
  cartPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

clearCart.addEventListener("click", () => {
  cart = [];
  checkoutMessage.textContent = "Cart cleared.";
  renderCart();
});

checkoutButton.addEventListener("click", checkoutCart);

dealsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  dealsMessage.textContent = "You are on the deal list. Watch for the next drop.";
  dealsForm.reset();
});

renderSavedAccounts();

if (currentSession) {
  cart = loadSavedCart(currentSession.username);
}

renderEverything();
showDashboard(Boolean(currentSession));
