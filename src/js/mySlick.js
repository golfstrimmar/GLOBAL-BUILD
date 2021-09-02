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
                        slidesToShow: 2,
                        arrows: true
                    },
                },   {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        arrows: true
                    },
                },
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

    $(".slider-js-sertif").slick({
            // dots: true,
            // arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 800,
            easing: "ease",
            // cssEase: "linear",
            // centerMode: false,
            // autoplay: true,
            // autoplaySpeed: 2000,
            // centerMode: true,
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