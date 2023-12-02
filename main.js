function contactForm() {
    var modal = document.getElementById("contactModal");
    modal.style.display = (modal.style.display === "none" || modal.style.display === "") ? "block" : "none";
}
        
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
        
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    closeModal()
}