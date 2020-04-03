document.addEventListener("DOMContentLoaded", function() {
    checkNavbarToggle();
});

function checkNavbarToggle() {
    var navbarToggleBtn = document.getElementsByClassName('navbar-toggle')[0];

    navbarToggleBtn.addEventListener("click", function(event) {
        var navbar = document.getElementsByClassName('navbar')[0];
        var navbarNav = document.getElementsByClassName('navbar-nav')[0];
        var isVisible = navbarNav.classList.contains('navbar-toggle-visible');

        if (!isVisible) {
            navbarNav.classList.add('navbar-toggle-visible');
        } else {
            navbarNav.classList.remove('navbar-toggle-visible');
        }

        console.log();
    });
}