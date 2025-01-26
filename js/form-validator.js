// Initialize EmailJS with the Public Key
emailjs.init("4WM-giqcjhNoQDgRy"); // Replace with your actual Public Key

// Add an event listener to the button click
document
  .getElementById("sendMessageBtn")
  .addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate inputs
    if (!name || !emailRegex.test(email) || !subject || !message.replace(/\s/g, '').length) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_f4lhx8j", // Replace with your Service ID
        "template_lc88naf", // Replace with your Template ID
        { name, email, subject, message }, // Data passed to the template
        "4WM-giqcjhNoQDgRy" // Replace with your Public Key
      )
      .then((response) => {
        alert("Message sent successfully!");
        console.log("SUCCESS:", response);
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error("ERROR:", error);
      });
  });