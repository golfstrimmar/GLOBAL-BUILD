const MyQuiz = () => {
    let Q  =   document.querySelector('.Q-js');
    let track  =   document.querySelector('.Quiz-bar__track');
    let  step  = 0;
    let parent = document.querySelector('.QContent__column');
    let  QBlocks  = Array.prototype.slice.call(parent .childNodes);
    let Block = document.querySelectorAll('.QBlock')




    const Next = () => {
        if (step===3){
            Q.setAttribute('disabled', 'disabled')
            step  = 3
        }else{
            step++
            for (var i = 0; i < QBlocks.length; ++i) {
            QBlocks[i].style.cssText=` opacity: 0;`

            setTimeout(()=>{
                for (var i = 0; i <Block .length; ++i) {
                    Block[i].classList.remove("QBlock-active")
                }
                QBlocks[step].classList.add("QBlock-active")
            }, 100);
            }

                setTimeout(()=>{
                    QBlocks[step].style.cssText=` opacity: 1;`
                }, 300);

        }
        console.log(step )
        track.style.cssText=`width: ${(step+1)*25}% `
    };
    Q.onclick = Next;
};MyQuiz();



