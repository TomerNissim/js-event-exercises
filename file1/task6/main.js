document.addEventListener("DOMContentLoaded", function() {
    const horse = document.getElementById("horse");
    const horseButton = document.getElementById("horse-Button");
    const donkey = document.getElementById("donkey");
    const donkeyButton = document.getElementById("donkey-Button");
    const cat = document.getElementById("cat");
    const catButton = document.getElementById("cat-Button");
  //  const removeButton = document.querySelectorAll(".remove-button");
    horseButton.addEventListener("click",removeHorseMessage);

    function removeHorseMessage(){
        horse.remove();
    }
    donkeyButton.addEventListener("click",removeDonkeyMessage);

    function removeDonkeyMessage(){
        donkey.remove();
    }
    catButton.addEventListener("click",removeCatMessage);

    function removeCatMessage(){
        cat.remove();
    }

});