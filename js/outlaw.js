$(document).ready(function () {
    $("#imgSmall").click(function () {
        $("#imgSmall").toggleClass("imgLarge");
    });
});

$('img').bind('touchstart', function (e) {
    $(this).trigger('click');
    e.preventDefault();
});
 