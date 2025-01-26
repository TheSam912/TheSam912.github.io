// Initialize EmailJS
emailjs.init("4WM-giqcjhNoQDgRy"); // Replace with your Public Key

// Add an event listener to the button click
document
  .getElementById("sendMessageBtn")
  .addEventListener("click", function () {
    // Get form input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation

    // Validate name
    if (!name) {
      alert("Please enter your name.");
      return;
    }

    // Validate email
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate subject
    if (!subject) {
      alert("Please enter a subject.");
      return;
    }

    // Validate message
    if (!message || message.replace(/\s/g, "").length === 0) {
      alert("Please enter your message.");
      return;
    }

    // If all validations pass, send the email
    sendEmail(name, email, subject, message);
  });

// Function to send the email using EmailJS
function sendEmail(name, email, subject, message) {
  emailjs
    .send(
      "service_f4lhx8j", // Replace with your Service ID
      "template_lc88naf", // Replace with your Template ID
      {
        name: name, // Matches {{name}} in your template
        email: email, // Matches {{email}} in your template
        subject: subject, // Matches {{subject}} in your template
        message: message, // Matches {{message}} in your template
      },
      "4WM-giqcjhNoQDgRy" // Public Key for extra security
    )
    .then(function (response) {
      alert("Message sent successfully!");
      console.log("SUCCESS:", response);
    })
    .catch(function (error) {
      console.error("ERROR:", error); // Log the full error for debugging
      alert("Failed to send message. Please try again.");
    });
}
