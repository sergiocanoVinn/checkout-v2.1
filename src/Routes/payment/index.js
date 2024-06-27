

function cambiarTextosYLogosPago() {
    if (location.hash == '#/payment') {

        if (document.querySelector("#payment-group-creditCardPaymentGroup .payment-group-item-text") != null) {
            document.querySelector("#payment-group-creditCardPaymentGroup .payment-group-item-text").innerHTML = " <img class='img-payment' src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMjcuOSw2SDQuMUMyLjQsNiwxLDcuNCwxLDkuMXYxMy43QzEsMjQuNiwyLjQsMjYsNC4xLDI2aDIzLjdjMS43LDAsMy4xLTEuNCwzLjEtMy4xVjkuMUMzMSw3LjQsMjkuNiw2LDI3LjksNnoKCQkgTTI5LjcsMjIuOWMwLDEtMC44LDEuOS0xLjksMS45SDQuMWMtMSwwLTEuOS0wLjgtMS45LTEuOXYtOC4xaDI3LjVWMjIuOXogTTI5LjcsMTMuNUgyLjJWMTFoMjcuNVYxMy41eiBNMjkuNyw5LjhIMi4yVjkuMQoJCWMwLTEsMC44LTEuOSwxLjktMS45aDIzLjdjMSwwLDEuOSwwLjgsMS45LDEuOVY5Ljh6Ii8+Cgk8cGF0aCBkPSJNMTMuNCwxOS4xYzAsMC4zLTAuMywwLjYtMC42LDAuNkg1LjRjLTAuMywwLTAuNi0wLjMtMC42LTAuNmMwLTAuMywwLjMtMC42LDAuNi0wLjZoNy40QzEzLjEsMTguNSwxMy40LDE4LjgsMTMuNCwxOS4xeiIKCQkvPgoJPHBhdGggZD0iTTEzLjQsMjEuNmMwLDAuMy0wLjMsMC42LTAuNiwwLjZINS40Yy0wLjMsMC0wLjYtMC4zLTAuNi0wLjZjMC0wLjMsMC4zLTAuNiwwLjYtMC42aDcuNEMxMy4xLDIxLDEzLjQsMjEuMywxMy40LDIxLjZ6Ii8+Cgk8cGF0aCBkPSJNMjUuMywxNy4zaC0xLjJjLTEsMC0xLjksMC44LTEuOSwxLjl2MS4yYzAsMSwwLjgsMS45LDEuOSwxLjloMS4yYzEsMCwxLjktMC44LDEuOS0xLjl2LTEuMgoJCUMyNy4yLDE4LjEsMjYuNCwxNy4zLDI1LjMsMTcuM3ogTTI2LDIwLjRjMCwwLjMtMC4zLDAuNi0wLjYsMC42aC0xLjNjLTAuMywwLTAuNi0wLjMtMC42LTAuNnYtMS4zYzAtMC4zLDAuMy0wLjYsMC42LTAuNmgxLjMKCQljMC4zLDAsMC42LDAuMywwLjYsMC42VjIwLjR6Ii8+CjwvZz4KPC9zdmc+Cg==' style='width:30px;height:30px'/> <div class='title__pay' >Tarjeta de crédito o débito</div>";
        }
        if (document.querySelector("#payment-group-custom205PaymentGroupPaymentGroup .payment-group-item-text") != null) {
            document.querySelector("#payment-group-custom205PaymentGroupPaymentGroup .payment-group-item-text").innerHTML = " <img class='img-payment' src='https://cemacogt.vteximg.com.br/arquivos/pagos_tiendas.png' style='width:30px;height:30px'/> Pago en establecimiento <div class='container-logo-bancos'><img src='https://cemacogt.vteximg.com.br/arquivos/pago-en-caja-cemaco.svg'><img src='https://cemacogt.vteximg.com.br/arquivos/akisi-logo.png' style='max-width: 50px;'><img src='https://cemacogt.vteximg.com.br/arquivos/super24.png'><img src='https://cemacogt.vteximg.com.br/arquivos/forza.png'><img src='https://cemacogt.vteximg.com.br/arquivos/mass.png'><img src='https://cemacogt.vteximg.com.br/arquivos/caja-g.png' style='max-width: 20px;'></div>";
        }
        if (document.querySelector("#payment-group-promissoryPaymentGroup .payment-group-item-text") != null) {
            document.querySelector("#payment-group-promissoryPaymentGroup .payment-group-item-text").innerHTML = " <img class='img-payment' src='https://cemacogt.vteximg.com.br/arquivos/depositos.png' style='width:30px;height:30px'/> <div class='title__pay'>Transferencia o depósito</div> <div class='container-logo-bancos'><img src='https://cemacogt.vteximg.com.br/arquivos/gyt.svg'><img src='https://cemacogt.vteximg.com.br/arquivos/BI.svg'><img src='https://cemacogt.vteximg.com.br/arquivos/BANRURAL.svg'><img src='https://cemacogt.vteximg.com.br/arquivos/BAC.svg'><img src='https://cemacogt.vteximg.com.br/arquivos/BAM.svg'><img src='https://cemacogt.vteximg.com.br/arquivos/BANTRAB.svg'><img src='https://cemacogt.vteximg.com.br/arquivos/FRI.svg'></div>";
        }
        if (document.querySelector(".orderform-template-holder #payment-data p.link.link-gift-card #show-gift-card-group") != null) {
            document.querySelector(".orderform-template-holder #payment-data p.link.link-gift-card #show-gift-card-group").innerHTML = " <img class='img-payment' src='https://cemacogt.vteximg.com.br/arquivos/icono-giftcard.svg' style='width:30px;height:30px'/> Certificados de regalo";
        }
    }

}

function agregarGiftcard() {
    if (location.hash == '#/payment') {
        setTimeout(() => {
            var code = '';
            var security = '';
            var showGiftCard = $('#show-gift-card-group');
            showGiftCard.click(function () {
                if (document.querySelector(".payment-discounts-options.new-giftcard") === null) {
                    let containerGiftCard = document.createElement("div");
                    containerGiftCard.classList.add("payment-discounts-options");
                    containerGiftCard.classList.add("new-giftcard");
                    $(".link-gift-card").append(containerGiftCard);
                    setTimeout(function () {
                        $('.payment-discounts-options.new-giftcard').html(
                            "<p class='payment-discounts-options text input form-inline'><label for='payment-discounts-code' data-i18n='paymentData.paymentGroup.giftCard.codeCard'>Ingresa el código de la tarjeta de regalo</label><div class='wrapper-form-giftcard'><input type='text' id='card-code' placeholder='Número de tarjeta'><input type='text' id='security-code' placeholder='Código de seguridad'><input type='text' id='payment-discounts-code' class='payment-discounts-cod' data-bind='value: giftCardCode, validate: validateGiftCardCode, valueUpdate: 'keyup', css: { 'loadingGiftCard': loadingGiftCard }, disable: loadingGiftCard'> <span class='loading-inline' data-bind='visible: loadingGiftCard' style='display: none;'></span><button id='btn-add-gift-card' class='btn' type='button' data-bind='click: addGiftCard, disable: loadingGiftCard' data-i18n='global.add'>Sumar</button><a href='javascript:cancelarGiftcard()' class='cancel-giftcard'>Cancelar</a></div></p><div class='giftsuccess alert-success' role='alert'>Giftcard registrada con éxito</div><div class='giftreject alert-danger' role='alert'>Hubo un problema con su giftcard</div>"
                        );

                        $('#card-code').keyup(function () {
                            if ($(this).val().length >= 4) {
                                $(this).addClass("success");
                            } else {
                                $(this).removeClass("success");
                            }
                            code = $(this).val();
                            $('#payment-discounts-code').val(code + "-" + security);
                            $('.payment-discounts-cod').val(code + "-" + security);
                            $('.payment-discounts-cod').keyup();
                        });

                        $('#security-code').keyup(function () {
                            if ($(this).val().length >= 4) {
                                $(this).addClass("success");
                            } else {
                                $(this).removeClass("success");
                            }
                            security = $(this).val();
                            $('#payment-discounts-code').val(code + "-" + security);
                            $('.payment-discounts-cod').val(code + "-" + security);
                            $('.payment-discounts-cod').keyup();
                        });

                        $(".payment-discounts-options.new-giftcard #btn-add-gift-card").click(function () {
                            $(".gift-card-provider-default #btn-add-gift-card").click();
                        });
                    }, 200);
                }
            });
        }, 1000);
    }

}

function state_giftcard() {
    const list = document.querySelectorAll('.payment-discounts-list td.code')[0]
    const dom = document.querySelectorAll('.gift-card-provider-default')[0]
    if (list && dom) {
        dom.style.display = 'none'
    }
}

function scrollMobileButtonBuy() {
    if (window.screen.width < 768) {
        $(window).scroll(function () {
            if ($(window).scrollTop() === 0 || $(document).scrollTop() > 1100) {
                $("body.js-vcustom-showNoteField.v-custom-step-payment .orderform-template .payment-confirmation-wrap .payment-submit-wrap").removeClass("scroll-button");
                $(".container-total-header").remove();
            } else {
                $("body.js-vcustom-showNoteField.v-custom-step-payment .orderform-template .payment-confirmation-wrap .payment-submit-wrap").addClass("scroll-button");
                if ($(".container-total-header").length === 0) {
                    $(".payment-submit-wrap.scroll-button").prepend("<div class='container-total-header'><div class='total-header'>Subtotal<br/><div class='monetary-header'></div></div></div>");
                    $(".monetary-header").append($(".orderform-template .cart-template.mini-cart .summary-totalizers tfoot tr td.monetary").text());
                }
            }
        });
    }
}

$(document).ajaxComplete(function (e, xhr, sttgs) {
    agregarGiftcard()
    cambiarTextosYLogosPago()
    scrollMobileButtonBuy();

})

$(window).on('componentValidated.vtex', function (event, orderForm) {
    state_giftcard()
})