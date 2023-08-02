const navbar = document.querySelector("#side-nav");
const toggle = document.querySelector(".side-nav-toggle");

toggle.addEventListener('click', () => {
    const visibility = navbar.getAttribute('data-visible');
    if(visibility === "false") {
        navbar.setAttribute('data-visible', true);
        toggle.setAttribute('aria-expanded', true);
    } else {
        navbar.setAttribute('data-visible', false);
        toggle.setAttribute('aria-expanded', false);
    }
})