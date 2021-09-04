import $ from "jquery";


function initPopup() {
    let pop = document.querySelector('#popup');
    let close = document.querySelector('.popup__close');

    pop.style.cssText= " display: block;  ";
    pop.animate([
        { opacity:  '0' },
        { opacity: '1' }
    ], {
        duration: 200,
    })
    setTimeout(()=>{
        pop.style.cssText= "opacity: 1;  display: block; ";
    }, 200);


    document.querySelector("body").style.cssText= "overflow: hidden"
    let overlay =  document.querySelector('.popup__overlay');


    close.addEventListener('click',(e) =>{
        pop.style.cssText= "display: none; opacity: 0;  "
        document.querySelector("body").style.cssText= "overflow: visible"
    });


    overlay.addEventListener('click',(e) =>{
        if (e.target.classList.contains("popup__overlay")) {
            console.log('block-6-form__body')
            pop.style.cssText= "display: none; opacity: 0;  "
            document.querySelector("body").style.cssText= "overflow: visible"
        }
    });
}
document.querySelectorAll('.popup-init-js').forEach((cell)=>{
    cell.addEventListener('click',(e) =>{
        initPopup()
    });
})








// модалки с плеерами.

import Plyr from "plyr";
$(document).ready(function () {
    let Popup = $(".popup-player");
    Popup.fadeOut(200);
    const player1 = new Plyr(".player-1");
    const player2 = new Plyr(".player-2");
    const player3 = new Plyr(".player-3");
    const player4 = new Plyr(".player-4");
    const player5 = new Plyr(".player-5");
    const player6 = new Plyr(".player-6");

    $(".popup-player-init-js").on("click", function () {
        let rel = $(this).attr("rel");
        let pop = $("div." + rel);
        pop.fadeIn(200);
        $("body").css("overflow", "hidden");
    });

    $(".close-js").on("click", function () {
        Popup.fadeOut(200);
        $("body").css("overflow", "visible");
        player1.stop();
        player2.stop();
        player3.stop();
        player4.stop();
        player5.stop();
        player6.stop();
    });

    $(document).on("mouseup", function (e) {
        if ($(".popup-player__overlay").is(e.target)) {
            Popup.fadeOut(200);
            $("body").removeClass("lock").css("overflow", "visible");
            player1.stop();
            player2.stop();
            player3.stop();
            player4.stop();
            player5.stop();
            player6.stop();
        }
    });
});














