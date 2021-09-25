$(document).ready(function () {

    $(".nav-dugme").click(function () {
        $("nav ul").slideToggle(200);
    });

});

var datum = new Date();

var mesec = datum.getMonth() + 1;
var dan = datum.getDate();
var godina = datum.getFullYear();

$(".danasnji-datum").html("Današnji datum: " + dan + "." + mesec + "." + godina + ".");