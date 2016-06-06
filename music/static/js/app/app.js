$(document).ready(function () {
    $('.flashes').bind('click', function (e) {
        var target = $(e.target);
        if (target.hasClass('close')) {
            target.parent().remove();
        }
    });
});