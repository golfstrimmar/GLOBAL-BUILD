import $ from "jquery";
import Plyr from "plyr";


$(document).ready(function () {
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














