// CATEGORY FILTER
const filterBtns = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.dataset.category;
    products.forEach(p => {
      if (category === "all" || p.dataset.category === category) {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }
    });
  });
});

// CART SYSTEM
const cartBtn = document.getElementById("cartBtn");
const cartPopup = document.getElementById("cartPopup");
const closeCart = document.getElementById("closeCart");
const addCartButtons = document.querySelectorAll(".add-cart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");

let cart = [];

addCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const name = product.querySelector("h3").textContent;
    const price = product.querySelector("p").textContent;

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}`;
    cartItems.appendChild(li);
  });
  cartCount.textContent = cart.length;
}

// Toggle cart popup
cartBtn.addEventListener("click", () => {
  cartPopup.style.display = "block";
});

closeCart.addEventListener("click", () => {
  cartPopup.style.display = "none";
});
