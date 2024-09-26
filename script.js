function toggleMenu() {
    const hamburger = document.querySelector('.icon-hamburger');
    const menu = document.querySelector('.menu-links');

    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
}

document.addEventListener('click', (event) => {
    const menu = document.querySelector('.menu-links');
    const hamburger = document.querySelector('.icon-hamburger');
    
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
