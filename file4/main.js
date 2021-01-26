document.addEventListener("DOMContentLoaded", function() {

    const list = document.getElementById("ul");
    list.addEventListener("click",selctableList);

    function selctableList(event){
        let target = event.target;
        if (target.tagName != "LI"){
            return;
        }
        if(event.ctrlKey){
            target.className = "selected";
        }else{
            let selectedLi = list.querySelectorAll(".selected");
            for( let li of selectedLi){
                li.classList.remove("selected");
            }
            target.className = "selected";
        }
    }
});    
