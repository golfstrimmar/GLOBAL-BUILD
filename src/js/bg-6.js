



const MyBg = () => {
        let wrapper = document.querySelector('.block-6__wrapper ');
        let imgs = document.querySelector('.block-6__wrapper-imgs ');
        let form = document.querySelector('.block-6-form ')
        let off = 0;
        let text =  document.querySelector('.block-6__title h2 ').innerHTML;
        let small = document.querySelector('.block-6__text ').innerHTML;

        function offTop() {
            if (window.innerWidth <= 767) {
                off = 185;
                text = "Если готовые дома вам не подходят, заказывайте индивидуальный проект, и мы построим дом вашей мечты!"
                small = "Жмите на кнопку, чтобы обсудить с менеджером проект своего будущего дома!"
            } else if (window.innerWidth <= 1354) {
                off = 480;
                text = "Если ни один из готовых проектов не подходит, можете <br> заказать индивидуальный проект, и мы построим для вас <br>уникальный дом, равных которому не будет."
                small = "Жмите на кнопку ниже, чтобы связаться с менеджером и обсудить<br> проект своего будущего дома!"
            } else if (1355 < window.innerWidth) {
                off = 650;
                text = "Если ни один из готовых проектов не подходит, можете <br> заказать индивидуальный проект, и мы построим для вас <br>уникальный дом, равных которому не будет."
                small = "Жмите на кнопку ниже, чтобы связаться с менеджером и обсудить<br> проект своего будущего дома!"
            }
            document.querySelector('.block-6__title h2 ').innerHTML = text
            document.querySelector('.block-6__text ').innerHTML = small
        }
        offTop()



        function resizeTop() {
            offTop()
            let distanceWrapper = wrapper.getBoundingClientRect();
            let distanceForm = form.getBoundingClientRect();
            let marg = distanceForm.top - distanceWrapper.top
            imgs.style.cssText = `top:  ${marg - off}px!important ; `

        }

        resizeTop();

        window.addEventListener('resize', (e) => {
            resizeTop()
        });


    };

let wrapper = document.querySelectorAll('.block-6__wrapper ');
if (wrapper.length){
    MyBg();
}


