$('.sidebar__menu').on("click", function () {
    $(".sidebar__list").addClass('sidebar__list--open')
});
$('.sidebar__close').on("click", function () {
    $(".sidebar__list").removeClass('sidebar__list--open')
});
var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}