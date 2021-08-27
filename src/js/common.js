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

const MyQCard = () => {
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

};MyQCard();


const MyMore = () => {

    let  More = document.querySelector('.more-js');
    let Projects  = document.querySelector('.projects-js');
    let count = 0;
    // Projects.classList.add("more-hidden")
    More.innerText ="Смотреть все проекты"

   const MoreClick = () => {
       Projects.classList.toggle("more-hidden")
       More.innerText ="Свернуть проекты"
       const on = More.classList.toggle('on')
       MoreClick.innerText(on ? 'Закрыть' : More.innerText ="Смотреть все проекты")

   }
    More.onclick = MoreClick

};MyMore();

// const MyMore = () => {
//
//     let  More = document.querySelector('.more-js');
//     let Hidden  = document.querySelector('.hidden-js');
//
//     Hidden.classList.add("more-hidden")
//     More.innerText ="Смотреть все проекты"
//
//    const MoreClick = () => {
//         console.log(More);
//        Hidden.classList.toggle("more-hidden")
//        More.innerText ="Свернуть проекты"
//        const on = More.classList.toggle('on')
//        MoreClick.innerText(on ? 'Закрыть' : More.innerText ="Смотреть все проекты")
//    }
//     More.onclick = MoreClick
//
//
// };MyMore();
//




