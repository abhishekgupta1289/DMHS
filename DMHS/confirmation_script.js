document.addEventListener('DOMContentLoaded', function () {
    var verifyBtn = document.getElementById('verifyBtn');
    var loadingContainer = document.getElementById('loadingContainer');
    var tickSymbol = document.getElementById('tickSymbol');

    verifyBtn.addEventListener('click', function () {
        showVerificationInProgress();

        setTimeout(function () {
            hideVerificationInProgress();
            showTickSymbol();
        }, 5000); // Simulating a 5-second verification delay
    });

    function showVerificationInProgress() {
        verifyBtn.style.display = 'none';
        loadingContainer.style.display = 'block';
        tickSymbol.style.display = 'none';
    }

    function hideVerificationInProgress() {
        loadingContainer.style.display = 'none';
    }

    function showTickSymbol() {
        tickSymbol.style.display = 'block';
    }
});
