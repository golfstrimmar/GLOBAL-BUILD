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
    // let but = document.querySelector(".QCard");

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
    // let count = 0;
    More.innerText ="Смотреть все проекты"

   const MoreClick = () => {
       Projects.classList.toggle("more-hidden")


       // const on = More.classList.toggle('on')
       // More.innerText(on ? 'Закрыть' : 'Смотреть все проекты')
       More.classList.toggle('on')
       // let on = More.innerText
       // ( 'Смотреть все проекты')
       if(More.classList.contains("on") ){
           More.innerText = 'Свернуть проекты'
           More.style.cssText=`bottom: -108px`
       }else{
           More.innerText ="Смотреть все проекты"
           More.style.cssText=`bottom: -58px`
       }


   }
    More.onclick = MoreClick

};MyMore();


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
    let singles = Array.prototype.slice.call(Galery.childNodes);
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
            Galery.childNodes[i].animate([
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
            Galery.childNodes[0].remove();
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



