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
    
    $('input, select').styler();


    var mixer = mixitup('.product__inner-box');
});