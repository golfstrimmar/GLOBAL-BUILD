// ============tabs ==================
if(window.location.pathname == '/') {

    const MyTabs = () => {
        let tabs = document.querySelector('.block-11__body');


        let singles = Array.prototype.slice.call(tabs.children);
        singles.forEach((cell) => {
            let title = cell.querySelector('.block-11-tab__title')
            let span = title.querySelector(' span');
            let hidden = cell.querySelector('.block-11-tab__hidden');
            let svg = cell.querySelector('.block-11-tab__title svg');
            let p = true;

            function openItems(e) {
                if (p === true) {
                    hidden.style.cssText = " transform: scaleY(1); max-height: 500px;"
                    svg.style.cssText = "transform: rotate(180deg); stroke: #282828;"
                    span.style.cssText = "color: #282828;"
                    p = !p
                    console.log(p)
                } else {
                    hidden.style.cssText = " transform: scaleY(0); max-height: 0;"
                    svg.style.cssText = "transform: rotate(0deg); stroke:  #B18223 ;"
                    span.style.cssText = "color: #B18223;"
                    p = !p
                    console.log(p)
                }
            }


            title.addEventListener('click', openItems)

        })


    };
    MyTabs();


}














