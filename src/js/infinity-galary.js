
import $ from 'jquery';

if(window.location.pathname == '/') {


// ==============MyGalarySm===================
    const MyGalarySm = () => {



        let Galerys = document.querySelectorAll('.galery');

        Galerys .forEach((Galery)=>{
            let chost = [];
            let singles = Array.prototype.slice.call(Galery.children);
            let length = singles.length;
            let count = length;
            let  left =   Galery.closest(".reviews-card__column").querySelector('.galery-arrow-left');
            let  right =   Galery.closest(".reviews-card__column").querySelector('.galery-arrow-right');
            let countShift = 0



            for (let i = 0; i < singles.length; ++i) {
                chost[i] = singles[i].innerHTML;
                singles[i].remove();
            }
            function double() {
                for (let c = 0; c < singles.length; ++c) {
                    let picture = document.createElement('div');
                    picture.classList.add("galery__item");
                    picture.innerHTML = chost[c]
                    Galery.append(picture)
                }
            }

            Galery.style.cssText= `transform: translate(-${300*length }px);`;
            double();
            double();

            function main( shift) {
                    Galery.style.cssText= `transform: translate(${-300*length  + shift}px)`;
            }


            left.addEventListener('click',() =>{
                if(count ===0) {
                    count = length
                    countShift = 0
                    Galery.style.cssText= `transform: translate(-${300*length }px); transition: all 0s ease-in-out`;

                    setTimeout(()=>{
                        countShift += 300
                        main(countShift );
                        count--
                    },0);


                }else{
                    countShift += 300
                    main(countShift );
                    count--
                }
            });

            right.addEventListener('click',() =>{
                if(count=== length+(length-1)){
                    count = length
                    countShift = 0
                    Galery.style.cssText= `transform: translate(-${300*length - 300 }px); transition: all 0s ease-in-out`;

                    setTimeout(()=>{
                        main(countShift );
                    },0);
                }else{
                    countShift -= 300
                    main(countShift );
                    count++
                }
            });


        })

    };
// ===================MyGalaryLg===================================


const MyGalaryLg    = () => {

    let Galerys = document.querySelectorAll('.galery');
    Galerys .forEach((Galery)=> {
        let  chost = [];
        let  singles =  [];
       singles = Array.prototype.slice.call(Galery.children);
        let count = 0;




        if(singles.length >= 4){
            singles.splice(0, 1000 )
            chost.splice(0, 1000 )
        }


        // console.log('singles 1 ==> '  + singles.length +' ' +singles)
        // console.log('chost 1 ==> ' + chost.length +' ' + chost)


            for (let i = 0; i < singles.length; ++i) {
            chost[i] = singles[i].innerHTML;
            singles[i].remove();
            }



        function double() {
            for (let c = 0; c < singles.length; ++c) {
                let picture = document.createElement('div');
                picture.classList.add("galery__item");
                picture.innerHTML = chost[c]
                Galery.append(picture)
            }
        }
        double();
        double();



        function MoveTrack(){
    setTimeout(()=>{
        Galery.style.cssText= `transform: translate(-210px); `;}, 0);

    let LastChild =  Galery.lastElementChild.innerHTML;
    // console.log(LastChild)
    Galery.lastElementChild.remove();
    let temp =  document.createElement('div');
    temp.classList.add( "galery__item", "galery__item-add")
    temp.innerHTML = LastChild  ;
    Galery.insertBefore(temp, Galery.firstElementChild)

    Galery.animate([
        { transform:  'translate(-210px)'},
        { transform:  'translate(0px)'},
    ], {
        duration: 3000,
    })

}
// -----------------------
        function main( ){
            if(count === 1){
                count--
                MoveTrack()
            }else{
                count++
                MoveTrack()
            }
            setTimeout(main,3000);
        }
// ---------
        main();



    })



};
// =========================================================




    window.onload=function(){
        if(window.innerWidth <= 767){
            MyGalarySm();

        }else{
            MyGalaryLg();
        }
    }


    let myTimer;
    $(window).resize(function()  {
        var interval = 500;
        clearInterval(myTimer);
        myTimer = setInterval(function () { doAnim(); }, interval);
    });

    function doAnim(){
        clearInterval(myTimer);
        if (window.innerWidth <= 767){ MyGalarySm();}else{MyGalaryLg();}
    }


    // -------
}
