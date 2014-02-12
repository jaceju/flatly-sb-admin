$(function() {

    $('#side-menu').metisMenu();

});

$(function() {

    $(window).bind("load resize", function() {
        console.log($(this).width());
        if ($(this).width() < 753) {
            $('div.sidebar-collapse').addClass('collapse')
        } else {
            $('div.sidebar-collapse').removeClass('collapse')
        }
    });
});
