'use strict'

const Myscroll = () => {
    let Parent = document.querySelector('html');
    let singles = Array.from(document.getElementsByClassName('button-scroll'))
    if(singles.length){
        singles.forEach((cell) => {
            let id = cell.getAttribute("value")
            let hiddenElement = document.querySelector(id);

            function handleButtonClick() {
                hiddenElement.scrollIntoView({block: 'start', behavior: 'smooth'});
            }

            cell.addEventListener('click', handleButtonClick);
        })

    }
};Myscroll();



