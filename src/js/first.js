
// import $ from "jquery";
// ------------------------------------------------

const Header = () => {
  // const burger =   document.querySelector('.header__burger');
  // const menu =  document.querySelector('.menu');
  // const info = document.createElement('div');

//   burger.addEventListener('click', function (event) {
//   menu.classList.add("menu-active");
//   info.classList.add("header__info", "info");
//   info.innerHTML = "<a class='info_phone' href='#!'>+7(000) 123 45 65</a><div class='info_search '><input type='text' placeholder='Поиск' /><svg> <use xlink:href='/assets/img/sprite.svg#search'></use></svg><input type='submit'/></div>"
//   menu.append(info);
//   function activeInfo() {
//   info.classList.add("info-active")
//   }
//   setTimeout(activeInfo, 200);
//   document.querySelector("body").classList.add("lock");
//   });
//
// // --------------------------
//
// document.querySelector('.header__close').addEventListener('click', function (event) {
//   menu.classList.remove("menu-active");
//   menu.querySelector('.info').remove();
//   info.classList.remove("info-active");
//   document.querySelector('body').classList.remove("lock");
// });

// --------------------------


  // let  YOffset  = 157
  //  window.addEventListener("scroll", function (event) {
  //
  //    if (window.pageYOffset > YOffset) {
  //      let  wrapper =  document.querySelector(".header__menu-wrapper" );
  //      wrapper.classList.add('responciveHeader');
  //    } else {
  //      document.querySelector(".header__menu-wrapper").classList.remove("responciveHeader");
  //    }
  //  });
  //
  // window.onresize = function (){
  //   if (window.innerWidth <= 1200) {
  //     YOffset = 236
  //   }else{
  //     YOffset  = 157
  //   }
  //
  // }

  let menuList  =   document.querySelector('.menu-list');
  let  hidden =   document.querySelector('.menu-list__hidden-sm-area');
  let c  =   true;
  // let   =   document.querySelector('');
  let singles = Array.prototype.slice.call(menuList .children);
  for (var i = 0; i < singles.length; ++i) {
  singles[i].style.cssText= "max-height: 0; opacity: 0; z-index: -2;"
  }
  singles[0].style.cssText= "max-height: 100px; opacity: 1; z-index: 1;"

  singles[0].addEventListener('click',(e) =>{
    if(c === true){
      singles[0].nextElementSibling.style.cssText= "max-height: 100px; opacity: 1; z-index: 1;background: hsla(0,0%,100%,.5)"
      singles[0].querySelector('svg').style.cssText= "transform: rotate(180deg); transition: all .2s ease-in-out;";

      c = false
    }else{
      singles[0].nextElementSibling.style.cssText= "max-height: 0; opacity: 0; z-index: -2;background: hsla(0,0%,100%,.5)"
      singles[0].querySelector('svg').style.cssText= "transform: rotate(0deg);transition: all .2s ease-in-out;";
      c = true
    }



  });

};Header();


