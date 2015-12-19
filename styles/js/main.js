jQuery(function( $ ){

    $(".accept-button").click(function(e){
        e.preventDefault();
        $(".agreement").animate({
            top: "-75"
        }, 700);
        $(".navbar-inverse").animate({
            top: 0
        }, 700);
    });

});

