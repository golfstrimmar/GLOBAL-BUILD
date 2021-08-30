const MyStage = () => {
    let but = document.querySelector(".stage-inner__button");
    let step = 0;

    let parent = document.querySelector('.stage-inner');
    let QBlocks = Array.prototype.slice.call(parent.children);
    let Block = document.querySelectorAll('.stage-inner__item')

    QBlocks[0].classList.add("stage-active-js")

    let StageButtons = document.querySelector('.block-6-stage__buttons');
    let buttons = Array.prototype.slice.call(StageButtons.children);

    buttons[0].firstElementChild.classList.add("button-active")





but.addEventListener('click',() =>{
    step++
    if (step >= 6) {
        step = 0
    }
    for (var i = 0; i < QBlocks.length; ++i) {
        QBlocks[i].style.cssText = ` opacity: 0;`
        setTimeout(() => {
            for (var i = 0; i < Block.length; ++i) {
                Block[i].classList.remove("stage-active-js")
                buttons[i].firstElementChild.classList.remove("button-active")
            }
            QBlocks[step].classList.add("stage-active-js")
            buttons[step].firstElementChild.classList.add("button-active")
        }, 100);

        setTimeout(() => {
            Block[step].style.cssText = ` opacity: 1;`
        }, 300);

    }
});



};
MyStage();