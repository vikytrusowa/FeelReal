$('.sidebar__menu').on("click", function () {
    $(".sidebar__list").addClass('sidebar__list--open')
});
$('.sidebar__close').on("click", function () {
    $(".sidebar__list").removeClass('sidebar__list--open')
});