String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}




;(function(){

    'use strict';

    var inputs = document.querySelectorAll('.input-file');
    Array.prototype.forEach.call(inputs, function (input) {
        var span = input.previousElementSibling,
            spanVal = span.innerHTML;

        input.addEventListener('change', function (e) {
            var fileName = '';

            if (this.files){
                fileName = e.target.value.split('\\').pop();
            }
            if (fileName){
                span.innerHTML = fileName;
            }else{
                span.innerHTML = spanVal;
            }
        });
    });

    $('.eliminar-item').on('click', function (event) {

        var item = $(this).data("item");
        var modelo = $(this).data("modelo");
        var item_id = $(this).data("item_id");
        if (item_id!="") {

            var url= '/gestor/tablas/'+modelo+'/eliminar'+ item.capitalizeFirstLetter()+"/"+item_id;

            $.ajax({
                url: url,
                type: 'GET',
                success: function(data) {
                    //$("#img_"+item).hide();
                    $("#label_"+item).html("<i class='fas fa-cloud-upload-alt'></i> Cargar archivo");
                    $("#img_"+item).parents('.ocu-file').removeClass("ocu-file-img");
                    $("#"+item+"-input").html("");
                }
            });
        }
    });

})();
