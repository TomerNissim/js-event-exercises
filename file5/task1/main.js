document.addEventListener("DOMContentLoaded", function() {
    
    const thumb = document.querySelector(".thumb");
    const slider = document.getElementById("slider");

    thumb.addEventListener("mousedown",onMouseDown);
    

    function onMouseDown(event){
        event.preventDefault();
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
  
       
        function onMouseMove(event){
            let position = event.clientX - slider.getBoundingClientRect().left  ;
            if (position < 0) {
                position = 0;
            }
            let rightSlider = slider.offsetWidth - thumb.offsetWidth;
        if (position > rightSlider) {
            position = rightSlider;
        }
        thumb.style.left = position + 'px';
        }

        thumb.addEventListener("mouseup",onMouseUp);
        function onMouseUp (event){
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    }

    thumb.addEventListener("dragstart", dragStart) ;
    function dragStart(){
        return false;
    };

});    
