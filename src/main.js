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

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images');
let items = document.querySelectorAll('.images .item');
let contents = document.querySelectorAll('.content .item');

let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;

function nextSlider() {
    active = active + 1 > countItem - 1 ? 0 : active + 1;
    rotate = rotate + rotateAdd;
    show();
}
function prevSlider() {
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    rotate = rotate - rotateAdd;
    show();

}
function show() {
    image.style.setProperty("--rotate", rotate + 'deg');
    image.style.setProperty("--rotate", rotate + 'deg');
    contents.forEach((content, key) => {
        if (key == active) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    })
}
next.onclick = nextSlider;
prev.onclick = prevSlider;
const autoNext = setInterval(nextSlider, 3000);
