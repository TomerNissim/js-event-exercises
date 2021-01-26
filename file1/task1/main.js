document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("hideButton");
    const div = document.getElementById("text");


    button.addEventListener("click",removeText);

    function removeText(){
        div.style.display = "none";
    } 
});
