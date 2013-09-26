// Main toggle for image
$(document).ready(function () {
    $('.imgSmall').click(function () {
        $(this).toggleClass('imgSmall');
        $(this).toggleClass('imgLarge');
    });
});

// Centers image perfectly
function resize() {
    if ($(".imgSmall").height() <= $(window).height()) {
        $(".imgSmall")
            .height($(window).height())
            .width($(window).height() * 1.5);
    }

    $(".imgSmall").center();
}

$(document).ready(function () {
    resize();
});
$(window).resize(function () {
    resize();
});