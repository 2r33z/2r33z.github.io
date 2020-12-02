$(document).ready(function(){
    $(".main").onepage_scroll({
        sectionContainer: "section",     
        easing: "ease",                  
        animationTime: 700,          
        pagination: true,
        updateURL: false,               
        loop: false,
        keyboard: true,
        responsiveFallback: false,                                
        direction: "vertical"
    });
    
    $(".navbar a").click(function(e){
        var target = $(this).attr('href');
        var number = "0";
        if (target == "#home"){number = "1"}
        if (target =="#skills"){number = "2"}
        if (target =="#contacts"){number = "3"}
        $(".main").moveTo(number);
    });
    
    history.pushState('', document.title, window.location.pathname);
});
