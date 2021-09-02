

    const MyQuiz = () => {
        let Q = document.querySelector('.Q-js');
        let track = document.querySelector('.Quiz-bar__track');
        let step = 0;
        let parent = document.querySelector('.QContent__column');
        let QBlocks = Array.prototype.slice.call(parent.children);
        let Block = document.querySelectorAll('.QBlock')
        let Text = "25%";

        track.innerText = Text;


        Q.addEventListener('click', function (event) {

            function initPopup() {
                let pop = document.querySelector('#popup');
                let close = document.querySelector('.popup__close');
                pop.style.cssText= " display: block; opacity:1; "
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

console.log(step);
            if (step === 4) {
                initPopup();
                step = 4
            }else{



            if (step === 3) {
                Q.innerText ="Узнать цену";
                Q.style.cssText= " color: white; text-shadow: 0 0 3px rgba(0,0,0, .4); box-shadow:  0 0 8px rgba(0,0,0, .4);"
                track.innerText= "100%";
                track.style.cssText ="width: 100%;"
                var myNode = document.getElementsByClassName("Person-card__icon");
                var el;
                while ((el = myNode[0])) {
                    el.parentNode.removeChild(el);
                }

                step++
            } else {
                step++
                for (var i = 0; i < QBlocks.length; ++i) {
                    QBlocks[i].style.cssText = ` opacity: 0;`

                    setTimeout(() => {
                        for (var i = 0; i < Block.length; ++i) {
                            Block[i].classList.remove("QBlock-active")
                        }
                        QBlocks[step].classList.add("QBlock-active")
                        track.innerText = `${(step+1)*25}%`
                    }, 100);
                }
                setTimeout(() => {
                    QBlocks[step].style.cssText = ` opacity: 1;`
                }, 300);
                track.style.cssText = `width: ${(step + 1) * 25}% `;

                // === 3
            }
                // === 4
            }
        });


    };
    MyQuiz();




