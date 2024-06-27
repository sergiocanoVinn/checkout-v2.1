

import './renderReactComp'

function cupom() {
    if ($('.cart-template').hasClass('active')) {
        var force = setInterval(function () {
            clearInterval(force)
            $('.coupon-fieldset .link-coupon-add').trigger('click')
        }, 500)
    }
}

function bindShipping() {
    if (window.location.hash === "#/cart") {
        if (getComputedStyle($(".gift-list-alert.alert")[0], null).display == 'block') {
            console.log("sí es de MDR!")
            $(".open-info-table.shipping").css("display", "none")
        }
        else {
            console.log("no es de MDR")
            $(".open-info-table.shipping").css("display", "block")
        }
    }
}

$(window).on("hashchange", () => {
    bindShipping()
});

$(window).on('orderFormUpdated.vtex', (_, of) => {
    cupom()
})

$(document).ajaxComplete(function (event, xhr, settings) {
    bindShipping()
})
