document.addEventListener("DOMContentLoaded", function() {
    checkNavbarToggle();
});

/**
 * Checks if the navbar is clicked and show or hide it
 */
function checkNavbarToggle() {
    var navbarToggleBtn = document.getElementsByClassName('navbar-toggle')[0];

    navbarToggleBtn.addEventListener("click", function() {
        var navbarNav = document.getElementsByClassName('navbar-nav')[0];
        var isVisible = navbarNav.classList.contains('navbar-toggle-visible');

        if (!isVisible) {
            navbarNav.classList.add('navbar-toggle-visible');
        } else {
            navbarNav.classList.remove('navbar-toggle-visible');
        }

    });
}