import $ from "jquery";
// import "./slick.js";



$(Document).ready(function() {

    // $(".slider-js-posts-side").slick({
    //     // dots: true,
    //     // arrows: false,
    //     slidesToShow: 3,
    //     speed: 1500,
    //     easing: "ease",
    //     // cssEase: "linear",
    //     centerMode: false,
    //     // autoplay: true,
    //     // autoplaySpeed: 5000,
    //     // centerMode: true,
    //     infinite: true,
    //     //  initialSlide: 1,
    //     // pauseOnFocus: true,
    //     // pauseOnHover: true,
    //     responsive: [
    //         {
    //             breakpoint: 1420,
    //             settings: {
    //                 arrows: false,
    //                 dots: true,
    //             },
    //         },
    //     {
    //         breakpoint: 800,
    //         settings: {
    //             slidesToShow: 2,
    //             arrows: false,
    //             dots: true,
    //         },
    //     },
    //     {
    //         breakpoint: 500,
    //         settings: {
    //             slidesToShow: 1,
    //             arrows: false,
    //             dots: true,
    //
    //         },
    //     },
    // ],
    // });


    // $(".slider-js-posts-low").slick({
    //     // dots: true,
    //     // arrows: false,
    //     slidesToShow: 3,
    //     speed: 1500,
    //     easing: "ease",
    //     // cssEase: "linear",
    //     centerMode: false,
    //     // autoplay: true,
    //     // autoplaySpeed: 5000,
    //     // centerMode: true,
    //     infinite: true,
    //     //  initialSlide: 1,
    //     // pauseOnFocus: true,
    //     // pauseOnHover: true,
    //     responsive: [
    //     {
    //         breakpoint: 800,
    //         settings: {
    //             slidesToShow: 2,
    //         },
    //     },
    //     {
    //         breakpoint: 500,
    //         settings: {
    //             slidesToShow: 1,
    //             arrows: false,
    //             dots: true,
    //
    //         },
    //     },
    // ],
    // });
    //
    // $(".slider-js-posts-projects").slick({
    //     // dots: true,
    //     // arrows: false,
    //     slidesToShow: 3,
    //     speed: 1500,
    //     easing: "ease",
    //     // cssEase: "linear",
    //     centerMode: false,
    //     // autoplay: true,
    //     // autoplaySpeed: 5000,
    //     // centerMode: true,
    //     infinite: true,
    //     //  initialSlide: 1,
    //     // pauseOnFocus: true,
    //     // pauseOnHover: true,
    //     responsive: [
    //     {
    //         breakpoint: 800,
    //         settings: {
    //             slidesToShow: 2,
    //         },
    //     },
    //     {
    //         breakpoint: 500,
    //         settings: {
    //             slidesToShow: 1,
    //             arrows: false,
    //             dots: true,
    //
    //         },
    //     },
    // ],
    // });


    // $(".slider-js-posts-num").slick({
    //     dots: true,
    //     // arrows: false,
    //     slidesToShow: 3,
    //     speed: 1500,
    //     easing: "ease",
    //     // cssEase: "linear",
    //     centerMode: false,
    //     // autoplay: true,
    //     // autoplaySpeed: 5000,
    //     // centerMode: true,
    //     infinite: true,
    //     //  initialSlide: 1,
    //     // pauseOnFocus: true,
    //     // pauseOnHover: true,
    //     responsive: [
    //     {
    //         breakpoint: 800,
    //         settings: {
    //             slidesToShow: 2,
    //         },
    //     },
    //     {
    //         breakpoint: 500,
    //         settings: {
    //             slidesToShow: 1,
    //         },
    //     },
    // ],

  // customPaging: function (slider, i) {
  //         var current = i + 1;
  //         current = current < 10 ? "" + current : current;
  //
  //         var total = slider.slideCount;
  //         total = total < 10 ? "" + total : total;
  //
  //         return (
  //           '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
  //       		<span class="slick-dots-current">' +
  //           current +
  //           '</span>\
  //       		<span class="slick-dots-separator">/</span>\
  //       		<span class="slick-dots-total">' +
  //           total +
  //           "</span></button>"
  //         );
  //       },
  //
  //
  //   });




        $(".slider-js-1").slick({
            // dots: true,
            // arrows: false,
            slidesToShow: 6,
            speed: 800,
            easing: "ease",
            // cssEase: "linear",
            centerMode: false,
            asNavFor: ".slider-js-2",
            // autoplay: true,
            // autoplaySpeed: 2000,
            // centerMode: true,
            // infinite: true,
            // initialSlide: 10,
            // pauseOnFocus: true,
            // pauseOnHover: true,
            // customPaging: function (slider, i) {
            //   var current = i + 1;
            //   current = current < 10 ? "" + current : current;

            //   var total = slider.slideCount;
            //   total = total < 10 ? "" + total : total;

            //   return (
            //     '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
            // 		<span class="slick-dots-current">' +
            //     current +
            //     '</span>\
            // 		<span class="slick-dots-separator">из</span>\
            // 		<span class="slick-dots-total">' +
            //     total +
            //     "</span></button>"
            //   );
            // },

        });

        // $(".slider-js-galary").slick({
        //     arrows: false,
        //     slidesToShow: 3,
        //     speed: 1000,
        //     easing: "ease",
        //     centerMode: false,
        //     autoplay: true,
        //     autoplaySpeed: 8000,
        //     infinite: true,
        // });


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
            // initialSlide: 1,
            // pauseOnFocus: true,
            // pauseOnHover: true,
            // customPaging: function (slider, i) {
            //   var current = i + 1;
            //   current = current < 10 ? "" + current : current;

            //   var total = slider.slideCount;
            //   total = total < 10 ? "" + total : total;

            //   return (
            //     '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
            // 		<span class="slick-dots-current">' +
            //     current +
            //     '</span>\
            // 		<span class="slick-dots-separator">из</span>\
            // 		<span class="slick-dots-total">' +
            //     total +
            //     "</span></button>"
            //   );
            // },
        });





});