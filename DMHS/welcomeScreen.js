document.addEventListener("DOMContentLoaded", function() {
    const fileComplaintBtn = document.getElementById("fileComplaintBtn");

    fileComplaintBtn.addEventListener("click", function() {
        // Redirect to another HTML page
        window.location.href = "complaint.html"; // Replace "complaint.html" with your desired HTML page
    });
});
