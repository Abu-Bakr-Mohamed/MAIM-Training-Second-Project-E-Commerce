const productDetail = document.getElementById("productDetail");
const product = JSON.parse(localStorage.getItem("productDetail"));

if (!product) {
   productDetail.innerHTML =
      "<p>Product not found. Please go back to the shop page.</p>";
} else {
   displayProductDetail(product);
}

function displayProductDetail(product) {
   // Clear any existing content
   productDetail.innerHTML = "";

   const productElement = document.createElement("div");
   productElement.classList.add("product-detail");
   productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h1>${product.title}</h1>
        <p>$${product.price}</p>
        <p>${product.description}</p>
        ${
           product.sizes
              ? `
            <label for="size">Size:</label>
            <select id="size">
                ${product.sizes
                   .map((size) => `<option value="${size}">${size}</option>`)
                   .join("")}
            </select>
        `
              : ""
        }
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" value="1" min="1">
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
   productDetail.appendChild(productElement);
}

function addToCart(productId) {
   const quantity = parseInt(document.getElementById("quantity").value);
   const product = JSON.parse(localStorage.getItem("productDetail"));
   let cart = JSON.parse(localStorage.getItem("cart")) || [];

   const existingProductIndex = cart.findIndex((item) => item.id === productId);
   if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
   } else {
      cart.push({ ...product, quantity });
   }

   localStorage.setItem("cart", JSON.stringify(cart));
   alert(`Added ${quantity} of ${product.title} to cart.`);
   window.location.href = "cart.html"; // Redirect to cart page
}

window.onload = () => {
   console.log("Loaded product from localStorage:", product); // Debugging line
   displayProductDetail(product);
};
