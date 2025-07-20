const heroVideoSources = [
    "./images/video/maida.gif",
    "./images/video/atta.gif",
    "./images/video/suji.gif",
    "./images/video/suji.gif",
    "./images/video/suji.gif",
    "./images/video/suji.gif",
    "./images/video/maida.gif",
    "./images/video/atta.gif",
    "./images/video/rice.gif",
    "./images/video/rice 2.gif",
];

const h3Array = [
    "<h3>MAIDA <br><span>1Kg</span></h3>",
    "<h3>WHOLE WHEAT <br> CHAKKI ATTA<br><span>1Kg</span></h3>",
    "<h3>Premium Sooji <br><span>200g</span></h3>",
    "<h3>Sooji <br> <span>150g</span></h3>",
    "<h3>Premium Sooji <br><span>500g</span></h3>",
    "<h3>Sooji <br><span>500g</span></h3>",
    "<h3>MAIDA <br><span>500g</span></h3>",
    "<h3>WHOLE WHEAT CHAKKI ATTA <br><span>5Kg</span></h3>",
    "<h3>BASMATI RICE <br><span>5Kg</span></h3>",
    "<h3>MINIKET RICE <br><span>5Kg</span></h3>",
]

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.classList.add("loader-hidden");
    }, 1000);
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

// GALLERY SWIPER
var swiper = new Swiper(".gallery-slider .mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000, // 3 seconds delay
        disableOnInteraction: false, // autoplay won't stop after user interaction
    },
});
// GALLERY SWIPER

// PRODUCT  SWIPER

var swiper = new Swiper(".product-carousel .mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 3000, // 3 seconds delay
        disableOnInteraction: true, // autoplay won't stop after user interaction
    },
    dots: false,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
});

// PRODUCT  SWIPER

let currentRotation = 0;
const disk = document.getElementById('rotating-disk');
const productDetail = document.querySelector('.product-detail');

function rotateDisk() {
    disk.style.transform = `rotate(${currentRotation}deg)`;
    disk.style.transition = 'transform 0.5s ease';
}

function updateHeroVideo(index) {
    const heroVideo = document.getElementById("hero-video");
    if (heroVideoSources[index]) {
        heroVideo.src = heroVideoSources[index];
    }
}

function updateProductDetail(index) {
    if (h3Array[index]) {
        productDetail.innerHTML = h3Array[index];
    } else {
        productDetail.innerHTML = ""; // fallback
    }
}

swiper = new Swiper(".hero-circle .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-hero-next",
        prevEl: ".swiper-hero-prev",
    },
    on: {
        slideNextTransitionStart: function () {
            currentRotation += 90;
            rotateDisk();
            updateHeroVideo(this.realIndex);
            updateProductDetail(this.realIndex);
        },
        slidePrevTransitionStart: function () {
            currentRotation -= 90;
            rotateDisk();
            updateHeroVideo(this.realIndex);
            updateProductDetail(this.realIndex);
        },
        slideChangeTransitionStart: function () {
            // Handles changes from swiping or autoplay
            updateHeroVideo(this.realIndex);
            updateProductDetail(this.realIndex);
        }
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});


// FANCYBOX

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

