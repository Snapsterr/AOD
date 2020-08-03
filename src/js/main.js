$('.icon-menu').click(function(event){
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

/* SLIDER */
if($('.slider__body').length>0){
   $('.slider__body').slick({
        dots: true,
        arrows: false,
        accessibility: false,
        sliderToShow: 1,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
   });
}