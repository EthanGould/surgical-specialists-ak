// Document content is loaded, lets do some JS.
document.addEventListener("DOMContentLoaded", function(event) {

    var module = {};

    module.animateNav = function() {
        var nav = document.querySelector('.nav');

        if (this.scrollY > 50) {
            nav.classList.add('nav--slim');
        } else if (this.scrollY > 0) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.className = 'nav';
        }

        if (module.scrollY > this.scrollY) {
            nav.classList.remove('nav--slim');
        }

        module.scrollY = this.scrollY;

    };

    module.init = function(argument) {
        module.scrollY = 0;
        window.addEventListener('scroll', module.animateNav);
    };

    module.init();

});

// Smooth Scroll
$(document).on('click', 'a', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: -70 + $($.attr(this, 'href')).offset().top
    }, 500);
});
