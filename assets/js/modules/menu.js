/**
 * Toggles the mobile navigation menu.
 * Changes icon based on menu state and toggles `active` class on navigation.
 *
 * DOM Requirements:
 * - .hamburger: clickable icon element
 * - .nav-links: container of navigation links
 */
export default function initMenuToggler() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active')
            ? '<i class="fa-solid fa-xl fa-x"></i>'
            : '<i class="fa-solid fa-xl fa-bars-staggered"></i>';
    });
}
