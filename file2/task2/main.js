document.addEventListener("DOMContentLoaded", function() {

    const thumbs = document.getElementById("thumbs");
    


    thumbs.addEventListener("click",changeMainPic);

    function changeMainPic(event){
        event.preventDefault();
        let target = event.target.closest("a");
        let source = target.getAttribute('href');
        document.getElementById("largeImg").src = source;

    }

});