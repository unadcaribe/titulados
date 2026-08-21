;(function(){

    'use strict';

    var $form = $('.idioma-target');

    // Select
    $('.ocu-select>ul').on('click', 'a', function (event) {
        event.preventDefault();

        var value = event.target.getAttribute('data-value'),
            content = event.target.innerHTML,
            ul = $(this).parent().parent(), //get UL
            button = ul.prev();

        ul.next().val(value); //input
        button.find('.select-text').text(content); //button

        if( button.hasClass('idioma') ){
            toggleInputs();
        }else if( button.hasClass('paginacion') ){
            changeLimit(value);
        }else if( button.hasClass('input') ){
            button.find('.select-text').text(event.target.getAttribute('data-value-form')); //button
            ul.next().value = value;
        }

    });

    $('#select_lang').on('change', function () {
        $form.find(".hidden[data-lang="+$('#select_lang').val()+"]").removeClass('hidden');
        $form.find("div.switch[data-lang!="+$('#select_lang').val()+"]").addClass('hidden');
    });

    function toggleInputs(){
        $form.find(".hidden[data-lang="+$('#selector_idioma').val()+"]").removeClass('hidden');
        $form.find("div.switch[data-lang!="+$('#selector_idioma').val()+"]").addClass('hidden');
    }

    function changeLimit(limit){
        var url = location.protocol + '//' + location.host + location.pathname+location.search;
        if (location.search==""){
            url= url+"?limit="+limit;
        } else {
            url= url+"&limit="+limit;
        }
        window.location.href = encodeURI(url);
    }


    function iniLang(){
        //var lang = $.ajax({ url: '/gestor/lang', type: 'HEAD', async: false }).getResponseHeader('Content-Language');
        $('a[data-value='+lang+']').click();
    }

    iniLang();

})();
