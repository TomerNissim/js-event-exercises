document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("first");
    let toolTipBox ;
    button.addEventListener("mouseover", showTooltip);
    button.addEventListener("mouseout", removeTooltip); 
    function showTooltip(event){
       let target = event.target;
       let targetTooltip = target.dataset.tooltip;
       toolTipBox = document.createElement('span');
       toolTipBox.className = "tooltip";
       toolTipBox.innerHTML = targetTooltip;
       document.body.append(toolTipBox);

        let coordinates = target.getBoundingClientRect();
        let left = coordinates.left + (target.offsetWidth - toolTipBox.offsetWidth) / 2;
        if (left < 0){
            left = 0;
        }        
        let top = coordinates.top - toolTipBox.offsetHeight - 4;
        if (top < 0){
            top = coordinates.top + target.offsetHeight + 4;
        }
        toolTipBox.style.left = left + 'px';
        toolTipBox.style.top = top + 'px';
    }

    function removeTooltip(event){
        toolTipBox.remove();
    }
});    
