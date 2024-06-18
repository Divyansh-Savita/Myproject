document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            displayError("Please fill in all fields.");
            return;
        }

        if (!isValidEmail(email)) {
            displayError("Please enter a valid email address.");
            return;
        }

        // Simulate successful form submission (replace with actual submission logic)
        formMessage.textContent = "Your message has been sent!";
        formMessage.classList.remove("hidden");

        // Automatically hide success message after 5 seconds
        setTimeout(function() {
            formMessage.classList.add("hidden");
        }, 5000);

        // Clear the form after submission
        contactForm.reset();
    });

    function displayError(message) {
        const errorElement = document.createElement("p");
        errorElement.textContent = message;
        errorElement.classList.add("error");
        
        const existingError = contactForm.querySelector(".error");
        if (existingError) {
            contactForm.removeChild(existingError);
        }

        contactForm.appendChild(errorElement);

        // Automatically hide error message after 5 seconds
        setTimeout(function() {
            errorElement.remove();
        }, 5000);
    }

    function isValidEmail(email) {
        // Simple email validation regex (change as needed)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
