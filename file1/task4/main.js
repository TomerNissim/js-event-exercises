document.addEventListener("DOMContentLoaded", function() {
    const field = document.getElementById("field");
    const ball = document.getElementById("ball");

    field.addEventListener("click",moveTheBall);

    function moveTheBall(event){
        let fieldCoordinates = this.getBoundingClientRect();
        let ballCoordinates = {
            top: event.clientY - fieldCoordinates.top - field.clientTop - ball.clientHeight / 2,
            left: event.clientX - fieldCoordinates.left - field.clientLeft - ball.clientWidth / 2
          };
        if (ballCoordinates.top < 0){
            ballCoordinates.top = 0;  
        }
        if(ballCoordinates.top + ball.clientHeight > field.clientHeight){
            ballCoordinates.top = field.clientHeight - ball.clientHeight;
        }
        if (ballCoordinates.left < 0){
            ballCoordinates.left = 0;  
        }
        if (ballCoordinates.left + ball.clientWidth > field.clientWidth) {
            ballCoordinates.left = field.clientWidth - ball.clientWidth;
        }
          
        ball.style.left = ballCoordinates.left + 'px';
        ball.style.top = ballCoordinates.top + 'px';
    }


});