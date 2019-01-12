$(document).ready(function() {


    // When the window scrolls
    $(window).scroll(function() {

        $('.about-table, .section-content').each(function(){
            var mid = $(this).offset().top + ($(this).outerHeight())/2;

            var windowBottom = $(window).scrollTop() + $(window).height();

            if(windowBottom > mid)
            {
                $(this).animate({'opacity':'1'}, 500);
            }
        });

    });

});