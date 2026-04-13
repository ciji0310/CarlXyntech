const SESSION_STORAGE_KEY = "voitixaSession";
const ORDER_STORAGE_KEY = "voitixaOrders";
const USER_STORAGE_KEY = "voitixaUsers";

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
const consumerProductCount = document.querySelector("#consumerProductCount");
const consumerCartCount = document.querySelector("#consumerCartCount");
const consumerCartTotal = document.querySelector("#consumerCartTotal");
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
}

function renderConsumerStats() {
  consumerProductCount.textContent = products.length;
  renderCart();
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

  const orders = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY) || "[]");
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
  renderCart();
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
  userSignupMessage.textContent = "Account created. Welcome to your dashboard.";
  userSignupForm.reset();
  hideSignupForm();
  showDashboard(true);
  renderEverything();
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

renderEverything();
showDashboard(Boolean(currentSession));
