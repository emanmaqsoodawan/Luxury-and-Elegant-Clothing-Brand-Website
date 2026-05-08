document.addEventListener("DOMContentLoaded", () => {
  // Static fallback data
  const fallbackProducts = [
    {
      id: 1,
      name: "Modern Minimalist Dress",
      category: "Women",
      price: 950.0,
      image_url: "assets/hero_hijab_model_1778234287733.png",
      description: "A lightweight luxury summer dress.",
    },
    {
      id: 2,
      name: "Emerald Green Silk Dress",
      category: "Women",
      price: 1250.0,
      image_url: "assets/woman_dress_2_1778235243107.png",
      description: "Chic silk modest dress.",
    },
    {
      id: 3,
      name: "White Linen Summer Dress",
      category: "Women",
      price: 890.0,
      image_url: "assets/woman_dress_3_1778235258036.png",
      description: "Lightweight linen with delicate hijab.",
    },
    {
      id: 4,
      name: "Navy Blue Maxi Dress",
      category: "Women",
      price: 1100.0,
      image_url: "assets/woman_dress_4_1778235271783.png",
      description: "High-end elegant posture summer fashion.",
    },
    {
      id: 5,
      name: "Flowing Pastel Pink Dress",
      category: "Women",
      price: 1050.0,
      image_url: "assets/woman_dress_1_1778235228850.png",
      description: "Modern pastel flowing lightweight dress.",
    },
    {
      id: 6,
      name: "Chic Evening Gown",
      category: "Women",
      price: 1500.0,
      image_url: "assets/womens_elegant_hijab_1778234301647.png",
      description: "Sophisticated chic dress.",
    },
    {
      id: 7,
      name: "Pastel Pink Shalwar Kameez",
      category: "Women",
      price: 920.0,
      image_url: "assets/shalwar_pink.png",
      description:
        "Elegant luxury pastel pink shalwar kameez with flowing dupatta.",
    },
    {
      id: 8,
      name: "Emerald Green Shalwar Kameez",
      category: "Women",
      price: 1150.0,
      image_url: "assets/shalwar_green.png",
      description: "Premium emerald green designer outfit with sheer dupatta.",
    },
    {
      id: 9,
      name: "Golden Flowing Shalwar Kameez",
      category: "Women",
      price: 1300.0,
      image_url: "assets/shalwar_gold.png",
      description:
        "Sophisticated golden ensemble for luxurious special occasions.",
    },
    {
      id: 10,
      name: "Luxury White Chiffon Dress",
      category: "Women",
      price: 1600.0,
      image_url: "assets/womens_elegant_hijab_1778234301647.png",
      description: "Pure white chiffon for special occasions.",
    },

    {
      id: 11,
      name: "Light Blue Linen Suit",
      category: "Men",
      price: 1200.0,
      image_url: "assets/man_suit_1_1778235286540.png",
      description: "Tailored light blue linen summer suit.",
    },
    {
      id: 12,
      name: "Beige Smart-Casual Outfit",
      category: "Men",
      price: 950.0,
      image_url: "assets/man_suit_2_1778235299534.png",
      description: "Modern beige luxury summer wear.",
    },
    {
      id: 13,
      name: "Sleek White Summer Blazer",
      category: "Men",
      price: 1400.0,
      image_url: "assets/man_suit_3_1778235314906.png",
      description: "Contemporary high-end blazer.",
    },
    {
      id: 14,
      name: "Olive Green Linen Suit",
      category: "Men",
      price: 1350.0,
      image_url: "assets/man_suit_4_1778235336505.png",
      description: "Modern lightweight luxury spring collection.",
    },
    {
      id: 15,
      name: "Classic Tailored Suit",
      category: "Men",
      price: 1500.0,
      image_url: "assets/mens_elegant_suit_1778234317045.png",
      description: "A sharply tailored modern suit.",
    },
    {
      id: 16,
      name: "Navy Blue Summer Suit",
      category: "Men",
      price: 1250.0,
      image_url: "assets/man_suit_1_1778235286540.png",
      description: "Lightweight navy blue elegance.",
    },
    {
      id: 17,
      name: "Charcoal Grey Smart Look",
      category: "Men",
      price: 1100.0,
      image_url: "assets/man_suit_2_1778235299534.png",
      description: "Premium charcoal summer fashion.",
    },
    {
      id: 18,
      name: "White Linen Trousers & Shirt",
      category: "Men",
      price: 850.0,
      image_url: "assets/man_suit_3_1778235314906.png",
      description: "Perfect casual summer luxury.",
    },
    {
      id: 19,
      name: "Sand Colored Casual Suit",
      category: "Men",
      price: 1150.0,
      image_url: "assets/man_suit_4_1778235336505.png",
      description: "Minimalistic sand-colored fashion.",
    },
    {
      id: 20,
      name: "Premium Black Event Suit",
      category: "Men",
      price: 1800.0,
      image_url: "assets/mens_elegant_suit_1778234317045.png",
      description: "The ultimate black luxury suit.",
    },
  ];

  let allProducts = [];
  let cart = [];
  let wishlist = [];

  const productsGrid = document.getElementById("products-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("search-input");

  // UI Elements
  const cartIcon = document.getElementById("cart-icon");
  const cartSidebar = document.getElementById("cart-sidebar");
  const closeCart = document.getElementById("close-cart");
  const cartOverlay = document.getElementById("cart-overlay");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalPrice = document.getElementById("cart-total-price");
  const cartCount = document.getElementById("cart-count");
  const wishCount = document.getElementById("wish-count");

  const checkoutModal = document.getElementById("checkout-modal");
  const loginModal = document.getElementById("login-modal");
  const qvModal = document.getElementById("quick-view-modal");
  const wishlistModal = document.getElementById("wishlist-modal");
  const wishlistItemsContainer = document.getElementById(
    "wishlist-items-container",
  );

  // Init
  async function fetchProducts() {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) throw new Error();
      allProducts = await response.json();
    } catch (error) {
      allProducts = fallbackProducts;
    }
    renderProducts(allProducts);
  }

  // Render logic
  function renderProducts(products) {
    productsGrid.innerHTML = "";
    if (products.length === 0)
      productsGrid.innerHTML = "<p>No products found.</p>";
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
                <div class="relative">
                    <img src="${product.image_url}" alt="${product.name}" class="product-image pointer" onclick="openQuickView(${product.id})">
                    <span class="wishlist-btn-overlay" data-id="${product.id}" onclick="toggleWishlist(${product.id})">${wishlist.includes(product.id) ? "❤️" : "🤍"}</span>
                </div>
                <h3 class="product-title pointer" onclick="openQuickView(${product.id})">${product.name}</h3>
                <p class="product-price">$${Number(product.price).toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            `;
      productsGrid.appendChild(productCard);
    });
  }

  let currentCategory = "All";

  function applyFilters() {
    const term = searchInput.value.toLowerCase();
    let filtered = allProducts;

    if (currentCategory !== "All") {
      filtered = filtered.filter((p) => p.category === currentCategory);
    }

    if (term) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          (p.description && p.description.toLowerCase().includes(term)),
      );
    }

    renderProducts(filtered);
  }

  // Features
  searchInput.addEventListener("input", () => {
    applyFilters();
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.getAttribute("data-category");
      applyFilters();
    });
  });

  // Wishlist
  window.toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      wishlist = wishlist.filter((wid) => wid !== id);
    } else {
      wishlist.push(id);
    }
    wishCount.innerText = wishlist.length;

    document.querySelectorAll(".wishlist-btn-overlay").forEach((btn) => {
      if (parseInt(btn.getAttribute("data-id")) === id) {
        btn.innerText = wishlist.includes(id) ? "❤️" : "🤍";
      }
    });
    updateWishlistUI();
  };

  function updateWishlistUI() {
    if (!wishlistItemsContainer) return;
    wishlistItemsContainer.innerHTML = "";
    if (wishlist.length === 0) {
      wishlistItemsContainer.innerHTML =
        "<p>Your wishlist is currently empty.</p>";
      return;
    }
    wishlist.forEach((id) => {
      const p = allProducts.find((prod) => prod.id === id);
      if (p) {
        wishlistItemsContainer.innerHTML += `
                    <div style="display:flex; align-items:center; gap:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                        <img src="${p.image_url}" style="width:60px; height:60px; object-fit:cover; border-radius:5px;">
                        <div style="flex:1;">
                            <h4 style="margin:0;">${p.name}</h4>
                            <p style="margin:5px 0 0 0; font-weight:bold;">$${Number(p.price).toFixed(2)}</p>
                        </div>
                        <button class="add-to-cart" style="padding:5px 10px; width:auto;" onclick="addToCart(${p.id}); wishlistModal.style.display='none';">Add to Cart</button>
                        <button style="border:none; background:transparent; cursor:pointer; color:red; font-size:1.2rem;" onclick="toggleWishlist(${p.id})">❌</button>
                    </div>
                `;
      }
    });
  }

  document.getElementById("wishlist-icon").onclick = () => {
    updateWishlistUI();
    wishlistModal.style.display = "block";
  };
  document.querySelector(".close-wishlist-modal").onclick = () =>
    (wishlistModal.style.display = "none");

  // Cart
  window.addToCart = (productId, size = "S", customPrice = null) => {
    const product = allProducts.find((p) => p.id === productId);
    if (product) {
      const price = customPrice !== null ? customPrice : Number(product.price);
      const cartItemId = `${productId}-${size}`;
      const existingItem = cart.find((item) => item.cartItemId === cartItemId);

      if (existingItem) existingItem.quantity += 1;
      else cart.push({ ...product, cartItemId, size, price, quantity: 1 });

      updateCartUI();
      openCart();
      qvModal.style.display = "none";
    }
  };

  function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let total = 0,
      count = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
      count += item.quantity;
      cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <div><h4>${item.name} (${item.size})</h4><p>$${Number(item.price).toFixed(2)} x ${item.quantity}</p></div>
                    <button class="remove-item" onclick="removeFromCart('${item.cartItemId}')">X</button>
                </div>
            `;
    });
    cartTotalPrice.innerText = total.toFixed(2);
    cartCount.innerText = count;
  }
  window.removeFromCart = (cartItemId) => {
    cart = cart.filter((item) => item.cartItemId !== cartItemId);
    updateCartUI();
  };

  function openCart() {
    cartSidebar.classList.add("open");
    cartOverlay.classList.add("active");
  }
  function closeCartSidebar() {
    cartSidebar.classList.remove("open");
    cartOverlay.classList.remove("active");
  }
  cartIcon.addEventListener("click", openCart);
  closeCart.addEventListener("click", closeCartSidebar);
  cartOverlay.addEventListener("click", closeCartSidebar);

  // Quick View
  let currentQvProduct = null;
  let selectedSize = "S";
  const sizeOffsets = { S: 0, M: 50, L: 100, XL: 150 };

  window.openQuickView = (id) => {
    const product = allProducts.find((p) => p.id === id);
    if (!product) return;

    currentQvProduct = product;
    selectedSize = "S";
    updateQvPrice();

    document.getElementById("qv-img").src = product.image_url;
    document.getElementById("qv-title").innerText = product.name;
    document.getElementById("qv-desc").innerText =
      product.description || "Premium quality luxury item.";

    document.querySelectorAll(".size-btn").forEach((b) => {
      b.classList.remove("active");
      if (b.innerText === "S") b.classList.add("active");
    });

    qvModal.style.display = "block";
  };

  function updateQvPrice() {
    if (!currentQvProduct) return;
    const newPrice = Number(currentQvProduct.price) + sizeOffsets[selectedSize];
    document.getElementById("qv-price").innerText = "$" + newPrice.toFixed(2);
  }

  document.querySelectorAll(".size-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".size-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      selectedSize = e.target.innerText;
      updateQvPrice();
    });
  });

  document.getElementById("qv-add-cart").onclick = () => {
    if (!currentQvProduct) return;
    const finalPrice =
      Number(currentQvProduct.price) + sizeOffsets[selectedSize];
    addToCart(currentQvProduct.id, selectedSize, finalPrice);
  };

  document.querySelector(".close-qv-modal").onclick = () =>
    (qvModal.style.display = "none");

  // Login
  document.getElementById("login-icon").onclick = () =>
    (loginModal.style.display = "block");
  document.querySelector(".close-login-modal").onclick = () =>
    (loginModal.style.display = "none");
  document.getElementById("login-form").onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    try {
      await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: "xx" }),
      });
    } catch (e) {}
    document.getElementById("login-icon").innerText = email.split("@")[0];
    loginModal.style.display = "none";
    alert("Logged in successfully!");
  };

  // Newsletter
  document.getElementById("newsletter-form").onsubmit = async (e) => {
    e.preventDefault();
    const msgEl = document.getElementById("newsletter-msg");
    const email = document.getElementById("nl-email").value;
    msgEl.innerText = "";
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Failed to save subscription");
      msgEl.style.color = "#2a7a2a";
      msgEl.innerText = "Subscribed successfully!";
      e.target.reset();
    } catch (err) {
      console.error("Newsletter error:", err);
      msgEl.style.color = "#b71c1c";
      msgEl.innerText = "Subscription failed. Please try again.";
    }
  };

  // Checkout
  document.getElementById("checkout-btn").onclick = () => {
    if (cart.length === 0) return alert("Your cart is empty!");
    closeCartSidebar();
    checkoutModal.style.display = "block";
  };
  document.querySelector(".close-modal").onclick = () =>
    (checkoutModal.style.display = "none");
  document.getElementById("checkout-form").onsubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("cust-name").value;
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name,
          customer_email: document.getElementById("cust-email").value,
          cartItems: cart,
          total_amount: cart.reduce((s, i) => s + i.price * i.quantity, 0),
        }),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      alert(`Order placed successfully, ${name}!`);
      cart = [];
      updateCartUI();
      checkoutModal.style.display = "none";
      e.target.reset();
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to place order. Please try again or check console.");
    }
  };

  fetchProducts();
});
