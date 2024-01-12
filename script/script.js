
document.addEventListener('DOMContentLoaded', function(){
    const scrollOverflow = document.querySelector("#overflow-takecontrol");
    const btnleft = document.querySelector("#btn-left");
    const btnright = document.querySelector("#btn-right");
    
    
    btnleft.addEventListener('click', function (event) {
        scrollOverflow.scrollLeft -= 200;
    });
    
    btnright.addEventListener('click', function (event) {
        scrollOverflow.scrollLeft += 200;
    });
});