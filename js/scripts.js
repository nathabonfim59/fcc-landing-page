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
        var navbarNav = document.getElementsByClassName('navbar-nav')[0];
        var isVisible = navbarNav.classList.contains('navbar-toggle-visible');

        if (!isVisible) {
            navbarNav.classList.add('navbar-toggle-visible');
        } else {
            navbarNav.classList.remove('navbar-toggle-visible');
        }

    });
}

/**
 * Verifies if navbar is clicked and add the 'active' CSS class to it
 */
function navbarItemClicked() {
    var navbarNav = document.getElementsByClassName('navbar-nav')[0];
    navbarNav.addEventListener("click", function(event) {
        var lastActive = document.getElementsByClassName('active')[0];
        var targetElement;
        
        var anchorClicked = event.path.length == 8;
        var listItemClicked = event.path.length == 7;

        if (anchorClicked) {
            targetElement = event.path[1];
        } else if (listItemClicked) {
            targetElement = event.path[0];
        }

        lastActive.classList.remove('active');
        targetElement.classList.add('active');
    });
}