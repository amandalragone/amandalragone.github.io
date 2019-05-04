$(document).ready(function(){

    $("#about-me").hide();
    $("#my-portfolio").hide();
    $("#contact-me").hide();

    $(".portfolio-links").on("click", function(){
        var elementClicked = $(this).attr("id");
        console.log(elementClicked);
        $(this).parent().css("height", "40px");
        $(".title").css("line-height", "40px");

        if (elementClicked === "about") {
            $("#about-me").show();
            $("#my-portfolio").hide();
            $("#contact-me").hide();
        } else if (elementClicked === "portfolio") {
            $("#about-me").hide();
            $("#my-portfolio").show();
            $("#contact-me").hide();
        } else {
            $("#about-me").hide();
            $("#my-portfolio").hide();
            $("#contact-me").show();
        }

    })
})