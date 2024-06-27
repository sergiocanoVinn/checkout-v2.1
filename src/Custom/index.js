
"use strict";

import './loadFavicon';

$(document).ajaxComplete(function (event, xhr, settings) {
    setTimeout(function () {
        agregarInfoEmpaqueRegaloAlInicio();
    }, 500);

})

function agregarInfoEmpaqueRegaloAlInicio() {
    if (window.location.hash === "#/cart") {
        $(".item-attachments-content.item-attachments-name-empaque-de-regalo").each(function () {
            try {
                $(this).prev().prev().find(".container-envoltura .input-de-empaque").val($(this).find(".item-attachments-item-fields .item-attachment-name-ded input").val()),
                    $(this).prev().prev().find(".container-envoltura .input-para-empaque").val($(this).find(".item-attachments-item-fields .item-attachment-name-parad input").val()),
                    $(this).prev().prev().find(".container-envoltura .input-mensaje-empaque").val($(this).find(".item-attachments-item-fields .item-attachment-value-textarea").val());
                $("#regalo-" + $(this).prev().prev()[0].className.split("container-regalo-form-")[1].split(" wrapper-regalo-form").shift()).trigger("click");
                $(".container-regalo-form-" + $(this).prev().prev()[0].className.split("container-regalo-form-")[1].split(" wrapper-regalo-form").shift().toString()).css("display", "flex");
            } catch (error) {
                console.error('No se pudo ejecutar la función agregarInfoEmpaqueRegaloAlInicio')
            }
        })
    }
}