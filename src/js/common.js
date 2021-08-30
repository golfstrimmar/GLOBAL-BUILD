import $ from "jquery";
import Plyr from "plyr";
// ------------------------------------------------



// $(window).on("load", function() {
//     $(".cssload").delay(200).fadeOut("slow");
// });

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

const MyQCard = () => {
    var ul = document.querySelector(".QContent__cards");
    let singles = Array.prototype.slice.call(ul.children);
    singles.forEach((cell)=>{
        cell.addEventListener('click', function(){
            singles.forEach((child)=>{
                child.classList.remove("QCard--active")
            });
            cell.classList.add("QCard--active")
        });
    })
};MyQCard();




const player = new Plyr('#player');
var plyer= $(".plyer")

plyer.fadeOut()	;
$(".plyer__init").on("click", function () {

    if (plyer.hasClass("act") ){
        plyer.removeClass("act")
        plyer.fadeOut();
        player.stop();
        $("body").css("overflow","visible")
    }else{
        plyer.addClass("act")
        plyer.fadeIn()
        player.play();
        $("body").css("overflow","hidden")

    }
});

$(".plyer__close").on("click", function () {
    plyer.removeClass("act")
    plyer.fadeOut();
    player.stop();
    $("body").css("overflow","visible")
});


// =======galery=================
const MyGalary = () => {
    let  Galery=   document.querySelector('.galery');
    let chost = [];
    let singles = Array.prototype.slice.call(Galery.children);
    let count  =   0;

    for (var i = 0; i < singles.length; ++i) {
      chost[i]  = singles[i].innerHTML;
        singles[i].remove();
    }

    function double(){
        for (var c= 0; c < singles.length; ++c) {
            let picture =  document.createElement('div');
            picture.classList.add("galery__item");
            picture.innerHTML =   chost[c]
            Galery.append(picture)
        }
    }
    double();double();


    (function main(counter){

        for (var i = 0; i < singles.length*2; ++i) {
            Galery.children[i].animate([
                { transform: 'translate(0px)' },
                { transform: 'translate(-210px)' }
            ], {
                duration: 6000,
            })
        }

        setTimeout(()=>{
            let FirstSlide = Galery.childNodes[0].innerHTML;
            let picture =  document.createElement('div');
            picture.classList.add("galery__item");
            picture.innerHTML =   FirstSlide;
            Galery.append(picture)
            Galery.children[0].remove();
        }, 6000);

        if(count ===1){
            count--
        }else{
            count++
        }

        // --------------------
        setTimeout(main,6000);
    })
    (0);


};MyGalary();



// =============================================

const MyMore = () => {
    let Projects  = document.querySelector('.projects-js');
    let isOpen = true;
    let More  =  Projects.nextElementSibling;
    let  cellHeight =    Projects.offsetHeight;
    Projects.setAttribute("style", "max-height: 0px;  z-index: -2; opacity:  0;");


     More.addEventListener('click',  function(){
         if(isOpen=== false){
             Projects.setAttribute("style", "max-height: 0px;  z-index: -2; opacity:  0;");
             More.textContent = 'Смотреть все проекты';
             More.style.cssText=`bottom: -58px; `
             isOpen = true;
         }else{
             Projects.setAttribute("style", "max-height: " +cellHeight + "px;  z-index: 1; opacity:  1;");
             isOpen = false;
             More.textContent = 'Закрыть';
             More.style.cssText=`bottom: -100px; `
         }
        })

};MyMore();


// ===========
const MyHidden = () => {
    let hidden  =   document.querySelectorAll('.reviews-card-review__hidden');
    let singles = Array.from(hidden);
    let isOpen = true;
    singles.forEach((cell)=>{
        cell.style.cssText=``;
        let more  =  cell.nextElementSibling;
        let  cellHeight =    cell.offsetHeight;
        cell.setAttribute("style", "max-height: 0px;  z-index: -1; ");
        more.addEventListener('click',  function(){
            console.log(cellHeight);
            if (isOpen === false) {
                cell.setAttribute("style", "max-height: 0px;  z-index: -1;");
                isOpen = true;
            } else if (isOpen !== false) {
                cell.setAttribute("style", "max-height:" + cellHeight + "px;  z-index: 1; ");
                isOpen = false;
            }
        });
    })

};MyHidden();




















