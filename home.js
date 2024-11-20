// Select the header, hamburger button, and close menu button
const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu visibility when hamburger button is clicked
hamburgerBtn.addEventListener("click", () => {
  header.classList.toggle("show-mobile-menu");
});

// Close mobile menu when the close button is clicked
closeMenuBtn.addEventListener("click", () => {
  header.classList.remove("show-mobile-menu");
});

// Initialize Swiper for the featured services section
let swiperFeatured = new Swiper('.featured-swiper', {
  loop: true, // Enable infinite loop
  spaceBetween: 16, // Space between slides
  grabCursor: true, // Cursor will look like a grab when hovering over slides
  slidesPerView: 'auto', // Automatically adjust the number of slides visible
  centeredSlides: true, // Center the active slide

  navigation: {
    nextEl: '.swiper-button-next', // Next button
    prevEl: '.swiper-button-prev', // Previous button
  },

  breakpoints: {
    // For screens 1150px and wider
    1150: {
      slidesPerView: 4, // Display 4 slides at a time
      centeredSlides: false, // Disable centering of slides for larger screens
    }
  }
});
