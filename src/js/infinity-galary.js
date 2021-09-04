





// =======galery=================

if(window.location.pathname == '/') {

    const MyGalary = () => {
        let Galery = document.querySelector('.galery');
        let chost = [];
        let singles = Array.prototype.slice.call(Galery.children);
        let count = 0;

        for (var i = 0; i < singles.length; ++i) {
            chost[i] = singles[i].innerHTML;
            singles[i].remove();
        }

        function double() {
            for (var c = 0; c < singles.length; ++c) {
                let picture = document.createElement('div');
                picture.classList.add("galery__item");
                picture.innerHTML = chost[c]
                Galery.append(picture)
            }
        }

        double();
        double();


        (function main(counter) {

            for (var i = 0; i < singles.length * 2; ++i) {
                Galery.children[i].animate([
                    {transform: 'translate(0px)'},
                    {transform: 'translate(-210px)'}
                ], {
                    duration: 6000,
                })
            }


            setTimeout(() => {
                let FirstSlide = Galery.children[0].innerHTML;
                let picture = document.createElement('div');
                picture.classList.add("galery__item");
                picture.innerHTML = FirstSlide;
                Galery.append(picture)
                Galery.children[0].remove();
            }, 6000);


            if (count === 1) {
                count--
            } else {
                count++
            }

            // --------------------
            setTimeout(main, 6000);
        })
        (0);


    };
    MyGalary();

}