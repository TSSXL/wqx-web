var Scrollbar = window.Scrollbar;

Scrollbar.init(document.getElementById('scroller-wrapper'),{damping:0.09});

var wow = new WOW();
wow.init();


$('.mouse').click(function () {
    Scrollbar.get(document.getElementById("scroller-wrapper")).scrollIntoView(
        document.querySelector("#main"),
        {
            offsetTop: 114
        }
    );
})


$('.header .lines').click(function () {
    $('.menu').toggleClass('activeMenu')
})
$('.header2 .lines').click(function () {
    $('.menu').toggleClass('activeMenu')
})

$('.menu .close').click(function () {
    $('.menu').removeClass('activeMenu')
})
