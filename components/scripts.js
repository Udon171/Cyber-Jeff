const carouselImages = document.querySelector('.carousel-images');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

function updateCarousel() {
    const itemWidth = carouselImages.querySelector('.carousel-item').clientWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    const totalItems = carouselImages.querySelectorAll('.carousel-item').length;
    const visibleItems = 3; // Number of items visible at a time
    currentIndex = (currentIndex < totalItems - visibleItems) ? currentIndex + 1 : totalItems - visibleItems;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel); // Adjust on window resize