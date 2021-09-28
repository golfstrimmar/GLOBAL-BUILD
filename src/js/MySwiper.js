import Swiper from 'swiper/swiper-bundle.min.js';




const swiper = new Swiper(".block-10__swiper", {
    navigation: {
        prevEl: '.block-10-arrow-prev',
        nextEl: '.block-10-arrow-next',

    },
    loop: 'true',
    speed: 800,
    slideToClickedSlide: true,
    allowTouchMove: true,
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {

        // when window width is >=768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
            slidesPerGroup: 1,
            spaceBetween: 40,
            slidesPerView: 3,
        }
    }

})








localStorage.setItem('Name', '0');

// ===================================================================
const reviews1 = new Swiper(".reviews-card__galery-1", {
    navigation: {
        prevEl: '.reviews-card-arrow-prev-1',
        nextEl: '.reviews-card-arrow-next-1',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: 'true',
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        768: {
            spaceBetween: 18,
            slidesPerView: 3,
            loop: 'true',
            autoplay: {
                delay: 2000
            },
        },
    },
})



reviews1.on("click", function() {
    function initPopupCommon() {

        let Parent = document.querySelector('html');
        let singles = Array.from(document.getElementsByClassName('button-popup'))
        singles.forEach((cell) => {
// ----------------------------------
            function initCommon(){
                let id =cell.getAttribute("rel")
                let popup =     document.querySelector(id);
                let currentFirst = cell.getAttribute('name')

                localStorage.clear();
                localStorage.setItem('Name',  currentFirst)

                const swiperPopup1 = new Swiper(".slider-popup__container", {
                    navigation: {
                        prevEl: '.slider-popup-arrow-prev',
                        nextEl: '.slider-popup-arrow-next',
                    },
                    init: false,
                })
// инициализация слайдера на попапе================
                swiperPopup1.on('init', function() {
                    let  cat =    localStorage.getItem('Name')
                    swiperPopup1.slideToLoop ( cat );
                });
                swiperPopup1.init();
                // / инициализация слайдера на попапе================


                popup.animate([
                    { opacity:  '0' },
                    { opacity: '1' }
                ], {
                    duration: 200,
                })
                setTimeout(()=>{
                    popup.style.cssText= "opacity: 1;  display: block; ";
                }, 200);

                document.querySelector("body").style.cssText= "overflow: hidden"
                let overlay =  popup.querySelector('.popup__overlay');
                let close = popup.querySelector('.popup__close');

                close.addEventListener('click',(e) =>{
                    document.querySelector("body").style.cssText= "overflow: visible"
                    popup.animate([
                        { opacity:  '1' },
                        { opacity: '0' }
                    ], {
                        duration: 200,
                    })
                    setTimeout(()=>{
                        popup.style.cssText= "opacity: 0;  display: none; ";
                    }, 200);
                });

                overlay.addEventListener('click',(e) =>{
                    if (e.target.classList.contains("popup__overlay")) {
                        popup.animate([
                            { opacity:  '1' },
                            { opacity: '0' }
                        ], {
                            duration: 200,
                        })
                        setTimeout(()=>{
                            popup.style.cssText= "opacity: 0;  display: none; ";
                        }, 200);
                        document.querySelector("body").style.cssText= "overflow: visible"
                    }
                });

            }
// -----------------------------
            cell.addEventListener('click',(e) =>{
                initCommon();
            });

        })
    }
    initPopupCommon();
});


// ==========================================================================================

const reviews2 = new Swiper(".reviews-card__galery-2", {
    navigation: {
        prevEl: '.reviews-card-arrow-prev-2',
        nextEl: '.reviews-card-arrow-next-2',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: 'true',
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        768: {
            spaceBetween: 18,
            slidesPerView: 3,
            loop: 'true',
            autoplay: {
                delay: 2000
            },
        },
    },
})


reviews2.on("click", function() {
    function initPopupCommon() {

        let Parent = document.querySelector('html');
        let singles = Array.from(document.getElementsByClassName('button-popup'))
        singles.forEach((cell) => {
// ----------------------------------
            function initCommon(){
                let id =cell.getAttribute("rel")
                let popup =     document.querySelector(id);
                let currentFirst = cell.getAttribute('name')

                localStorage.clear();
                localStorage.setItem('Name',  currentFirst)

                const swiperPopup1 = new Swiper(".slider-popup__container", {
                    navigation: {
                        prevEl: '.slider-popup-arrow-prev',
                        nextEl: '.slider-popup-arrow-next',
                    },
                    init: false,
                })
// инициализация слайдера на попапе================
                swiperPopup1.on('init', function() {
                    let  cat =    localStorage.getItem('Name')
                    swiperPopup1.slideToLoop ( cat );
                });
                swiperPopup1.init();
                // / инициализация слайдера на попапе================


                popup.animate([
                    { opacity:  '0' },
                    { opacity: '1' }
                ], {
                    duration: 200,
                })
                setTimeout(()=>{
                    popup.style.cssText= "opacity: 1;  display: block; ";
                }, 200);

                document.querySelector("body").style.cssText= "overflow: hidden"
                let overlay =  popup.querySelector('.popup__overlay');
                let close = popup.querySelector('.popup__close');

                close.addEventListener('click',(e) =>{
                    document.querySelector("body").style.cssText= "overflow: visible"
                    popup.animate([
                        { opacity:  '1' },
                        { opacity: '0' }
                    ], {
                        duration: 200,
                    })
                    setTimeout(()=>{
                        popup.style.cssText= "opacity: 0;  display: none; ";
                    }, 200);
                });

                overlay.addEventListener('click',(e) =>{
                    if (e.target.classList.contains("popup__overlay")) {
                        popup.animate([
                            { opacity:  '1' },
                            { opacity: '0' }
                        ], {
                            duration: 200,
                        })
                        setTimeout(()=>{
                            popup.style.cssText= "opacity: 0;  display: none; ";
                        }, 200);
                        document.querySelector("body").style.cssText= "overflow: visible"
                    }
                });

            }
// -----------------------------
            cell.addEventListener('click',(e) =>{
                initCommon();
            });

        })
    }
    initPopupCommon();
});


// ==========================================================================================

const reviews3 = new Swiper(".reviews-card__galery-3", {
    navigation: {
        prevEl: '.reviews-card-arrow-prev-3',
        nextEl: '.reviews-card-arrow-next-3',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: 'true',
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        768: {
            spaceBetween: 18,
            slidesPerView: 3,
            loop: 'true',
            autoplay: {
                delay: 2000
            },
        },
    },
})


reviews3.on("click", function() {
    function initPopupCommon() {

        let Parent = document.querySelector('html');
        let singles = Array.from(document.getElementsByClassName('button-popup'))
        singles.forEach((cell) => {
// ----------------------------------
            function initCommon(){
                let id =cell.getAttribute("rel")
                let popup =     document.querySelector(id);
                let currentFirst = cell.getAttribute('name')

                localStorage.clear();
                localStorage.setItem('Name',  currentFirst)

                const swiperPopup1 = new Swiper(".slider-popup__container", {
                    navigation: {
                        prevEl: '.slider-popup-arrow-prev',
                        nextEl: '.slider-popup-arrow-next',
                    },
                    init: false,
                })
// инициализация слайдера на попапе================
                swiperPopup1.on('init', function() {
                    let  cat =    localStorage.getItem('Name')
                    swiperPopup1.slideToLoop ( cat );
                });
                swiperPopup1.init();
                // / инициализация слайдера на попапе================


                popup.animate([
                    { opacity:  '0' },
                    { opacity: '1' }
                ], {
                    duration: 200,
                })
                setTimeout(()=>{
                    popup.style.cssText= "opacity: 1;  display: block; ";
                }, 200);

                document.querySelector("body").style.cssText= "overflow: hidden"
                let overlay =  popup.querySelector('.popup__overlay');
                let close = popup.querySelector('.popup__close');

                close.addEventListener('click',(e) =>{
                    document.querySelector("body").style.cssText= "overflow: visible"
                    popup.animate([
                        { opacity:  '1' },
                        { opacity: '0' }
                    ], {
                        duration: 200,
                    })
                    setTimeout(()=>{
                        popup.style.cssText= "opacity: 0;  display: none; ";
                    }, 200);
                });

                overlay.addEventListener('click',(e) =>{
                    if (e.target.classList.contains("popup__overlay")) {
                        popup.animate([
                            { opacity:  '1' },
                            { opacity: '0' }
                        ], {
                            duration: 200,
                        })
                        setTimeout(()=>{
                            popup.style.cssText= "opacity: 0;  display: none; ";
                        }, 200);
                        document.querySelector("body").style.cssText= "overflow: visible"
                    }
                });

            }
// -----------------------------
            cell.addEventListener('click',(e) =>{
                initCommon();
            });

        })
    }
    initPopupCommon();
});


// ==========================================================================================



const reviews4= new Swiper(".reviews-card__galery-4", {
    navigation: {
        prevEl: '.reviews-card-arrow-prev-4',
        nextEl: '.reviews-card-arrow-next-4',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: 'true',
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        768: {
            spaceBetween: 18,
            slidesPerView: 3,
            loop: 'true',
            autoplay: {
                delay: 2000
            },
        },
    },
})


reviews4.on("click", function() {
    function initPopupCommon() {

        let Parent = document.querySelector('html');
        let singles = Array.from(document.getElementsByClassName('button-popup'))
        singles.forEach((cell) => {
// ----------------------------------
            function initCommon(){
                let id =cell.getAttribute("rel")
                let popup =     document.querySelector(id);
                let currentFirst = cell.getAttribute('name')

                localStorage.clear();
                localStorage.setItem('Name',  currentFirst)

                const swiperPopup1 = new Swiper(".slider-popup__container", {
                    navigation: {
                        prevEl: '.slider-popup-arrow-prev',
                        nextEl: '.slider-popup-arrow-next',
                    },
                    init: false,
                })
// инициализация слайдера на попапе================
                swiperPopup1.on('init', function() {
                    let  cat =    localStorage.getItem('Name')
                    swiperPopup1.slideToLoop ( cat );
                });
                swiperPopup1.init();
                // / инициализация слайдера на попапе================


                popup.animate([
                    { opacity:  '0' },
                    { opacity: '1' }
                ], {
                    duration: 200,
                })
                setTimeout(()=>{
                    popup.style.cssText= "opacity: 1;  display: block; ";
                }, 200);

                document.querySelector("body").style.cssText= "overflow: hidden"
                let overlay =  popup.querySelector('.popup__overlay');
                let close = popup.querySelector('.popup__close');

                close.addEventListener('click',(e) =>{
                    document.querySelector("body").style.cssText= "overflow: visible"
                    popup.animate([
                        { opacity:  '1' },
                        { opacity: '0' }
                    ], {
                        duration: 200,
                    })
                    setTimeout(()=>{
                        popup.style.cssText= "opacity: 0;  display: none; ";
                    }, 200);
                });

                overlay.addEventListener('click',(e) =>{
                    if (e.target.classList.contains("popup__overlay")) {
                        popup.animate([
                            { opacity:  '1' },
                            { opacity: '0' }
                        ], {
                            duration: 200,
                        })
                        setTimeout(()=>{
                            popup.style.cssText= "opacity: 0;  display: none; ";
                        }, 200);
                        document.querySelector("body").style.cssText= "overflow: visible"
                    }
                });

            }
// -----------------------------
            cell.addEventListener('click',(e) =>{
                initCommon();
            });

        })
    }
    initPopupCommon();
});


// ==========================================================================================

const reviews5= new Swiper(".reviews-card__galery-5", {
    navigation: {
        prevEl: '.reviews-card-arrow-prev-5',
        nextEl: '.reviews-card-arrow-next-5',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: 'true',
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        768: {
            spaceBetween: 18,
            slidesPerView: 3,
            loop: 'true',
            autoplay: {
                delay: 2000
            },
        },
    },
})


reviews5.on("click", function() {
    function initPopupCommon() {

        let Parent = document.querySelector('html');
        let singles = Array.from(document.getElementsByClassName('button-popup'))
        singles.forEach((cell) => {
// ----------------------------------
            function initCommon(){
                let id =cell.getAttribute("rel")
                let popup =     document.querySelector(id);
                let currentFirst = cell.getAttribute('name')

                localStorage.clear();
                localStorage.setItem('Name',  currentFirst)

                const swiperPopup1 = new Swiper(".slider-popup__container", {
                    navigation: {
                        prevEl: '.slider-popup-arrow-prev',
                        nextEl: '.slider-popup-arrow-next',
                    },
                    init: false,
                })
// инициализация слайдера на попапе================
                swiperPopup1.on('init', function() {
                    let  cat =    localStorage.getItem('Name')
                    swiperPopup1.slideToLoop ( cat );
                });
                swiperPopup1.init();
                // / инициализация слайдера на попапе================


                popup.animate([
                    { opacity:  '0' },
                    { opacity: '1' }
                ], {
                    duration: 200,
                })
                setTimeout(()=>{
                    popup.style.cssText= "opacity: 1;  display: block; ";
                }, 200);

                document.querySelector("body").style.cssText= "overflow: hidden"
                let overlay =  popup.querySelector('.popup__overlay');
                let close = popup.querySelector('.popup__close');

                close.addEventListener('click',(e) =>{
                    document.querySelector("body").style.cssText= "overflow: visible"
                    popup.animate([
                        { opacity:  '1' },
                        { opacity: '0' }
                    ], {
                        duration: 200,
                    })
                    setTimeout(()=>{
                        popup.style.cssText= "opacity: 0;  display: none; ";
                    }, 200);
                });

                overlay.addEventListener('click',(e) =>{
                    if (e.target.classList.contains("popup__overlay")) {
                        popup.animate([
                            { opacity:  '1' },
                            { opacity: '0' }
                        ], {
                            duration: 200,
                        })
                        setTimeout(()=>{
                            popup.style.cssText= "opacity: 0;  display: none; ";
                        }, 200);
                        document.querySelector("body").style.cssText= "overflow: visible"
                    }
                });

            }
// -----------------------------
            cell.addEventListener('click',(e) =>{
                initCommon();
            });

        })
    }
    initPopupCommon();
});


// ==========================================================================================

const reviews6= new Swiper(".reviews-card__galery-6", {
    navigation: {
        prevEl: '.reviews-card-arrow-prev-6',
        nextEl: '.reviews-card-arrow-next-6',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: 'true',
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        768: {
            spaceBetween: 18,
            slidesPerView: 3,
            loop: 'true',
            autoplay: {
                delay: 2000
            },
        },
    },
})


reviews6.on("click", function() {
    function initPopupCommon() {

        let Parent = document.querySelector('html');
        let singles = Array.from(document.getElementsByClassName('button-popup'))
        singles.forEach((cell) => {
// ----------------------------------
            function initCommon(){
                let id =cell.getAttribute("rel")
                let popup =     document.querySelector(id);
                let currentFirst = cell.getAttribute('name')

                localStorage.clear();
                localStorage.setItem('Name',  currentFirst)

                const swiperPopup1 = new Swiper(".slider-popup__container", {
                    navigation: {
                        prevEl: '.slider-popup-arrow-prev',
                        nextEl: '.slider-popup-arrow-next',
                    },
                    init: false,
                })
// инициализация слайдера на попапе================
                swiperPopup1.on('init', function() {
                    let  cat =    localStorage.getItem('Name')
                    swiperPopup1.slideToLoop ( cat );
                });
                swiperPopup1.init();
                // / инициализация слайдера на попапе================


                popup.animate([
                    { opacity:  '0' },
                    { opacity: '1' }
                ], {
                    duration: 200,
                })
                setTimeout(()=>{
                    popup.style.cssText= "opacity: 1;  display: block; ";
                }, 200);

                document.querySelector("body").style.cssText= "overflow: hidden"
                let overlay =  popup.querySelector('.popup__overlay');
                let close = popup.querySelector('.popup__close');

                close.addEventListener('click',(e) =>{
                    document.querySelector("body").style.cssText= "overflow: visible"
                    popup.animate([
                        { opacity:  '1' },
                        { opacity: '0' }
                    ], {
                        duration: 200,
                    })
                    setTimeout(()=>{
                        popup.style.cssText= "opacity: 0;  display: none; ";
                    }, 200);
                });

                overlay.addEventListener('click',(e) =>{
                    if (e.target.classList.contains("popup__overlay")) {
                        popup.animate([
                            { opacity:  '1' },
                            { opacity: '0' }
                        ], {
                            duration: 200,
                        })
                        setTimeout(()=>{
                            popup.style.cssText= "opacity: 0;  display: none; ";
                        }, 200);
                        document.querySelector("body").style.cssText= "overflow: visible"
                    }
                });

            }
// -----------------------------
            cell.addEventListener('click',(e) =>{
                initCommon();
            });

        })
    }
    initPopupCommon();
});


// ==========================================================================================

const reviews7= new Swiper(".reviews-card__galery-7", {
    navigation: {
        prevEl: '.reviews-card-arrow-prev-7',
        nextEl: '.reviews-card-arrow-next-7',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: 'true',
    speed: 1000,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        768: {
            spaceBetween: 18,
            slidesPerView: 3,
            loop: 'true',
            autoplay: {
                delay: 2000
            },
        },
    },
})


reviews7.on("click", function() {
    function initPopupCommon() {

        let Parent = document.querySelector('html');
        let singles = Array.from(document.getElementsByClassName('button-popup'))
        singles.forEach((cell) => {
// ----------------------------------
            function initCommon(){
                let id =cell.getAttribute("rel")
                let popup =     document.querySelector(id);
                let currentFirst = cell.getAttribute('name')

                localStorage.clear();
                localStorage.setItem('Name',  currentFirst)

                const swiperPopup1 = new Swiper(".slider-popup__container", {
                    navigation: {
                        prevEl: '.slider-popup-arrow-prev',
                        nextEl: '.slider-popup-arrow-next',
                    },
                    init: false,
                })
// инициализация слайдера на попапе================
                swiperPopup1.on('init', function() {
                    let  cat =    localStorage.getItem('Name')
                    swiperPopup1.slideToLoop ( cat );
                });
                swiperPopup1.init();
                // / инициализация слайдера на попапе================


                popup.animate([
                    { opacity:  '0' },
                    { opacity: '1' }
                ], {
                    duration: 200,
                })
                setTimeout(()=>{
                    popup.style.cssText= "opacity: 1;  display: block; ";
                }, 200);

                document.querySelector("body").style.cssText= "overflow: hidden"
                let overlay =  popup.querySelector('.popup__overlay');
                let close = popup.querySelector('.popup__close');

                close.addEventListener('click',(e) =>{
                    document.querySelector("body").style.cssText= "overflow: visible"
                    popup.animate([
                        { opacity:  '1' },
                        { opacity: '0' }
                    ], {
                        duration: 200,
                    })
                    setTimeout(()=>{
                        popup.style.cssText= "opacity: 0;  display: none; ";
                    }, 200);
                });

                overlay.addEventListener('click',(e) =>{
                    if (e.target.classList.contains("popup__overlay")) {
                        popup.animate([
                            { opacity:  '1' },
                            { opacity: '0' }
                        ], {
                            duration: 200,
                        })
                        setTimeout(()=>{
                            popup.style.cssText= "opacity: 0;  display: none; ";
                        }, 200);
                        document.querySelector("body").style.cssText= "overflow: visible"
                    }
                });

            }
// -----------------------------
            cell.addEventListener('click',(e) =>{
                initCommon();
            });

        })
    }
    initPopupCommon();
});


// ==========================================================================================







const swiperTop = new Swiper(".reviews-top-swiper", {

    navigation: {
        prevEl: '.reviews-top-prev',
        nextEl: '.reviews-top-next',
    },
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    spaceBetween: 0,
slideToClickedSlide:  true,
loopedSlides: 6,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1350: {
            slidesPerView: 6,
            spaceBetween: 40,
        }
    },
})







const swiperLow = new Swiper(".reviews-low-swiper", {

    navigation: {
        prevEl: '.reviews-low-prev',
        nextEl: '.reviews-low-next',
    },
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    loopedSlides: 6,
    768: {
        loop: true,
        loopedSlides: 6,
    },
})


swiperTop.controller.control = swiperLow
swiperLow.controller.control = swiperTop






const swiperStage= new Swiper(" .swiper-stage", {

    navigation: {
        prevEl: '.arrow-stage-1-prev',
        nextEl: '.arrow-stage-1-next',
    },
    slidesPerView: 1,
    slideToClickedSlide:  true,
    loop: true,
    loopedSlides: 6,
    speed: 1000,
    spaceBetween: 0,
    breakpoints: {
        768: {
            slidesPerView: 6,
            spaceBetween: 40,
            slideToClickedSlide:  true,
            loop: true,
            loopedSlides: 6,
            speed: 1000,
            },
    },

})
const swiperStage2 = new Swiper(" .swiper-stage-2", {

    navigation: {
        prevEl: '.arrow-stage-2-prev',
        nextEl: '.arrow-stage-2-next',
    },
    slidesPerView: 1,
    slideToClickedSlide:  true,
    loop: true,
    loopedSlides: 6,
    speed: 1000,
    spaceBetween: 0,
    breakpoints: {
        768: {
            slidesPerView: 6,
            spaceBetween: 40,
            slideToClickedSlide:  true,
            loop: true,
            loopedSlides: 6,
            speed: 1000,
            },
    },

})



const swiperInner = new Swiper(".swiper-stage-inner", {


    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoHeight: true,
    loopedSlides: 6,
    navigation: {
        nextEl: '.stage-inner__button',
    },

})


const swiperInner2= new Swiper(".swiper-stage-inner-2", {


    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoHeight: true,
    loopedSlides: 6,
    navigation: {
        nextEl: '.stage-inner__button-2',
    },

})





swiperInner.on('slideChangeTransitionStart', function () {
    document.querySelector('.stage-inner__button').style.opacity= " 0  "
})
swiperInner.on('slideChangeTransitionEnd', function () {
    document.querySelector('.stage-inner__button').style.opacity= " 1 "
})

swiperInner2.on('slideChangeTransitionStart', function () {
    document.querySelector('.stage-inner__button-2').style.opacity= " 0  "
})
swiperInner2.on('slideChangeTransitionEnd', function () {
    document.querySelector('.stage-inner__button-2').style.opacity= " 1 "
})



swiperStage.controller.control = swiperInner
swiperInner .controller.control = swiperStage
swiperStage2.controller.control = swiperInner2
swiperInner2.controller.control = swiperStage2



// ===============single==================
const swiperSingleTop= new Swiper(".slider-single-top-js", {

    slidesPerView: 1,
    spaceBetween: 0,
    loop: 'true',
    speed: 1000,
    effect: 'fade',
    autoplay: {
        delay: 2000
    },
    // breakpoints: {
    //     768: {
    //         spaceBetween: 18,
    //         slidesPerView: 3,
    //         loop: 'true',
    //         autoplay: {
    //             delay: 2000
    //         },
    //     },
    // },

})


const swiperSingleBottom= new Swiper(".slider-single-bottom-js", {

    navigation: {
        prevEl: '.slider-single-bottom-prev',
        nextEl: '.slider-single-bottom-next',
    },
    slidesPerView: 1,
    loop: 'true',
    speed: 1000,
    spaceBetween: 0,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        768: {
            spaceBetween: 25,
            slidesPerView: 3,
            loop: 'true',
            autoplay: {
                delay: 2000
            },

        },
    },

})


swiperSingleTop.on("click", function() {
    const Mypopup = () => {

        let Parent = document.querySelector('html');
        let singles = Array.from(document.getElementsByClassName('popup-init-js'))
        singles.forEach((cell) => {

            function initPopup() {

                let id =cell.getAttribute("rel")

                let popup = document.querySelector(id);
                popup.animate([
                    {opacity: '0'},
                    {opacity: '1'}
                ], {
                    duration: 200,
                })
                setTimeout(() => {
                    popup.style.cssText = "opacity: 1;  display: block; ";
                }, 200);
                if (popup.classList.contains('popup-video')){
                    document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
                }
                document.querySelector("body").style.cssText = "overflow: hidden"
                let overlay = popup.querySelector('.popup__overlay');
                let close = popup.querySelector('.popup__close');

                close.addEventListener('click', (e) => {
                    document.querySelector("body").style.cssText = "overflow: visible"
                    popup.animate([
                        {opacity: '1'},
                        {opacity: '0'}
                    ], {
                        duration: 200,
                    })
                    setTimeout(() => {
                        popup.style.cssText = "opacity: 0;  display: none; ";
                    }, 200);
                    if (popup.classList.contains('popup-video')){
                        document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
                    }
                });

                overlay.addEventListener('click', (e) => {
                    if (e.target.classList.contains("popup__overlay")) {
                        popup.animate([
                            {opacity: '1'},
                            {opacity: '0'}
                        ], {
                            duration: 200,
                        })
                        setTimeout(() => {
                            popup.style.cssText = "opacity: 0;  display: none; ";
                        }, 200);
                        document.querySelector("body").style.cssText = "overflow: visible"
                        if (popup.classList.contains('popup-video')){
                            document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
                        }
                    }
                });

            }

            cell.addEventListener('click',(e) =>{
                initPopup();
            });
        });



    };Mypopup();



})


swiperSingleBottom.on("click", function() {
    function initPopupCommon() {

        let Parent = document.querySelector('html');
        let singles = Array.from(document.getElementsByClassName('button-popup'))
        singles.forEach((cell) => {
// ----------------------------------
            function initCommon(){
                let id =cell.getAttribute("rel")
                let popup =     document.querySelector(id);
                let currentFirst = cell.getAttribute('name')

                localStorage.clear();
                localStorage.setItem('Name',  currentFirst)

                const swiperPopup2= new Swiper(".slider-popup__container-2", {
                    navigation: {
                        prevEl: '.slider-popup-2-arrow-prev',
                        nextEl: '.slider-popup-2-arrow-next',
                    },
                    init: false,
                })
// инициализация слайдера на попапе================
                swiperPopup2.on('init', function() {
                    let  cat =    localStorage.getItem('Name')
                    swiperPopup2.slideToLoop ( cat );
                });
                swiperPopup2.init();
                // / инициализация слайдера на попапе================


                popup.animate([
                    { opacity:  '0' },
                    { opacity: '1' }
                ], {
                    duration: 200,
                })
                setTimeout(()=>{
                    popup.style.cssText= "opacity: 1;  display: block; ";
                }, 200);

                document.querySelector("body").style.cssText= "overflow: hidden"
                let overlay =  popup.querySelector('.popup__overlay');
                let close = popup.querySelector('.popup__close');

                close.addEventListener('click',(e) =>{
                    document.querySelector("body").style.cssText= "overflow: visible"
                    popup.animate([
                        { opacity:  '1' },
                        { opacity: '0' }
                    ], {
                        duration: 200,
                    })
                    setTimeout(()=>{
                        popup.style.cssText= "opacity: 0;  display: none; ";
                    }, 200);
                });

                overlay.addEventListener('click',(e) =>{
                    if (e.target.classList.contains("popup__overlay")) {
                        popup.animate([
                            { opacity:  '1' },
                            { opacity: '0' }
                        ], {
                            duration: 200,
                        })
                        setTimeout(()=>{
                            popup.style.cssText= "opacity: 0;  display: none; ";
                        }, 200);
                        document.querySelector("body").style.cssText= "overflow: visible"
                    }
                });

            }
// -----------------------------
            cell.addEventListener('click',(e) =>{
                initCommon();
            });

        })
    }
    initPopupCommon();
});