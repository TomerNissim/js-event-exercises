document.addEventListener("DOMContentLoaded", function() {
    const contents = document.getElementById("contents");
    
    contents.addEventListener("click",makingSure);
    
    function makingSure(event){
       let check = confirm("leaving this page?")
       if(!check){
        event.preventDefault()
       }
        
    }
});
