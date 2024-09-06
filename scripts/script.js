// Just centralizing the data, store it in the local storage of the browser
const products = [
   {
      id: 1,
      title: "Laptop",
      category: "electronics",
      price: 122,
      image: "./images/laptop.jpg",
      description:
         "A high-performance laptop suitable for all your computing needs.",
      sizes: ["13 inch", "15 inch", "17 inch"],
   },
   {
      id: 2,
      title: "T-Shirt",
      category: "clothing",
      price: 19,
      image: "./images/t-shirt.jpeg",
      description: "A comfortable cotton t-shirt.",
      sizes: ["S", "M", "L", "XL"],
   },
   {
      id: 3,
      title: "Book",
      category: "books",
      price: 15,
      image: "./images/book.jpeg",
      description: "An engaging novel.",
      sizes: [],
   },
];

localStorage.setItem("products", JSON.stringify(products));

// Function to display products dynamically
function displayProducts(products) {
   const showcase = document.getElementById("product-showcase");
   showcase.innerHTML = ""; // Clear existing content

   products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
           <img src="${product.image}" alt="${product.title}">
           <h3>${product.title}</h3>
           <p>$${product.price}</p>
       `;
      showcase.appendChild(productDiv);
   });
}

const storedProducts = JSON.parse(localStorage.getItem("products"));
displayProducts(storedProducts);

// Scroll to top button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
   ) {
      mybutton.style.display = "block";
   } else {
      mybutton.style.display = "none";
   }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
