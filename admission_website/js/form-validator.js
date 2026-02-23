// Initialize EmailJS with the Public Key
emailjs.init("4WM-giqcjhNoQDgRy"); // Replace with your actual Public Key

// Add an event listener to the button click
document
  .getElementById("sendMessageBtn")
  .addEventListener("click", function () {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const subjectField = document.getElementById("subject");
    const messageField = document.getElementById("message");
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const subject = subjectField.value.trim();
    const message = messageField.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate inputs
    if (
      !name ||
      !emailRegex.test(email) ||
      !subject ||
      !message.replace(/\s/g, "").length
    ) {
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

        // Clear form fields manually
        nameField.value = "";
        emailField.value = "";
        subjectField.value = "";
        messageField.value = "";
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error("ERROR:", error);
      });
  });
