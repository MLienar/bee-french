window.onload = function(){
    // Carousel fiche produit
    // Inter-change les images lorsque l'on click dessus 
    let bigzoo = 0;
    $('.one').click(function () {
        if (bigzoo > 0) {
            $('.one').removeClass('one');
            $(this).removeClass();
            $(this).addClass('one');
        }
    });
    $('.two').click(function () {
        bigzoo = bigzoo + 1;
        $('.one').addClass('two');
        $('.one').removeClass('one');
        $(this).addClass('one');
        $('.two').removeClass('two');
    });
    $('.three').click(function () {
        bigzoo = bigzoo + 1;
        $('.one').addClass('three');
        $('.one').removeClass('one');
        $(this).addClass('one');
        $('.three').removeClass('three');
    });
    $('.four').click(function () {
        bigzoo = bigzoo + 1;
        $('.one').addClass('four');
        $('.one').removeClass('one');
        $(this).addClass('one');
        $('.four').removeClass('four');
    });
};

console.log(result);