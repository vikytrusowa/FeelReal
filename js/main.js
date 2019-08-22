function t01() {
    var radio = document.getElementById("i01");
    var div = document.getElementById("t01");
    var div2 = document.getElementById("t02");

    if (radio.checked) {
        div.style.display = "inline";
        div2.style.display = "none";
        div_show = true;
    }
}
var div_show = false;