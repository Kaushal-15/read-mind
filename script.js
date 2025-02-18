window.addEventListener('scroll', function() {
    const stickyNav = document.getElementById('sticky-nav');
    const aboutSection = document.getElementById('about-us');
    const aboutSectionTop = aboutSection.offsetTop;

    if (window.scrollY >= aboutSectionTop) {
        stickyNav.style.display = 'flex'; // Show the sticky nav
    } else {
        stickyNav.style.display = 'none'; // Hide the sticky nav
    }
});