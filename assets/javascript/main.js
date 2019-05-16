$(document).ready(function(){

    //Switching styles as nav buttons are clicked
    $(".nav-item").on("click", function(){

        $(this).css({
            "border-bottom": "#731c9e solid 4px",
            "font-weight": "bold",
            "font-size": "120%"
        }).siblings().css({
            "border-bottom": "none",
            "font-weight": "normal",
            "font-size": "100%"
        });
    
    });

    $(".navbar-brand").on("click", function(){
        $(".nav-item").css({
            "border-bottom": "none",
            "font-weight": "normal",
            "font-size": "100%"
        });
    })

})