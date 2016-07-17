$(document).ready(function(){

	// javascript
    $(".navbar-nav li").on("click", function(e){
        e.preventDefault();


        console.log();

        $("#sidebar-nav").find("li.active").removeClass("active");
        $(this).addClass("active");

        var link = $($(this).find("a"));

        $('html, body').animate({
            scrollTop: $(link.attr("href")).offset().top
        }, 500);

    })

});
