// ============tabs ==================
//
// const MyTabs = () => {
//
//     let tabs  =   document.querySelector('.block-11__body');
//     let singles = Array.prototype.slice.call(tabs.children);
//     let texts = [];
//     for (let i = 0; i < singles.length; ++i) {
//         texts [i]  = singles[i].querySelector('.block-11-tab__hidden').innerHTML ;
//         singles[i].querySelector('.block-11-tab__hidden').innerHTML= "";
//     }
//
//     for (let c = 0;   c < singles.length; ++c) {
//         let single = singles[c]
//         let hidden =    single.querySelector('.block-11-tab__hidden');
//         let icon =    single.querySelector('svg');
//         let title =     single.querySelector('.block-11-tab__title span');
//
//         hidden.setAttribute("style", "max-height: 0px;  z-index: -1; ");
//
//         const foo = () => {
//             if( single.classList.contains("act")){
//                 hidden.setAttribute("style", "max-height: 0px;  z-index: -1; ");
//                 single.classList.remove("act")
//                 setTimeout(()=>{   hidden.innerHTML=    ""  }, 400);
//                 icon.setAttribute("style", "transform: rotate(0deg); ");
//                 title.classList.remove("title-active")
//
//             }else{
//                 hidden.setAttribute("style", "max-height: 1000px;  z-index: 1; ");
//                 setTimeout(()=>{   hidden.innerHTML=    texts[c]  }, 200);
//                 icon.setAttribute("style", "transform: rotate(180deg);  stroke: #2f2e2e;");
//                 title.classList.add("title-active")
//                 single.classList.add("act")
//             }
//         }
//
//         singles[c].addEventListener('click',foo);
//     }
//
//
// };MyTabs();

const MyTabs = () => {
let tabs = document.querySelector('.block-11__body');
    let p  = true;


    let singles = Array.prototype.slice.call(tabs.children);
    singles.forEach((cell)=>{
        let title = cell.querySelector('.block-11-tab__title')
        let span =  title.querySelector(' span');
        let hidden =  cell.querySelector('.block-11-tab__hidden');
        let svg =  cell.querySelector('.block-11-tab__title svg');

        function  openItems(e){
            if(p===true){
                hidden.style.cssText= " transform: scaleY(1); max-height: 500px;"
                svg.style.cssText= "transform: rotate(180deg); stroke: #282828;"
                span.style.cssText= "color: #282828;"
                p = !p
                console.log(p)
            }else{
                hidden.style.cssText= " transform: scaleY(0); max-height: 0;"
                svg.style.cssText= "transform: rotate(0deg); stroke:  #B18223 ;"
                span.style.cssText= "color: #B18223;"
                p = !p
                console.log(p)
            }
        }


        title.addEventListener('click',openItems )

    })








};MyTabs();

















