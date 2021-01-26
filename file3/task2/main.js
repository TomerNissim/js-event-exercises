document.addEventListener("DOMContentLoaded", function() {

    const tree = document.getElementById("tree");
    
    for (let li of tree.querySelectorAll('li')) {
        let span = document.createElement('span');
        li.prepend(span);
        span.append(span.nextSibling); 
      }

    tree.addEventListener("click", treeMenu);

    function treeMenu(event){
        if (event.target.tagName !== 'SPAN') {
            return;
        }
        let parentUl = event.target.parentNode.querySelector('ul');
        if (!parentUl){
            return;
        } 
        parentUl.hidden = !parentUl.hidden;

    }     
});    
