



$(document).ready(function () {

    var $document   = $(document),
        $inputRange = $('input[type="range"]');

    // Example functionality to demonstrate a value feedback
    function valueOutput(element) {
        var value = element.value,
            output = element.parentNode.getElementsByClassName('val-number')[0];
        output.innerHTML = value;
    }

    for (var i = $inputRange.length - 1; i >= 0; i--) {
        valueOutput($inputRange[i]);
    };
    $document.on('input', 'input[type="range"]', function(e) {
        valueOutput(e.target);



    });
    // end

    $inputRange.rangeslider({
        polyfill: false
    });


    // тогглы для меню
    $('.bottomHamburger').click(function () {
        console.error('123');
        $('.headerBottom nav').slideToggle();

    })



     $('select').styler();


    document.addEventListener('scroll', function () {
        if(document.body.offsetWidth >= 990) {
            if($('body').scrollTop() > $('.headerTop').height()) {
                $('.sticky-wrap').addClass('sticky');

            } else {
                $('.sticky-wrap').removeClass('sticky');

            }
        }

    })




});