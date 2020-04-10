function displayNextSlide(slider) {
    var currentImage = slider.find(".currentImage"),
        nextSlide = (currentImage.next().length === 0) ? slider.children(':first') : currentImage.next();

    currentImage.delay(1500).hide("slide", {direction: "left"}, 500, function () {
        $(this).removeClass("currentImage");
        nextSlide.show("slide", {direction: "right"}, 500, function () {
            $(this).addClass("currentImage");
            displayNextSlide(slider);
        });
    });
}

function initSlider(slider) {
    var images = slider.find('img');
    images.first().fadeIn(function () {
        $(this).addClass("currentImage");
        displayNextSlide(slider);
    });
}

$(".slider").each(function () {
    initSlider($(this));
});
