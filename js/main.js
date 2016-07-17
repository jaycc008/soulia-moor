$(document).ready(function(){

	// javascript
    $(".navbar-nav li").on("click", function(e){
        e.preventDefault();

        $(".navbar-nav").find("li.active").removeClass("active");
        $(this).addClass("active");

        var link = $($(this).find("a"));

        $('html, body').animate({
            scrollTop: $(link.attr("href")).offset().top
        }, 500);

    })

    // var lastScrollTop = 0;
    // var $navbar = $(".navbar-nav");
    // var navId = $navbar.find("li.active").data("nav");
    // var prev = $($navbar.find("li.active").siblings()[navId - 1]).find("a").attr("href");
    // var next = $($navbar.find("li.active").siblings()[navId]);

    // var scrolling = false;

    // $(window).scroll(function(event){

    //     prev = $($navbar.find("li.active").siblings()[navId - 1]).find("a").attr("href");

    //     var st = $(this).scrollTop();
    //     if (st > lastScrollTop){
    //         $navbar.find("li.active").removeClass("active");
    //         next.addClass("active");

    //         if(scrolling){
    //             setTimeout(function(){
    //                 scrolling = false;
    //             }, 510)
    //             console.log(scrolling);
    //         }else{
    //             $('html, body').animate({
    //                 scrollTop: $($(next).find("a").attr("href")).offset().top
    //             }, 500);
    //             scrolling = true;
    //             console.log(scrolling);
    //         }


    //     } else {
    //         console.log('up');
    //     }
    //     lastScrollTop = st;
    // });

});
