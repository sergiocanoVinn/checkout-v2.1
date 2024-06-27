

function agregarCheckboxEmail() {
    if (window.location.hash === "#/profile") {
        if ($(".client-pre-email .client-email .label-check-email").length === 0) {
            $(".client-email #client-pre-email").after("<label class='label-check-email'><input type='checkbox' class='check-email'> Quiero recibir promociones a mi correo</label>");
        }
    }
}

$(window).on("hashchange", () => {
    agregarCheckboxEmail();
});

$(document).ajaxComplete(function (e, xhr, sttgs) {
    agregarCheckboxEmail();
})