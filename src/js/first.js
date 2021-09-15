  const Header = () => {
    let menuList = document.querySelector('.menu-list');
    let Hidden = document.querySelector('.menu__hidden-area');
    let p = true;

    function openItems(e) {
      if (p === true) {
        Hidden.style.cssText = " transform: scaleY(1);"
        document.querySelector('.menu__item svg').style.cssText = "transform: rotate(180deg);"
        p = !p
        console.log(p)
      } else {
        Hidden.style.cssText = " transform: scaleY(0);"
        document.querySelector('.menu__item svg').style.cssText = "transform: rotate(0deg);"
        p = !p
        console.log(p)
      }
    }


    if (window.innerWidth <= 767) {
      p = true;
      Hidden.style.cssText = " transform: scaleY(0);"
      menuList.firstElementChild.addEventListener('click', openItems)
    } else {
      Hidden.style.cssText = " transform: scaleY(1);"
      menuList.firstElementChild.removeEventListener('click', openItems)
    }


    window.addEventListener('resize', function (event) {

      if (window.innerWidth <= 767) {
        p = true;
        Hidden.style.cssText = " transform: scaleY(0);"
        menuList.firstElementChild.addEventListener('click', openItems)
      } else {
        Hidden.style.cssText = " transform: scaleY(1);"
        menuList.firstElementChild.removeEventListener('click', openItems)
      }

    });


  };
  Header();


