document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript file loaded!"); // Confirms script is loaded

    const contactBtn = document.querySelector(".contact-btn");

    if (contactBtn) {
        contactBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents default behavior that might interfere
            console.log("openMail function triggered!");
            window.location.href = "mailto:vivianrodriguez0411@gmail.com?subject=Contact%20Form%20Submission&body=Hello,%20I%20would%20like%20to%20get%20in%20touch.";
        });
    } else {
        console.log("Button not found in the DOM.");
    }
});
