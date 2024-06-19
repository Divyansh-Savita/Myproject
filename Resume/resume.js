document.addEventListener('DOMContentLoaded', () => {
    const productListing = document.querySelector('.product-listing');

    const handleScroll = () => {
        const productListingPosition = productListing.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (productListingPosition < screenPosition) {
            productListing.classList.add('visible');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Redirect to product details page
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            window.location.href = url;
        });
    });
});
