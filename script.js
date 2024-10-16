function toggleMenu() {
    const hamburger = document.querySelector('.navbar__icon-hamburger');
    const menu = document.querySelector('.navbar__menu-links');

    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
}

document.addEventListener('click', (event) => {
    const menu = document.querySelector('.navbar__menu-links');
    const hamburger = document.querySelector('.navbar__icon-hamburger');
    
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

const colors = [
    'rgba(155, 246, 255, 0.5)', // Light Blue
    'rgba(202, 255, 191, 0.5)', // Light Green
    'rgba(253, 255, 182, 0.5)', // Light Yellow
    'rgba(255, 214, 165, 0.5)', // Light Orange
    'rgba(255, 173, 173, 0.5)', // Light Red
    'rgba(255, 255, 255, 0.5)'  // Light White (transparent)
];

let currentIndex = 0;

document.getElementById('color-container').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % colors.length;
    document.getElementById('color-container').style.backgroundColor = colors[currentIndex];
});

document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 40,
        noSwiping: true, 
        noSwipingClass: 'swiper-no-swiping',
        // centeredSlides: true,
        autoHeight: true,

        // Pagination bullets
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.works__carousel-wrapper', {
        loop: true,
        spaceBetween: 40,
        noSwiping: true, 
        noSwipingClass: 'swiper-no-swiping',

        // Pagination bullets
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3,
            },
        },
    });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add('show');
    }, 30);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

window.onclick = function (event) {
    const openModals = document.querySelectorAll('.modal');
    openModals.forEach((modal) => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
};

function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Smooth scroll duration in milliseconds
    let start = null;

    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
