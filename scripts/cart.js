let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");

function displayCart() {
   cartItems.innerHTML = "";
   let totalPrice = 0;

   cart.forEach((item, index) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.innerHTML = `
            <div>
            <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <h2>${item.title}</h2>
                <p>$${item.price}</p>
            </div>
            <div class="cart-item-actions">
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                <button class="remove" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
      cartItems.appendChild(cartItemElement);

      totalPrice += item.price * item.quantity;
   });

   totalPriceElement.textContent = totalPrice.toFixed(2);
}

function updateQuantity(index, quantity) {
   cart[index].quantity = parseInt(quantity);
   localStorage.setItem("cart", JSON.stringify(cart));
   displayCart();
}

function removeItem(index) {
   cart.splice(index, 1);
   localStorage.setItem("cart", JSON.stringify(cart));
   displayCart();
}

document.getElementById("checkoutButton").addEventListener("click", () => {
   alert("Proceeding to checkout...");
});

window.onload = displayCart;
