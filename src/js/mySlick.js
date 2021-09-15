
// import $ from "jquery";
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
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        swipe: false
                    },
                }
            ],
        });


        // -----------------

    $(".slider-js-stage-1").slick({
        // dots: true,
        // arrows: false,
        slidesToShow: 6,
        speed: 500,
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
                    arrows:  true
                },
            }
        ],

    });



    $(".slider-js-stage-1 .slick-slide").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".slider-js-stage-1").slick("slickGoTo", index);
    });




    $(".slider-js-stage-2").slick({
        slidesToShow: 1,
        speed: 500,
        easing: "ease",
        infinite: true,
        asNavFor: ".slider-js-stage-1",
        nextArrow: document.querySelector('.stage-inner__button'),
        });

    $('.slider-js-stage-2').find('.slick-slide').css('height', $('.slick-current ').find('.stage-inner__item').height() );


function ChangeSlide(){
    function SliderHeight(par){
        let slider = document.querySelector('.slider-js-stage-2');
        let stage = document.querySelector('.slider-js-stage-2 .slick-track ');
        let singles = Array.prototype.slice.call(stage.children);
        for (var i = 0; i < singles.length; ++i) {
            if(singles[i].classList.contains("slick-current")){
                let stageHeight = singles[i+par].querySelector('.stage-inner__item').offsetHeight
                slider.style.cssText= `height:  ${stageHeight}px; `;
            }
        }
    }
    SliderHeight(0);

    $('.slider-js-stage-2').on('beforeChange', function(event){
        document.querySelector('.stage-inner__button ').style.cssText= "opacity: 0;  transition: all .2s ease-in-out; ";
        // $('.slick-slide').css('height', $('.slick-current ').next().find('.stage-inner__item').height() );

    });

    $('.slider-js-stage-2').on('afterChange', function(event){
        document.querySelector('.stage-inner__button ').style.cssText= "opacity: 1;  transition: all .2s ease-in-out; ";
        SliderHeight(0);
    });
}
    ChangeSlide();

window.addEventListener('resize',(e) =>{
    ChangeSlide();
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

// ---------------------------
// ===========================================


    $(".reviews-card-galery-js-1").slick({
        arrows:  false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
        easing: "ease",
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        asNavFor: ".reviews-card-left-js-1",
        prevArrow: document.querySelector('.galery-arrow-left-1'),
        nextArrow: document.querySelector('.galery-arrow-right-1'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows:  true
                },
            },
        ],
    });


    $(".reviews-card-galery-js-1 .slick-slide").on("click", function () {
        const index = $(this).attr("data-slick-index");
        $(".reviews-card-galery-js-1").slick("slickGoTo", index);
    });


    $(".reviews-card-left-js-1").slick({
        // dots: true,
        arrows: false,
        slidesToShow: 1,
        speed: 800,
        easing: "ease",
        centerMode: false,
        fade: true,
        asNavFor: ".reviews-card-galery-js-1",
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

// ---------------

        $(".reviews-card-galery-js-2").slick({
            arrows:  false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            easing: "ease",
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            asNavFor: ".reviews-card-left-js-2",
            prevArrow: document.querySelector('.galery-arrow-left-2'),
            nextArrow: document.querySelector('.galery-arrow-right-2'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows:  true
                    },
                },
            ],
        });


        $(".reviews-card-galery-js-2 .slick-slide").on("click", function () {
            const index = $(this).attr("data-slick-index");
            $(".reviews-card-galery-js-2").slick("slickGoTo", index);
        });


        $(".reviews-card-left-js-2").slick({
            // dots: true,
            arrows: false,
            slidesToShow: 1,
            speed: 800,
            easing: "ease",
            centerMode: false,
            fade: true,
            asNavFor: ".reviews-card-galery-js-2",
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

// ---------------// ---------------

        $(".reviews-card-galery-js-3").slick({
            arrows:  false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            easing: "ease",
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            asNavFor: ".reviews-card-left-js-3",
            prevArrow: document.querySelector('.galery-arrow-left-3'),
            nextArrow: document.querySelector('.galery-arrow-right-3'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows:  true
                    },
                },
            ],
        });


        $(".reviews-card-galery-js-3 .slick-slide").on("click", function () {
            const index = $(this).attr("data-slick-index");
            $(".reviews-card-galery-js-3").slick("slickGoTo", index);
        });


        $(".reviews-card-left-js-3").slick({
            // dots: true,
            arrows: false,
            slidesToShow: 1,
            speed: 800,
            easing: "ease",
            centerMode: false,
            fade: true,
            asNavFor: ".reviews-card-galery-js-3",
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

// ---------------// ---------------

        $(".reviews-card-galery-js-4").slick({
            arrows:  false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            easing: "ease",
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            asNavFor: ".reviews-card-left-js-4",
            prevArrow: document.querySelector('.galery-arrow-left-4'),
            nextArrow: document.querySelector('.galery-arrow-right-4'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows:  true
                    },
                },
            ],
        });


        $(".reviews-card-galery-js-4 .slick-slide").on("click", function () {
            const index = $(this).attr("data-slick-index");
            $(".reviews-card-galery-js-4").slick("slickGoTo", index);
        });


        $(".reviews-card-left-js-4").slick({
            // dots: true,
            arrows: false,
            slidesToShow: 1,
            speed: 800,
            easing: "ease",
            centerMode: false,
            fade: true,
            asNavFor: ".reviews-card-galery-js-4",
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

// ---------------

// ---------------// ---------------

        $(".reviews-card-galery-js-5").slick({
            arrows:  false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            easing: "ease",
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            asNavFor: ".reviews-card-left-js-5",
            prevArrow: document.querySelector('.galery-arrow-left-5'),
            nextArrow: document.querySelector('.galery-arrow-right-5'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows:  true
                    },
                },
            ],
        });


        $(".reviews-card-galery-js-5 .slick-slide").on("click", function () {
            const index = $(this).attr("data-slick-index");
            $(".reviews-card-galery-js-5").slick("slickGoTo", index);
        });


        $(".reviews-card-left-js-5").slick({
            // dots: true,
            arrows: false,
            slidesToShow: 1,
            speed: 800,
            easing: "ease",
            centerMode: false,
            fade: true,
            asNavFor: ".reviews-card-galery-js-5",
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

// ---------------

// ---------------// ---------------

        $(".reviews-card-galery-js-6").slick({
            arrows:  false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            easing: "ease",
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            asNavFor: ".reviews-card-left-js-6",
            prevArrow: document.querySelector('.galery-arrow-left-6'),
            nextArrow: document.querySelector('.galery-arrow-right-6'),
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows:  true
                    },
                },
            ],
        });


        $(".reviews-card-galery-js-6 .slick-slide").on("click", function () {
            const index = $(this).attr("data-slick-index");
            $(".reviews-card-galery-js-6").slick("slickGoTo", index);
        });


        $(".reviews-card-left-js-6").slick({
            // dots: true,
            arrows: false,
            slidesToShow: 1,
            speed: 800,
            easing: "ease",
            centerMode: false,
            fade: true,
            asNavFor: ".reviews-card-galery-js-6",
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

// ---------------













// ============================================
// -----------
    $(".slider-js-posts-side-1").slick({
        slidesToShow: 1,
        speed: 800,
        easing: "ease",
        centerMode: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: document.querySelector('.posts-slick-prev-1'),
        nextArrow: document.querySelector('.posts-slick-next-1'),
    });
    $(".slider-js-posts-side-2").slick({
        slidesToShow: 1,
        speed: 800,
        easing: "ease",
        centerMode: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: document.querySelector('.posts-slick-prev-2'),
        nextArrow: document.querySelector('.posts-slick-next-2'),
    });
    $(".slider-js-posts-side-3").slick({
        slidesToShow: 1,
        speed: 800,
        easing: "ease",
        centerMode: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: document.querySelector('.posts-slick-prev-3'),
        nextArrow: document.querySelector('.posts-slick-next-3'),
    });
    $(".slider-js-posts-side-4").slick({
        slidesToShow: 1,
        speed: 800,
        easing: "ease",
        centerMode: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: document.querySelector('.posts-slick-prev-4'),
        nextArrow: document.querySelector('.posts-slick-next-4'),
    });
// -----------
    });








