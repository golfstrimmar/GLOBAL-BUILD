'use strict'

class SliderCarousel1 {

    constructor({
                    main,
                    wrap,
                    next,
                    prev,
                    infinity= false,
                    position= 0,
                    slidesToShow = 2

    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow= slidesToShow;
        this.slides = document.querySelector(wrap).children;
        this.options={
            position,
            infinity,
            widthSlide :  Math.floor(100 / this.slidesToShow)
        }
    };

    init(){
     this.addGloClass();
     this.addStyle();
     if(this.prev   &&   this.next){
        this.controlSlider();
     }else{
         this.addArrow();
         this.controlSlider();
     }
    }

  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    for (const item of this.slides){
        item.classList.add("glo-slider__item")
    } }

addStyle(){
        const style = document.createElement('style');
        style.id = "sliderCarousel-style";
        document.head.appendChild(style);
    style.textContent= `
        .glo-slider{
        overflow: hidden;
    }
    .glo-slider__wrap{
        display: flex;
        transition: all .2s ease-in-out;
        will-change: transform;
    }
    .glo-slider__item{
    margin: auto 0;
    flex:  0 0  ${this.options.widthSlide}%;
    }
        `
}

controlSlider(){
this.prev.addEventListener('click', this.prevSlider.bind(this));
this.next.addEventListener('click', this.nextSlider.bind(this));
}



prevSlider(){
        if ( this.options.infinity  ||   this.options.position > 0){
--this.options.position;
console.log(this.options.position);
this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
}



nextSlider(){
        if (   this.options.infinity  ||      this.options.position < this.slides.length - this.slidesToShow){
++this.options.position;
console.log(this.options.position);

if (    this.options.position  >  this.slides.length  -  this.slidesToShow  ){
    this.options.position = 0;
}

this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
}




addArrow(){

}


}
// ---------------------------------------------------------------------
const options ={
    main:  '.companies__wrapper',
    wrap: '.companies-hor',
    prev: '#test-left',
    next: '#test-right',
    infinite : true
}

const carousel = new SliderCarousel1(options );
carousel.init();






