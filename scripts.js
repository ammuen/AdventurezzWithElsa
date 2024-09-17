// Function to show and hide sections
function showSection(id) {
    document.querySelectorAll('.section').forEach(function(section) {
        section.style.display = section.id === id ? 'block' : 'none';
    });
}

// Function to toggle the booking popup
function togglePopup() {
    var popup = document.getElementById('signup-popup');
    popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
}

// Function to handle form submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    alert('Your booking has been submitted!'); // Simple alert for demonstration
    togglePopup(); // Close the popup after submission
});
