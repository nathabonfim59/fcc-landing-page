document.addEventListener("DOMContentLoaded", function() {
    navbarToggleClicked();
    navbarItemClicked();
});

/**
 * Checks if the navbar is clicked and show or hide it
 */
function navbarToggleClicked() {
    var navbarToggleBtn = document.getElementsByClassName('navbar-toggle')[0];

    navbarToggleBtn.addEventListener("click", function() {
        var navbarNav = document.getElementById('nav-bar');
        var isVisible = navbarNav.classList.contains('navbar-mobile-visible');

        if (!isVisible) {
            navbarNav.classList.add('navbar-mobile-visible');
        } else {
            navbarNav.classList.remove('navbar-mobile-visible');
        }

    });
}

/**
 * Verifies if navbar is clicked and add the 'active' CSS class to it
 */
function navbarItemClicked() {
    var navbarNav = document.getElementById('nav-bar');
    navbarNav.addEventListener("click", function(event) {
        var lastActive = document.getElementsByClassName('active')[0];
        var targetElement = event.target;
        
        // Prevents the navbar from recieving the 'active' class
        var isNavlink = event.toElement.localName == "a";

        if (isNavlink) {
            lastActive.classList.remove('active');
            targetElement.classList.add('active');
        }
    });
}