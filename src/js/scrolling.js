import $ from "jquery";
// ------------------------------------------------


// --------------------------------------------------------------------------

if(window.location.pathname == '/') {

 $(window).scroll(function () {


   // var $section = $("section");

 //   $section.each(function (i, el) {
 //
 //     var top = $(el).offset().top - 100;
 //     var bottom = top + $(el).height();
 //     var scroll = $(window).scrollTop();
 //     var id = $(el).attr("id");
 //
 //     // if (scroll > top && scroll < bottom) {
 //     //   $("a.menu__link").removeClass("menu__link--active");
 //     //   $("a.art_inner-vidget-item__link").removeClass("menu__link--active");
 //     //   $('a[href="#' + id + '"').addClass("menu__link--active");
 //     //
 //     // }
 //   });
 // });




$(".bunner__button").on("click", function (event) {
  event.preventDefault();
  let id = $(this).attr("href"),
    top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top - 80}, 800).then(function(){$("body,html").offset()});

});

 })

}