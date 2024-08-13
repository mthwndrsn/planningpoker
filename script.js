const cards = document.querySelectorAll('.card');
const selectedValueElement = document.getElementById('selectedValue');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const value = card.getAttribute('data-value');
        selectedValueElement.textContent = value;
    });
});
