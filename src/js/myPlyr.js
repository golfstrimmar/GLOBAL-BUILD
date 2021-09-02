import Plyr from "plyr";
import $ from "jquery";

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