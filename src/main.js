
// SWIPER SLIDER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


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

const prev1 = document.getElementById('prev');
const next1 = document.getElementById('next');
const image = document.querySelector('.images');
const items = document.querySelectorAll('.images .item');
const contents = document.querySelectorAll('.content .item');

let rotate = 0;
let active = 0;
const countItem = items.length;
const rotateAdd = 360 / countItem;

function nextSlider() {
    active = (active + 1) % countItem;
    rotate += rotateAdd;
    show();
}

function prevSlider() {
    active = (active - 1 + countItem) % countItem;
    rotate -= rotateAdd;
    show();
}

function show() {
    if (!image) return;
    image.style.setProperty("--rotate", `${rotate}deg`);

    contents.forEach((content, index) => {
        content.classList.toggle('active', index === active);
    });
}

// Button click events
next1?.addEventListener("click", nextSlider);
prev1?.addEventListener("click", prevSlider);

// Auto slide every 3 seconds
const autoNext = setInterval(nextSlider, 3000);
