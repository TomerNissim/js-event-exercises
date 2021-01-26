document.addEventListener("DOMContentLoaded", function() {

    const menuClosed = document.getElementById("menuClosed");
    const menuOpened = document.getElementById("menuOpened");
    menuOpened.hidden = true;
    menuClosed.addEventListener("click",openMenu);
    menuOpened.addEventListener("click",closeMenu);
    
    function openMenu(){
        menuOpened.hidden = false;
        menuClosed.hidden = true;
    }
    function closeMenu(){
        menuOpened.hidden = true;
        menuClosed.hidden = false;
    }
});