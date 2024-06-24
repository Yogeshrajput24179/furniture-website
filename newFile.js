$(document).ready(function () {
    $('#cards').owlCarousel({
        loop: true,
        margin: 10,
        arrows: true,
        nav: true,
        navText: ["<span></span>", "b"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});
