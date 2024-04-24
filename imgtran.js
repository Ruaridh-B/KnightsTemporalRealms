window.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.image-container img');

    images.forEach(function(img) {
        img.addEventListener('load', function() {
            img.style.opacity = 1;
        });
    });
});
