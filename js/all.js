$(document).ready(function() {

    $('.dropDown1').click(function(event) {
        event.preventDefault();
        $('.dropDown1').toggleClass('active');
        $('.dropDownOpen1').slideToggle(500);
        $('.dropDown2').removeClass('active');
        $('.dropDownOpen2').slideUp(1000);
    });
    $('.dropDown2').click(function(event) {
        event.preventDefault();
        $('.dropDown2').toggleClass('active');
        $('.dropDownOpen2').slideToggle(500);
        $('.dropDown1').removeClass('active');
        $('.dropDownOpen1').slideUp(1000);
    });

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        /*各項設定需用逗號隔開*/
        loop: true,
        autoplay: {
            delay: 5000,
        },
        effect: 'slide',
        speed: 2000,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    $('.top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
    });


})