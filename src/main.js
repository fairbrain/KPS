


const slides = document.querySelectorAll(".hero-container .slide");
const nextBtn = document.querySelector(".next-slide");
const prevBtn = document.querySelector(".prev-slide");

let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
let autoplayInterval;

function showSlide(index) {
    slides?.forEach(slide => slide.classList.remove("active"));
    slides[index]?.classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 2000); // every 3 seconds
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

startAutoplay();

// HEADER TOGGLE

const navbar = document.querySelector(".main-menu nav");
const navBtn = document.querySelector(".nav-btn");
const navClose = document.querySelector(".nav-close");

navBtn?.addEventListener("click", () => {
    navbar?.classList.add("active");
})
navClose?.addEventListener("click", () => {
    navbar?.classList.remove("active");
})

// HERO SLIDER

// GALLERY SWIPER
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000, // 3 seconds delay
        disableOnInteraction: false, // autoplay won't stop after user interaction
    },
});
// GALLERY SWIPER

// FANCYBOX

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

