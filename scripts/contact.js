document
   .getElementById("contactForm")
   .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      // Form validation
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      // Maybe later We can find another good use for the user's message
      const message = document.getElementById("message").value;

      if (name && email && message) {
         // Hide the form and show the confirmation message
         document.getElementById("contactForm").style.display = "none";
         document.getElementById("confirmationMessage").style.display = "block";
      } else {
         alert("Please fill out all fields.");
      }
   });
