import $ from "jquery";
// import Plyr from "plyr";
// ------------------------------------------------



// $(window).on("load", function() {
//     $(".cssload").delay(200).fadeOut("slow");
// });

$(document).ready(function (e) {
    $("input").on("blur", function () {
        $(this).next("i").css("opacity", "0")
    });
    });


[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
        img.removeAttribute('data-src');
    };
  });


var ul = document.querySelector(".QContent__cards");
let but = document.querySelector(".QCard");

let singles = Array.prototype.slice.call(ul .childNodes);
singles.forEach((cell)=>{
    cell.addEventListener('click', function(){
        ul.childNodes.forEach((child)=>{
            child.classList.remove("QCard--active")
        });
      cell.classList.add("QCard--active")
    });
})

