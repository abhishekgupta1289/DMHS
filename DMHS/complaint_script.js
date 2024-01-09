document.addEventListener('DOMContentLoaded', function() {
    const photoInput = document.getElementById('photo');
    const photoPreview = document.getElementById('photoPreview');
    const locationBtn = document.getElementById('liveLocationBtn');
    const descriptionInput = document.getElementById('description');
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');

    // Handle photo selection
    photoInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                photoPreview.innerHTML = '';
                photoPreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle live location retrieval
    locationBtn.addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    latitudeInput.value = latitude;
                    longitudeInput.value = longitude;
                },
                function(error) {
                    console.error('Error getting location:', error);
                    alert('Error getting location. Please allow location access.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });

    // Handle form submission
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function() {
        const description = descriptionInput.value;
        const latitude = latitudeInput.value;
        const longitude = longitudeInput.value;

        // Simulating form submission
        console.log('Description:', description);
        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);

        // Show confirmation message
        const confirmationMessage = document.createElement('div');
        confirmationMessage.textContent = 'Your complaint has been submitted!';
        confirmationMessage.style.color = 'green';
        document.body.appendChild(confirmationMessage);

        // Redirecting to verification page
        window.location.href = 'verfication.html';
    });

    // Additional functionality
    // Add your additional functionality here...
    // For example:
    // Some additional code you want to run when the DOM is loaded or a button is clicked.
    // Just place your additional code here.

});
