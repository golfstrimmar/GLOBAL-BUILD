const MyTrack = () => {
    let position =  0
    let  slidesToShow= 5
    let slidesToScroll =  3
    const container =   document.querySelector('.slider-track__body');
    const track = document.querySelector('.slider-track__track');
    let items = Array.prototype.slice.call(track .childNodes);
    const btnPrev = document.querySelector('.slider-track__button--left');
    const btnNext = document.querySelector('.slider-track__button--right');
    const itemWidth = track .offsetWidth /slidesToShow
    let movePosition = Math.floor(slidesToScroll*itemWidth)
    let itemsCount =  items.length



    track.style.cssText=`
    grid-template-columns: repeat(auto-fill, minmax(${itemWidth}px, 1fr));
`
    for (var i = 0; i < items.length; ++i) {
        items[i].style.cssText=`
        min-width: ${itemWidth}px;
        `
    }

    function Prev() {
            position  = position + movePosition
            setPosition();
            checkBtns();
            console.log(movePosition);
            console.log(position);
    }
    btnPrev.onclick = Prev

    function Next() {
            position  = position - movePosition
            setPosition();
            checkBtns();
        console.log(movePosition);
        console.log(position);
    }
    btnNext.onclick = Next


    const setPosition = () => {
        track.style.cssText=` transform: translate(${position }px, 0);`
    };

    const checkBtns = () => {
        if (position === 0){
 btnPrev.setAttribute('disabled', 'disabled')
        }else{
            btnPrev.removeAttribute('disabled')
        }

  if(position <= -(itemsCount - slidesToShow)*itemWidth+itemWidth){
            btnNext.setAttribute('disabled', 'disabled')
        }else{
            btnNext.removeAttribute('disabled')
        }

    };


};MyTrack();

