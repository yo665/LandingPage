document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Example: Send form data to server (modify as needed)
    console.log("Request Submitted:", { name, email, phone, message });

    // Close modal after submission
    const modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
    modal.hide();

    // Clear form
    document.getElementById("quoteForm").reset();

    // Show success message (optional)
    alert("Your request has been submitted successfully!");
});