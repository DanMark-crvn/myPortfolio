// Get the necessary elements
const menuIcon = document.getElementById('bars');
const ulElement = document.querySelector('ul');

// Add event listener to the menu icon
menuIcon.addEventListener('click', () => {
    ulElement.classList.toggle('show');
});