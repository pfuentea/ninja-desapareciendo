$(document).ready(function(){
    $('img').on('click', function() { 
        $(this).fadeOut(1000);
    });

    $('#btn_show').on('click', function() { 
        $('img').fadeIn(1000);       
    });

});