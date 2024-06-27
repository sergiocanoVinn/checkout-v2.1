
$(window).on("load", () => {
    
    const faviconLink = $('<link>', {
        rel: 'shortcut icon',
        href: 'https://cemacogt.vteximg.com.br/arquivos/cemacogt-favicon.ico'
    });

    $('head').append(faviconLink);
});