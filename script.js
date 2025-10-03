document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const galleryImages = document.querySelectorAll('.gallery-img'); // Targets the correct class
    const closeBtn = document.querySelector('.close-btn');

    // 1. Open Modal Functionality
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // Show the modal
            modal.style.display = 'block';
            
            // Set the modal content (image source and caption)
            modalImage.src = this.src;
            captionText.innerHTML = this.alt; 
        });
    });

    // 2. Close Modal Functionality (using the 'x' button)
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 3. Close Modal on outside click
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 4. Close Modal using the ESC key
    document.addEventListener('keydown', (event) => {
        if (modal.style.display === 'block' && event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});
