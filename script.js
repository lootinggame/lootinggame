const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    
    productCards.forEach(card => {
        const productName = card.getAttribute('data-name').toLowerCase();
        if (productName.includes(text)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }

    });
});