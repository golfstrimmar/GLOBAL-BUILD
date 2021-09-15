'use strict';


const MyMore = () => {
    let reviews = document.querySelectorAll(".more-hidden-js")
    reviews.forEach((cell)=>{
        let button  =   cell.nextElementSibling;
        cell.style.cssText = " transform: scaleY(0);    transition:  all 0s ease-in-out"
        cell.style.height = `0px`
        let ToggleSpans = button.querySelectorAll('span');

        ToggleSpans.forEach((uno)=>{
            uno.classList.contains("visible-span-js") ? uno.style.opacity= "1" : uno.style.opacity= "0"
        })


        button.addEventListener('click',() =>{
            cell.classList.toggle("act")
            if (cell.style.height === "0px") {

                cell.style.cssText = " transform: scaleY(1);   transition:  all .3s ease-in-out"

                ToggleSpans.forEach((uno)=>{
                    uno.classList.contains("visible-span-js") ? uno.style.opacity= "0" : uno.style.opacity= "1"
                })

                cell.style.height = `${ cell.scrollHeight }px`


                cell.animate([
                    { height: '0px' },
                    { height: `${ cell.scrollHeight }px` },
                ], {
                    duration: 300,
                    easing: 'ease-in-out',
                })

            } else {
                cell.style.cssText = " transform: scaleY(0);   transition:  all .3s ease-in-out"

                ToggleSpans.forEach((uno)=>{
                    uno.classList.contains("visible-span-js") ? uno.style.opacity= "1" : uno.style.opacity= "0"
                })


                cell.animate([
                    { height: `${ cell.scrollHeight }px` },
                    { height: '0px' },
                ], {
                    duration: 300,
                    easing: 'ease-in-out',
                })
                cell.style.height = "0";
            }
// --------------------------------------
        })
    })
}

let reviews =  document.querySelectorAll('.more-hidden-js');

if(reviews.length ) {
    MyMore();
}
