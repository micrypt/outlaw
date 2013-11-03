// Main toggle for image
$(document).ready(function () {
    $('.imgSmall').click(function () {
        $(this).toggleClass('imgSmall');
        $(this).toggleClass('imgLarge');
    });
});

// Off click function
$('body').click(function (event) {
    if (!$(event.target).closest('.imgLarge').length) {
        $('.imgLarge').removeClass().addClass('imgSmall');
    }
});

// Disable scrolling once zoomed in
$('.imgSmall').click(function (event) {
    $("body").toggleClass('stop-scrolling');
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