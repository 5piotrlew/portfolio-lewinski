$(function () {
    //Scroll to 
    /*$('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });*/
    var flag = true;   
    $('.menu-mobile-item').on("click", function() {
        console.log("ckjucj");
        flag = !flag;
        if (!flag) {    
        $('nav#main-nav').addClass("mobile-menu");
            console.log("piewrszy if");
    }
        else {
            $('nav#main-nav').removeClass("mobile-menu");
            console.log("drugi if");
        }
        
    });
});