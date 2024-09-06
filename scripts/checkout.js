document
   .getElementById("checkoutForm")
   .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      // Form validation
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const address = document.getElementById("address").value;
      const paymentMethod = document.getElementById("paymentMethod").value;

      if (name && email && address && paymentMethod) {
         // Clear the cart after the user checks out
         localStorage.removeItem("cart");

         // Hide the form and show the confirmation message
         document.getElementById("checkoutForm").style.display = "none";
         document.getElementById("confirmationMessage").style.display = "block";
      } else {
         alert("Please fill out all fields.");
      }
   });
