//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a, a.autoscroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 120
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function () {
    $(".navbar li a").click(function(event) {

        if ($(".navbar-toggle").is(":visible")) {
            $(".navbar-toggle").click();
        }

    });
});