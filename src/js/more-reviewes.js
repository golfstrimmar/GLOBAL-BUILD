

if(window.location.pathname == '/') {


    var e = document.querySelectorAll(".reviews-card-review__hidden"), t = Array.from(e), n = !0;
    t.forEach((function (e) {
        e.style.cssText = "";
        var t = e.nextElementSibling, i = e.offsetHeight;
        e.setAttribute("style", "max-height: 0px;  z-index: -1; "),
            t.addEventListener("click", (function () {
                console.log(i),
                    !1 === n ? (e.setAttribute("style", "max-height: 0px;  z-index: -1;"),
                        n = !0) : !1 !== n && (e.setAttribute("style", "max-height:" + i + "px;  z-index: 1; "), n = !1)
            }))
    }))


    const MyReviewes = () => {
        let d = document.querySelector(".reviews-card-review__hidden");
        let p = true;
        let h = d.nextElementSibling;
        // let  f = d.offsetHeight;
        let textProjects = d.innerHTML;
        // d.setAttribute("style", "max-height: 0px;  z-index: -2; opacity:  0;");

        h.addEventListener("click", (function () {
                if (p === false) {
                    d.setAttribute("style", "max-height: 0px;  z-index: -2; opacity:  0;");
                    h.textContent = "Читать далее...";
                    p = true;
                    setTimeout(() => {
                        d.innerHTML = ""
                    }, 200);


                } else {
                    d.setAttribute("style", "max-height: " + 200 + "px;  z-index: 1; opacity:  1;");
                    h.textContent = "Свернуть";
                    d.innerHTML = textProjects
                    setTimeout(() => {
                        d.innerHTML = textProjects
                    }, 200);
                    p = false;
                }
            })
        );
    };
    MyReviewes();


}