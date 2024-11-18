// Declare variables for the toggle button and the price
let toggelbutton = document.getElementById('toggelbutton');
let basicprice = document.getElementById('basicprice');
let Professionalprice = document.getElementById('Professionalprice');
let Masterprice = document.getElementById('Masterprice');

// Function to set prices based on the toggle state
function setPrices() {
    if (toggelbutton.classList.contains('active')) {
        basicprice.innerHTML = '<span>&dollar;</span>19.99';
        Professionalprice.innerHTML = '<span>&dollar;</span>24.99';
        Masterprice.innerHTML = '<span>&dollar;</span>39.99';
    } 
    else {
        basicprice.innerHTML = '<span>&dollar;</span>199.99';
        Professionalprice.innerHTML = '<span>&dollar;</span>249.99';
        Masterprice.innerHTML = '<span>&dollar;</span>399.99';
    }
}

// Set the default state to "Monthly" when the page loads
document.addEventListener('DOMContentLoaded', () => {
    toggelbutton.classList.add('active');
    setPrices();
});

// Add click event listener to toggle prices
toggelbutton.addEventListener('click', function () {
    toggelbutton.classList.toggle('active');
    setPrices();
});
