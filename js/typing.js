
// JavaScript to trigger the typing animation after the page loads
document.addEventListener("DOMContentLoaded", function() {
var span = document.querySelector('.typing');
span.textContent = '';
var text = "Dan Mark  . . .";
var index = 0;

function type() {
    if (index < text.length) {
    span.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150); // Adjust the typing speed here (in milliseconds)
    }
}

type();
});