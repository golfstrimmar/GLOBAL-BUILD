// ============tabs ==================

const MyTabs = () => {

    let tabs  =   document.querySelector('.block-11__body');
    let singles = Array.prototype.slice.call(tabs.children);
    let texts = [];
    for (let i = 0; i < singles.length; ++i) {
        texts [i]  = singles[i].querySelector('.block-11-tab__hidden').innerHTML ;
        singles[i].querySelector('.block-11-tab__hidden').innerHTML= "";
    }

    for (let c = 0;   c < singles.length; ++c) {
        let single = singles[c]
        let hidden =    single.querySelector('.block-11-tab__hidden');
        let icon =    single.querySelector('svg');
        let title =     single.querySelector('.block-11-tab__title span');

        hidden.setAttribute("style", "max-height: 0px;  z-index: -1; ");

        const foo = () => {
            if( single.classList.contains("act")){
                hidden.setAttribute("style", "max-height: 0px;  z-index: -1; ");
                single.classList.remove("act")
                setTimeout(()=>{   hidden.innerHTML=    ""  }, 400);
                icon.setAttribute("style", "transform: rotate(0deg); ");
                title.setAttribute("style", "color: #b18223;");
            }else{
                hidden.setAttribute("style", "max-height: 200px;  z-index: 1; ");
                setTimeout(()=>{   hidden.innerHTML=    texts[c]  }, 200);
                icon.setAttribute("style", "transform: rotate(180deg);  stroke: #2f2e2e;");
                title.setAttribute("style", "color: #2f2e2e;");
                single.classList.add("act")
            }
        }

        singles[c].addEventListener('click',foo);
    }


};MyTabs();