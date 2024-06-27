
const shippingDay = () => {
    $('.shp-summary-package-time span:not(.texto-desde-1)').each(function () {
        const text = $(this).html().replace('En hasta', 'Desde')
        $(this).text(text)
        $(this).addClass('texto-desde-1')
    })

    $('.vtex-omnishipping-1-x-leanShippingTextLabelSingle span:not(.texto-desde-2)').each(function () {
        const text = $(this).html().replace('En hasta', 'Desde')
        $(this).text(text)
        $(this).addClass('texto-desde-2')
    })

    if ($('#show-gift-card-group').length && $('.shp-summary-package-time .texto-desde-3').length === 0) {
        const text3 = document.querySelector('#show-gift-card-group').innerText.replace('un cupón de regalo', 'Giftcard')

        $('#show-gift-card-group').text(text3)
        $('#show-gift-card-group').addClass('texto-desde-3')
    }
}
