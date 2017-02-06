$(document).ready(function(){
    var $nameplate = $('.nameplate');
    var $navlink = $('.nav-link');

    // pseudo-parallax
    $(window).scroll(function(){
        if ($nameplate.offset().top < 100) {
            $nameplate.addClass('fadeOut');
        } else {
            $nameplate.removeClass('fadeOut');
        }
    });

    // smooth scrolling link
    $navlink.click(function(e){
        var target = $.attr(this, 'href');
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(target).offset().top }, 500);
    });
});
