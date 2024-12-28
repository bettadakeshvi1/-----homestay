const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal(".choose__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".choose__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".explore__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".explore__grid div", {
  duration: 1000,
  delay: 2500,
  interval: 500,
});
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1, // Default for small screens
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2, 
    },
    768: {
      slidesPerView: 2, 
    },
    925: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 4, // Four cards on large screens (laptops)
    },
  },
  grabCursor: true, // Cursor changes to grab
  autoplay: {
    delay: 2000, // Automatically change slides
    disableOnInteraction: false, // Prevent autoplay from stopping when interacting
  },
  effect: "slide", // Slide effect for transitions 
});


const next = document.getElementById("next");
const prev = document.getElementById("prev");
const clientCards = Array.from(document.querySelectorAll(".client__card"));

next.addEventListener("click", (e) => {
  for (let index = 0; index < clientCards.length; index++) {
    if (clientCards[index].classList.contains("active")) {
      const nextIndex = (index + 1) % clientCards.length;
      clientCards[index].classList.remove("active");
      clientCards[nextIndex].classList.add("active");
      break;
    }
  }
});

prev.addEventListener("click", (e) => {
  for (let index = 0; index < clientCards.length; index++) {
    if (clientCards[index].classList.contains("active")) {
      const prevIndex = (index ? index : clientCards.length) - 1;
      clientCards[index].classList.remove("active");
      clientCards[prevIndex].classList.add("active");
      break;
    }
  }
});
// Initialize Swiper for Activities
const activitiesSwiper = new Swiper('.activities-slider', {
  loop: true, // Loop through slides
  autoplay: {
    delay: 1500, // Auto-slide every 3 seconds
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Allow users to click pagination dots
  },
  effect: 'fade', // Smooth fade effect
  fadeEffect: {
    crossFade: true,
  },
});
//THE BOOKING EMAILBOX
function openModal(packageName) {
  document.getElementById("selectedPackage").value = packageName;
  document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

document.getElementById("emailForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Booking request submitted!");
  closeModal();
});
//THE BLOCK OF THE PACKAGES
// Get modal, close button, and any trigger button
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const triggerBtn = document.querySelector('.trigger-btn');

// Open modal
triggerBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; // Change to 'flex' to enable centering
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});



