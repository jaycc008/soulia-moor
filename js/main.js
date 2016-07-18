$(document).ready(function(){

	// javascript
    $(".navbar-nav li").on("click", function(e){
        e.preventDefault();

        $(".navbar-nav").find("li.active").removeClass("active");
        $(this).addClass("active");

        var link = $($(this).find("a"));
        var top;

        if($(link.attr("href")).selector == "#link-home"){
            top = 0;
        }else{
            top = $(link.attr("href")).offset().top;
        }



        $('html, body').animate({
            scrollTop: top
        }, 500);

    });

    var blue = false;

    $("button.navbar-toggle").on("click", function(){
        if(blue){
            $(".navbar-header").css("background-color", "transparent");
            blue = false;
        }else{
            $(".navbar-header").css("background-color", "#222e43");
            blue = true;
        }
        $(this).find("div").toggleClass("cross hamburger");
    });

    $('.carousel').carousel({
        interval: 3500,
        pause: "false"
    });

    // var lastScrollTop = 0;
    // var $navbar = $(".navbar-nav");
    // var navId = $navbar.find("li.active").data("nav");
    // var prev = $($navbar.find("li.active").siblings()[navId - 1]);
    // var next = $($navbar.find("li.active").siblings()[navId]);

    // var scrolling = false;

    // $(window).scroll(function(event){

    //     var st = $(this).scrollTop();
    //     if (st > lastScrollTop){
    //         next.trigger("click");
    //         // $navbar.find("li.active").removeClass("active");
    //         // next.addClass("active");
    //         // down

    //     } else {
    //         prev.trigger("click");
    //         // $navbar.find("li.active").removeClass("active");
    //         // prev.addClass("active");
    //         // up
    //     }
    //     lastScrollTop = st;
    // });

    var fo = new SWFObject("autoviewer.swf", "autoviewer", "100%", "500", "8", "#000000");
    fo.write("flashcontent");

});
