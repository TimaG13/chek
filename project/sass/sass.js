$(window).on('load', function () {
    var $preloader = $('#loader-wrapper'),
        $svg_anm   = $preloader.find('#loader-wrapper');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');

    // text
    var wrapper = document.querySelector(".wrapper-text");
    var text = document.querySelector(".text");

    var textCont = text.textContent;
    text.style.display = "none";

    for (var i = 0; i < textCont.length; i++) {
        (function(i) {
            setTimeout(function() {
                // Created textNode to append
                var texts = document.createTextNode(textCont[i]);
                var span = document.createElement('span');
                span.appendChild(texts);

                span.classList.add("wave");
                wrapper.appendChild(span);

            }, 300 * i);
        }(i));
    }
});
