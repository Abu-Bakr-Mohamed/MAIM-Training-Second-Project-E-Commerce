const productGrid = document.getElementById("productGrid");
const searchBar = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

// Retrieve products from local storage
const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

function displayProducts(products) {
   productGrid.innerHTML = "";
   products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
           <img src="${product.image}" alt="${product.title}">
           <h2>${product.title}</h2>
           <p>$${product.price}</p>
           <button onclick="viewProductDetail(${product.id})">View Details</button>
       `;
      productGrid.appendChild(productElement);
   });
}

function filterProducts() {
   let filteredProducts = storedProducts;

   const searchQuery = searchBar.value.toLowerCase();
   filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
   );

   const selectedCategory = categoryFilter.value;
   if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
         (product) => product.category === selectedCategory
      );
   }

   const selectedPrice = priceFilter.value;
   if (selectedPrice === "low") {
      filteredProducts.sort((a, b) => a.price - b.price);
   } else if (selectedPrice === "high") {
      filteredProducts.sort((a, b) => b.price - a.price);
   }

   displayProducts(filteredProducts);
}

function viewProductDetail(productId) {
   const product = storedProducts.find((p) => p.id === productId);
   localStorage.setItem("productDetail", JSON.stringify(product));
   window.location.href = "product.html";
}

searchBar.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

window.onload = () => displayProducts(storedProducts);
