

if(window.location.pathname == '/') {

    const MyMore = () => {
        let projects = document.querySelector(".projects-js");
        let singles = Array.prototype.slice.call(projects.children);
        let button = projects.nextElementSibling;
        let number = 0
        let p = true;
        let copyText = [];
// -----------------
        for (let i = 0; i < singles.length; ++i) {
            copyText[i] = singles[i].innerHTML;
            singles[i].remove();
        }


        // ---------------------------------
        if (window.innerWidth <= 767) {
            number = 1;
        } else {
            number = 6
        }

        function CreateElement(n) {
            for (let c = 0; c < n; ++c) {
                let newProject = document.createElement('div');
                newProject.classList.add("block-5__card", "future-card");
                newProject.innerHTML = copyText[c];
                projects.appendChild(newProject)
            }
        }

        CreateElement(number);


        // ----------------------
        window.addEventListener('resize', function (event) {
            number = window.innerWidth <= 767 ? 1 : 6
            let myNode = document.getElementsByClassName("future-card");
            let el;
            while ((el = myNode[0])) {
                el.parentNode.removeChild(el);
            }
            CreateElement(number);
        });
        // ------------------------


        const RemoveElement = () => {
            let myNode = document.getElementsByClassName("add-card");
            let el;
            while ((el = myNode[0])) {
                el.parentNode.removeChild(el);
            }
        }


        const ButtonText = (pr) => {
            if (pr === false) {
                button.innerText = "Свернуть"
            } else {
                button.innerText = "Смотреть все проекты  "
            }
        }

        button.addEventListener("click", (function () {
            if (p === true) {
                for (let c = number; c < singles.length; ++c) {
                    let newProject = document.createElement('div');
                    newProject.classList.add("block-5__card", "future-card", "add-card");
                    newProject.innerHTML = copyText[c];
                    projects.appendChild(newProject)
                }
                p = false;
                ButtonText(p)
            } else {
                RemoveElement()
                p = true;
                ButtonText(p)
            }
        }))

//---------------------------------


    };
    MyMore();

}