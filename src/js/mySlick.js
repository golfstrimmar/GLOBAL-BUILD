
import $ from "jquery";
// import "./slick.js";




$(Document).ready(function() {

        $(".slider-js-1").slick({
            // dots: true,
            // arrows: false,
            arrows: true,
            slidesToShow: 6,
            speed: 800,
            easing: "ease",
            centerMode: false,
            asNavFor: ".slider-js-2",
            prevArrow: document.querySelector('.reviews-top-slick-prev'),
            nextArrow: document.querySelector('.reviews-top-slick-next'),
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: true
                    },
                }
            ],

        });



        $(".slider-js-1 .slick-slide").on("click", function () {
            const index = $(this).attr("data-slick-index");
            $(".slider-js-1").slick("slickGoTo", index);
        });




        $(".slider-js-2").slick({
            // dots: true,
            // arrows: false,
            slidesToShow: 1,
            speed: 800,
            easing: "ease",
            // cssEase: "linear",
            // centerMode: false,
            // autoplay: true,
            // autoplaySpeed: 2000,
            // centerMode: true,
            infinite: true,
            asNavFor: ".slider-js-1",
            prevArrow: document.querySelector('.reviews-low-slick-prev'),
            nextArrow: document.querySelector('.reviews-low-slick-next'),
            // pauseOnFocus: true,
            // pauseOnHover: true,

        });


        // -----------------

    $(".slider-js-stage-1").slick({
        // dots: true,
        // arrows: false,
        slidesToShow: 6,
        speed: 800,
        easing: "ease",
        centerMode: false,
        asNavFor: ".slider-js-stage-2",
        prevArrow: document.querySelector('.slick-arrow-stage-1-prev'),
        nextArrow: document.querySelector('.slick-arrow-stage-1-next'),
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                },
            }
        ],

    });



    $(".slider-js-stage-1 .slick-slide").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".slider-js-stage-1").slick("slickGoTo", index);
    });




    $(".slider-js-stage-2").slick({
        // dots: true,
        // arrows: false,
        slidesToShow: 1,
        speed: 800,
        easing: "ease",
        // cssEase: "linear",
        // centerMode: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // centerMode: true,
        infinite: true,
        asNavFor: ".slider-js-stage-1",
        nextArrow: document.querySelector('.stage-inner__button'),
    });

    $('.slider-js-stage-2').on('beforeChange', function(event){
        document.querySelector('.stage-inner__button ').style.cssText= "opacity: 0;  transition: all .1s ease-in-out; ";
    });

 $('.slider-js-stage-2').on('afterChange', function(event){
        document.querySelector('.stage-inner__button ').style.cssText= "opacity: 1;  transition: all .1s ease-in-out; ";
    });

// ------------------------------------------

    $(".slider-single-bottom-js").slick({
        // dots: true,
        // arrows: false,
        slidesToShow: 3,
        speed: 800,
        easing: "ease",
        // cssEase: "linear",
        // centerMode: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // centerMode: true,
        infinite: true,
        asNavFor: ".slider-single-top-js",

    });


    $(".slider-single-bottom-js .slick-slide").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".slider-single-bottom-js").slick("slickGoTo", index);
    });


    $(".slider-single-top-js").slick({
        // dots: true,
        // arrows: false,
        slidesToShow: 1,
        speed: 800,
        easing: "ease",
        centerMode: false,
        fade: true,
        asNavFor: ".slider-single-bottom-js",
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                },
            }
        ],

    });









// ----------------------
    $(".slider-js-sertif").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 800,
            easing: "ease",
            infinite: true,
            prevArrow: document.querySelector('.reviews-10-slick-prev'),
            nextArrow: document.querySelector('.reviews-10-slick-next'),
            responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows:  true
                },
            },
        ],


    });





});






