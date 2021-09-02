const MyQCard = () => {
    var ul = document.querySelector(".QContent__cards");

    let singles = Array.prototype.slice.call(ul .children);
    singles.forEach((cell)=>{

        cell.addEventListener('click', function(){
            singles .forEach((child)=>{
                child.classList.remove("QCard--active")
            });
            cell.classList.add("QCard--active")
        });


    })

};MyQCard();