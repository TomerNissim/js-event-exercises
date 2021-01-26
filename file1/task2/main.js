document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("hideTheButton");
    button.addEventListener("click",removeHandler)

    function removeHandler(){
        button.hidden = true;
    }
});