// Get the menu button and the nav menu
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('header nav ul');

// Set a flag to track the menu's state (open or closed)
let menuOpen = false;

// Add a click event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the value of the flag
  menuOpen = !menuOpen;

  // If the menu is open, add the 'show' class to the nav menu
  // and change the text of the menu button to 'Close'
  if (menuOpen) {
    navMenu.classList.add('show');
    menuBtn.innerText = 'Close';
  } else {
    // If the menu is closed, remove the 'show' class from the nav menu
    // and change the text of the menu button to 'Menu'
    navMenu.classList.remove('show');
    menuBtn.innerText = 'Menu';
  }
});
