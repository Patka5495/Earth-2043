AOS.init();

$('.featTab').each(function(index, item){
    $('.featTab').eq(index).click(function(){                
        $('.featTab').removeClass('select');
        $('.featContent').removeClass('select');
        $('.featTab').eq(index).addClass('select');
        $('.featContent').eq(index).addClass('select');
    })
})