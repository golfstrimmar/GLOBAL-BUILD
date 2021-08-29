

    const MyQuiz = () => {
        let Q = document.querySelector('.Q-js');
        let track = document.querySelector('.Quiz-bar__track');
        let step = 0;
        let parent = document.querySelector('.QContent__column');
        let QBlocks = Array.prototype.slice.call(parent.childNodes);
        let Block = document.querySelectorAll('.QBlock')



        Q.addEventListener('click', function (event) {
            console.log(step);

            if (step === 3) {
                Q.setAttribute('disabled', 'disabled')
                step = 3
            } else {
                step++
                for (var i = 0; i < QBlocks.length; ++i) {
                    QBlocks[i].style.cssText = ` opacity: 0;`

                    setTimeout(() => {
                        for (var i = 0; i < Block.length; ++i) {
                            Block[i].classList.remove("QBlock-active")
                        }
                        QBlocks[step].classList.add("QBlock-active")
                    }, 100);
                }

                setTimeout(() => {
                    QBlocks[step].style.cssText = ` opacity: 1;`
                }, 300);

            }
            console.log(step)
            console.log("success")
            track.style.cssText = `width: ${(step + 1) * 25}% `

        });
    };
    MyQuiz();


    const MyStage = () => {
        let but = document.querySelector(".stage-inner__button");
        let step = 0;

        let parent = document.querySelector('.stage-inner');
        let QBlocks = Array.prototype.slice.call(parent.childNodes);
        let Block = document.querySelectorAll('.stage-inner__item')
        QBlocks[0].classList.add("stage-active-js")

        let StageButtons = document.querySelector('.block-6-stage__buttons');
        let buttons = Array.prototype.slice.call(StageButtons.childNodes);
        buttons[0].childNodes[0].classList.add("button-active")


        const NextBlock = () => {
            console.log(step);
            step++
            if (step >= 6) {
                step = 0
            }
            for (var i = 0; i < QBlocks.length; ++i) {
                QBlocks[i].style.cssText = ` opacity: 0;`
                setTimeout(() => {
                    for (var i = 0; i < Block.length; ++i) {
                        Block[i].classList.remove("stage-active-js")
                        buttons[i].childNodes[0].classList.remove("button-active")
                    }
                    QBlocks[step].classList.add("stage-active-js")
                    buttons[step].childNodes[0].classList.add("button-active")
                }, 100);

                setTimeout(() => {
                    Block[step].style.cssText = ` opacity: 1;`
                }, 300);

            }
        }
        but.onclick = NextBlock;

    };
    MyStage();


