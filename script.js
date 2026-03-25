/* ============================================
   MEGAMART DEPARTMENT STORE - JAVASCRIPT
   Beginner-friendly (basic commands only)
   No advanced features used
   ============================================ */


// ---- PRODUCT DATA ----
// 24 unique products across 6 departments
// All prices are in Indian Rupees (₹)

var products = [

    // ======= FASHION (4 products) =======
    {
        name: "Banarasi Silk Saree",
        category: "Women's Fashion",
        department: "fashion",
        price: 8499,
        originalPrice: 13999,
        emoji: "👗",
        badge: "sale",
        rating: 4.8,
        reviews: 256,
        description: "Handwoven Banarasi silk saree with intricate gold zari work. Perfect for weddings and festive celebrations."
    },
    {
        name: "Slim Fit Blazer",
        category: "Men's Fashion",
        department: "fashion",
        price: 4599,
        originalPrice: null,
        emoji: "🧥",
        badge: "new",
        rating: 4.5,
        reviews: 112,
        description: "A sharp slim-fit blazer in navy blue, crafted from premium wool blend. Ideal for formal events and office wear."
    },
    {
        name: "Embroidered Kurti Set",
        category: "Women's Fashion",
        department: "fashion",
        price: 1899,
        originalPrice: 2999,
        emoji: "👘",
        badge: "sale",
        rating: 4.6,
        reviews: 345,
        description: "A comfortable cotton kurti with delicate chikankari embroidery and matching palazzo pants. Great for everyday elegance."
    },
    {
        name: "Leather Chelsea Boots",
        category: "Footwear",
        department: "fashion",
        price: 6799,
        originalPrice: null,
        emoji: "👢",
        badge: "trending",
        rating: 4.7,
        reviews: 89,
        description: "Genuine leather Chelsea boots with elastic side panels and a comfortable cushioned sole. Built for style and durability."
    },

    // ======= ELECTRONICS (4 products) =======
    {
        name: "Wireless Noise-Cancelling Earbuds",
        category: "Audio",
        department: "electronics",
        price: 7999,
        originalPrice: 12499,
        emoji: "🎧",
        badge: "sale",
        rating: 4.7,
        reviews: 520,
        description: "Premium TWS earbuds with active noise cancellation, 30-hour battery life, and crystal clear sound quality."
    },
    {
        name: "4K Smart LED Television",
        category: "TV & Display",
        department: "electronics",
        price: 34999,
        originalPrice: null,
        emoji: "📺",
        badge: "bestseller",
        rating: 4.6,
        reviews: 198,
        description: "55-inch 4K Ultra HD Smart TV with Dolby Vision, built-in streaming apps, and slim bezel design."
    },
    {
        name: "Mechanical Gaming Keyboard",
        category: "Computer Accessories",
        department: "electronics",
        price: 3499,
        originalPrice: 5999,
        emoji: "⌨️",
        badge: "sale",
        rating: 4.4,
        reviews: 276,
        description: "RGB backlit mechanical keyboard with blue switches, anti-ghosting keys, and a detachable wrist rest."
    },
    {
        name: "Portable Power Bank 20000mAh",
        category: "Mobile Accessories",
        department: "electronics",
        price: 1499,
        originalPrice: null,
        emoji: "🔋",
        badge: "new",
        rating: 4.3,
        reviews: 412,
        description: "Slim 20000mAh power bank with fast charging support, dual USB ports, and LED charge indicator."
    },

    // ======= HOME & LIVING (4 products) =======
    {
        name: "Handwoven Jute Area Rug",
        category: "Home Decor",
        department: "home",
        price: 3299,
        originalPrice: 5499,
        emoji: "🏠",
        badge: "sale",
        rating: 4.5,
        reviews: 134,
        description: "Natural handwoven jute rug with a geometric pattern. Adds warmth and texture to any living room."
    },
    {
        name: "Ceramic Dinner Set (24 pcs)",
        category: "Kitchen",
        department: "home",
        price: 4999,
        originalPrice: null,
        emoji: "🍽️",
        badge: "new",
        rating: 4.8,
        reviews: 87,
        description: "Elegant 24-piece ceramic dinner set with a modern matte finish. Microwave and dishwasher safe."
    },
    {
        name: "Bamboo Bedside Table Lamp",
        category: "Lighting",
        department: "home",
        price: 1899,
        originalPrice: 2799,
        emoji: "💡",
        badge: "trending",
        rating: 4.4,
        reviews: 203,
        description: "Minimalist bamboo table lamp with a warm-glow LED bulb. Creates a calming ambiance in any room."
    },
    {
        name: "Cotton Bedsheet Set (King Size)",
        category: "Bedroom",
        department: "home",
        price: 2499,
        originalPrice: null,
        emoji: "🛏️",
        badge: "bestseller",
        rating: 4.7,
        reviews: 455,
        description: "Soft 300-thread-count cotton bedsheet set with two pillow covers. Breathable fabric for a good night's sleep."
    },

    // ======= GROCERY (4 products) =======
    {
        name: "Organic Honey (500g)",
        category: "Natural Foods",
        department: "grocery",
        price: 449,
        originalPrice: 699,
        emoji: "🍯",
        badge: "sale",
        rating: 4.6,
        reviews: 389,
        description: "Pure organic wild forest honey, unprocessed and raw. Rich in antioxidants and natural sweetness."
    },
    {
        name: "Premium Basmati Rice (5kg)",
        category: "Staples",
        department: "grocery",
        price: 599,
        originalPrice: null,
        emoji: "🍚",
        badge: "bestseller",
        rating: 4.8,
        reviews: 612,
        description: "Extra-long grain aged Basmati rice. Fluffy, aromatic, and perfect for biryani, pulao, and everyday meals."
    },
    {
        name: "Cold-Pressed Coconut Oil (1L)",
        category: "Cooking Oils",
        department: "grocery",
        price: 349,
        originalPrice: null,
        emoji: "🥥",
        badge: "new",
        rating: 4.5,
        reviews: 178,
        description: "100% pure cold-pressed virgin coconut oil. Great for cooking, skin care, and hair nourishment."
    },
    {
        name: "Assorted Dry Fruits Box (1kg)",
        category: "Snacks & Nuts",
        department: "grocery",
        price: 1299,
        originalPrice: 1899,
        emoji: "🥜",
        badge: "sale",
        rating: 4.9,
        reviews: 234,
        description: "Premium mix of almonds, cashews, walnuts, pistachios, and raisins. A healthy and tasty gift box."
    },

    // ======= SPORTS (4 products) =======
    {
        name: "Yoga Mat with Carry Strap",
        category: "Fitness",
        department: "sports",
        price: 999,
        originalPrice: 1599,
        emoji: "🧘",
        badge: "sale",
        rating: 4.5,
        reviews: 312,
        description: "6mm thick non-slip yoga mat with alignment lines and a carry strap. Perfect for yoga and home workouts."
    },
    {
        name: "Badminton Racket Set",
        category: "Racquet Sports",
        department: "sports",
        price: 1799,
        originalPrice: null,
        emoji: "🏸",
        badge: "new",
        rating: 4.4,
        reviews: 145,
        description: "Two lightweight carbon-fibre rackets with 6 feather shuttlecocks and a carrying case. Tournament quality."
    },
    {
        name: "Running Shoes Ultra Comfort",
        category: "Sports Footwear",
        department: "sports",
        price: 3999,
        originalPrice: 6499,
        emoji: "👟",
        badge: "sale",
        rating: 4.7,
        reviews: 278,
        description: "Lightweight running shoes with responsive foam cushioning and breathable mesh upper. Built for long-distance comfort."
    },
    {
        name: "Stainless Steel Water Bottle (1L)",
        category: "Accessories",
        department: "sports",
        price: 699,
        originalPrice: null,
        emoji: "🧴",
        badge: "trending",
        rating: 4.3,
        reviews: 567,
        description: "Double-wall insulated stainless steel bottle that keeps drinks cold for 24 hours or hot for 12 hours."
    },

    // ======= BEAUTY (4 products) =======
    {
        name: "Rose Gold Makeup Brush Set",
        category: "Makeup Tools",
        department: "beauty",
        price: 1299,
        originalPrice: 2199,
        emoji: "💄",
        badge: "sale",
        rating: 4.6,
        reviews: 289,
        description: "12-piece professional makeup brush set with soft synthetic bristles and a luxury rose gold PU leather case."
    },
    {
        name: "Vitamin C Face Serum (30ml)",
        category: "Skincare",
        department: "beauty",
        price: 799,
        originalPrice: null,
        emoji: "✨",
        badge: "bestseller",
        rating: 4.8,
        reviews: 534,
        description: "Brightening Vitamin C serum with hyaluronic acid. Reduces dark spots, boosts glow, and hydrates deeply."
    },
    {
        name: "Jasmine Hair Oil (200ml)",
        category: "Hair Care",
        department: "beauty",
        price: 299,
        originalPrice: 499,
        emoji: "🌸",
        badge: "sale",
        rating: 4.5,
        reviews: 423,
        description: "Pure jasmine-infused coconut hair oil. Nourishes the scalp, reduces hair fall, and adds a beautiful fragrance."
    },
    {
        name: "Aloe Vera Gel (300ml)",
        category: "Body Care",
        department: "beauty",
        price: 249,
        originalPrice: null,
        emoji: "🌿",
        badge: "new",
        rating: 4.4,
        reviews: 678,
        description: "99% pure aloe vera gel for skin and hair. Soothes sunburn, moisturises skin, and works as a natural hair gel."
    }
];


// ---- STATE VARIABLES ----
// These keep track of the cart and current filters

var cartCount = 0;
var cartItems = [];
var cartTotal = 0;
var currentDepartment = "all";
var currentModalIndex = -1;


// ---- HELPER FUNCTIONS ----

// Create star icons based on rating number
function createStars(rating) {
    var starsHTML = "";
    var fullStars = Math.floor(rating);
    var i;

    // Add filled stars
    for (i = 0; i < fullStars; i = i + 1) {
        starsHTML = starsHTML + '<span class="star-filled">★</span>';
    }

    // Add empty stars to make up 5 total
    for (i = fullStars; i < 5; i = i + 1) {
        starsHTML = starsHTML + '<span class="star-empty">★</span>';
    }

    return starsHTML;
}


// Format price in Indian Rupees
function formatPrice(amount) {
    return "₹" + amount.toLocaleString("en-IN");
}


// Create the HTML for one product card
function createProductCard(product, index) {
    // Figure out the badge class and text
    var badgeClass = "";
    var badgeText = "";

    if (product.badge === "new") {
        badgeClass = "badge-new";
        badgeText = "New";
    } else if (product.badge === "sale") {
        badgeClass = "badge-sale";
        badgeText = "Sale";
    } else if (product.badge === "trending") {
        badgeClass = "badge-trending";
        badgeText = "Trending";
    } else if (product.badge === "bestseller") {
        badgeClass = "badge-bestseller";
        badgeText = "Bestseller";
    }

    // Build the price display
    var priceHTML = formatPrice(product.price);
    if (product.originalPrice !== null) {
        priceHTML = priceHTML + '<span class="original-price">' + formatPrice(product.originalPrice) + '</span>';
    }

    // Build the full card HTML string
    var card = "";
    card = card + '<div class="product-card" data-index="' + index + '">';
    card = card + '  <div class="card-image-area">';
    card = card + '    <div class="card-image" style="display:flex;align-items:center;justify-content:center;font-size:80px;background:rgba(100,60,255,0.05);">' + product.emoji + '</div>';
    card = card + '    <span class="card-badge ' + badgeClass + '">' + badgeText + '</span>';
    card = card + '    <button class="card-wishlist" onclick="toggleWishlist(event, this)" title="Add to wishlist">♡</button>';
    card = card + '    <div class="card-overlay">';
    card = card + '      <button class="quick-view-btn" onclick="openQuickView(event, ' + index + ')">Quick View</button>';
    card = card + '    </div>';
    card = card + '  </div>';
    card = card + '  <div class="card-body">';
    card = card + '    <p class="card-category">' + product.category + '</p>';
    card = card + '    <h3 class="card-title">' + product.name + '</h3>';
    card = card + '    <div class="card-rating">';
    card = card + '      <div class="stars">' + createStars(product.rating) + '</div>';
    card = card + '      <span class="rating-count">(' + product.reviews + ')</span>';
    card = card + '    </div>';
    card = card + '    <div class="card-price-row">';
    card = card + '      <span class="card-price">' + priceHTML + '</span>';
    card = card + '      <button class="add-to-cart-btn" onclick="addToCart(event, this, ' + index + ')" title="Add to cart">+</button>';
    card = card + '    </div>';
    card = card + '  </div>';
    card = card + '</div>';

    return card;
}


// ---- RENDER / DISPLAY FUNCTIONS ----

// Show products based on the selected department
function showProducts(department) {
    var grid = document.querySelector(".product-grid");
    var allHTML = "";
    var i;

    for (i = 0; i < products.length; i = i + 1) {
        if (department === "all" || products[i].department === department) {
            allHTML = allHTML + createProductCard(products[i], i);
        }
    }

    grid.innerHTML = allHTML;
}


// Update the cart panel display
function updateCartDisplay() {
    var body = document.querySelector(".cart-panel-body");
    var totalSpan = document.querySelector(".cart-total-amount");
    var countSpan = document.querySelector(".cart-count");

    // Update cart count badge
    countSpan.textContent = cartItems.length;

    // Calculate total
    cartTotal = 0;
    var i;
    for (i = 0; i < cartItems.length; i = i + 1) {
        cartTotal = cartTotal + cartItems[i].price;
    }
    totalSpan.textContent = formatPrice(cartTotal);

    // If cart is empty
    if (cartItems.length === 0) {
        body.innerHTML = '<p class="cart-empty-msg">Your cart is empty. Start shopping!</p>';
        return;
    }

    // Build cart items HTML
    var html = "";
    for (i = 0; i < cartItems.length; i = i + 1) {
        html = html + '<div class="cart-item">';
        html = html + '  <div class="cart-item-emoji">' + cartItems[i].emoji + '</div>';
        html = html + '  <div class="cart-item-info">';
        html = html + '    <p class="cart-item-name">' + cartItems[i].name + '</p>';
        html = html + '    <p class="cart-item-price">' + formatPrice(cartItems[i].price) + '</p>';
        html = html + '  </div>';
        html = html + '  <button class="cart-item-remove" onclick="removeFromCart(' + i + ')">✕</button>';
        html = html + '</div>';
    }
    body.innerHTML = html;
}


// ---- EVENT HANDLERS ----

// Switch department tab
function switchTab(button, department) {
    // Remove active from all tabs
    var allTabs = document.querySelectorAll(".tab-btn");
    var i;
    for (i = 0; i < allTabs.length; i = i + 1) {
        allTabs[i].classList.remove("active");
    }

    // Add active to clicked tab
    button.classList.add("active");

    // Save and show
    currentDepartment = department;
    showProducts(department);

    // Close dropdown if open
    var dropdown = document.querySelector(".dropdown-menu");
    if (dropdown) {
        dropdown.classList.remove("show");
    }

    // Scroll to products
    var productsArea = document.querySelector(".products-section");
    productsArea.scrollIntoView({ behavior: "smooth" });
}


// Toggle wishlist heart
function toggleWishlist(event, heartButton) {
    event.stopPropagation();

    if (heartButton.classList.contains("liked")) {
        heartButton.classList.remove("liked");
        heartButton.textContent = "♡";
        showToast("💔", "Removed from wishlist");
    } else {
        heartButton.classList.add("liked");
        heartButton.textContent = "♥";
        showToast("❤️", "Added to wishlist!");
    }
}


// Add item to cart
function addToCart(event, button, index) {
    event.stopPropagation();

    // Add to cart array
    var product = products[index];
    cartItems.push({
        name: product.name,
        price: product.price,
        emoji: product.emoji
    });

    // Change button appearance
    button.classList.add("added");
    button.textContent = "✓";

    // Update display
    updateCartDisplay();
    showToast("🛒", product.name + " added to cart!");

    // Reset button after 2 seconds
    setTimeout(function () {
        button.classList.remove("added");
        button.textContent = "+";
    }, 2000);
}


// Remove item from cart
function removeFromCart(index) {
    var removedName = cartItems[index].name;
    cartItems.splice(index, 1);
    updateCartDisplay();
    showToast("🗑️", removedName + " removed");
}


// Open quick view modal
function openQuickView(event, index) {
    event.stopPropagation();

    currentModalIndex = index;
    var product = products[index];
    var backdrop = document.querySelector(".modal-backdrop");

    // Fill modal content
    document.querySelector(".modal-image").style.display = "none";

    var imageArea = document.querySelector(".modal-image-area");
    imageArea.style.display = "flex";
    imageArea.style.alignItems = "center";
    imageArea.style.justifyContent = "center";
    imageArea.style.fontSize = "100px";
    imageArea.style.background = "rgba(100,60,255,0.05)";
    imageArea.textContent = product.emoji;

    document.querySelector(".modal-category").textContent = product.category;
    document.querySelector(".modal-title").textContent = product.name;
    document.querySelector(".modal-description").textContent = product.description;
    document.querySelector(".modal-price").textContent = formatPrice(product.price);

    // Rating row
    var ratingRow = document.querySelector(".modal-rating-row");
    ratingRow.innerHTML = '<div class="stars">' + createStars(product.rating) + '</div>' +
        '<span class="rating-count">' + product.rating + ' (' + product.reviews + ' reviews)</span>';

    // Show modal
    backdrop.classList.add("show");
}


// Close modal
function closeModal() {
    var backdrop = document.querySelector(".modal-backdrop");
    backdrop.classList.remove("show");
}


// Add to cart from modal
function modalAddToCart() {
    if (currentModalIndex >= 0) {
        var product = products[currentModalIndex];
        cartItems.push({
            name: product.name,
            price: product.price,
            emoji: product.emoji
        });
        updateCartDisplay();
        showToast("🛒", product.name + " added to cart!");
        closeModal();
    }
}


// Add to wishlist from modal
function modalAddWishlist() {
    showToast("❤️", "Added to wishlist!");
}


// Close modal when clicking backdrop
function handleBackdropClick(event) {
    if (event.target === document.querySelector(".modal-backdrop")) {
        closeModal();
    }
}


// Toggle cart side panel
function toggleCartPanel() {
    var panel = document.querySelector(".cart-panel");
    var overlay = document.querySelector(".cart-overlay");

    if (panel.classList.contains("open")) {
        panel.classList.remove("open");
        overlay.classList.remove("show");
    } else {
        panel.classList.add("open");
        overlay.classList.add("show");
    }
}


// Show toast notification
function showToast(icon, message) {
    var toast = document.querySelector(".toast");
    var toastIcon = document.querySelector(".toast-icon");
    var toastMsg = document.querySelector(".toast-message");

    toastIcon.textContent = icon;
    toastMsg.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}


// Toggle mobile menu
function toggleMenu() {
    var links = document.querySelector(".nav-links");
    links.classList.toggle("open");
}


// Toggle dropdown menu
function toggleDropdown(link) {
    var dropdown = link.parentElement.querySelector(".dropdown-menu");
    dropdown.classList.toggle("show");
}


// Search products by name
function searchProducts(text) {
    var grid = document.querySelector(".product-grid");
    var searchText = text.toLowerCase();
    var allHTML = "";
    var i;

    if (searchText === "") {
        showProducts(currentDepartment);
        return;
    }

    for (i = 0; i < products.length; i = i + 1) {
        var nameMatch = products[i].name.toLowerCase().indexOf(searchText) >= 0;
        var catMatch = products[i].category.toLowerCase().indexOf(searchText) >= 0;

        if (nameMatch || catMatch) {
            allHTML = allHTML + createProductCard(products[i], i);
        }
    }

    if (allHTML === "") {
        grid.innerHTML = '<p style="text-align:center;color:rgba(230,230,240,0.4);padding:60px 0;font-size:16px;">No products found for "' + text + '"</p>';
    } else {
        grid.innerHTML = allHTML;
    }
}


// Scroll to products section
function scrollToProducts() {
    var productsArea = document.querySelector(".products-section");
    productsArea.scrollIntoView({ behavior: "smooth" });
}


// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// Show/hide back-to-top button based on scroll
window.onscroll = function () {
    var btn = document.querySelector(".back-to-top");
    if (window.scrollY > 400) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
};


// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    var dropdown = document.querySelector(".dropdown-menu");
    var navDropdown = document.querySelector(".nav-dropdown");

    if (dropdown && navDropdown) {
        if (!navDropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    }
});


// ---- INITIALIZE ----
// When the page loads, show all products
window.onload = function () {
    showProducts("all");
};
