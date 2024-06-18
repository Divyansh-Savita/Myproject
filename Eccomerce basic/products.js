document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            alert(`${productName} added to cart!`);
        });
    });

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            alert(`Viewing details for ${productName}`);
            // You can add more functionality here, such as opening a modal with product details.
        });
    });
});
