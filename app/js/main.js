$(function(){
    $('.product__slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
     $('.slider__feed-inner').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         prevArrow: '<button type="button" class="slick-prev"></button>',
         nextArrow: '<button type="button" class="slick-next"></button>',
     });

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
        ratedFill: "#ffc000"
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function () {
        $('.product-page__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function () {
        $('.product-page__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });

    $('input, select').styler();



    var mixer = mixitup('.product__inner-box');
});