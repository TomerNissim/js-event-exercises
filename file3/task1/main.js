document.addEventListener("DOMContentLoaded", function() {
    
    const container = document.getElementById("container");

    container.addEventListener("click",removeMassage);

    function removeMassage(event){
        let target = event.target.closest("div");
        target.remove(); 
    }

});    