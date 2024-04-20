/*=============================================
VARIABLE LOCAL STORAGE
=============================================*/

if(localStorage.getItem("capturarRango") != null){

	$("#daterange-btn-productos span").html(localStorage.getItem("capturarRango"));


}else{

	$("#daterange-btn-productos span").html('<i class="fa fa-calendar"></i> Rango de fecha')

}



/*=============================================
RANGO DE FECHAS
=============================================*/
$('#daterange-btn-productos').daterangepicker(
  {
    ranges   : {
      'Hoy'       : [moment(), moment()],
      'Ayer'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Últimos 7 días' : [moment().subtract(6, 'days'), moment()],
      'Últimos 30 días': [moment().subtract(29, 'days'), moment()],
      'Este mes'  : [moment().startOf('month'), moment().endOf('month')],
      'Último mes'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment(),
    endDate  : moment()
  },
  function (start, end) {
    $('#daterange-btn-productos span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));

    var fechaInicial = start.format('YYYY-MM-DD');

    var fechaFinal = end.format('YYYY-MM-DD');

    var capturarRango = $("#daterange-btn-productos span").html();
   
   	localStorage.setItem("capturarRango", capturarRango);

   	window.location = "index.php?ruta=productos-ventas&fechaInicial="+fechaInicial+"&fechaFinal="+fechaFinal;

  }

)

/*=============================================
CANCELAR RANGO DE FECHAS
=============================================*/

$(".daterangepicker.opensleft .range_inputs .cancelBtn").on("click", function(){

	localStorage.removeItem("capturarRango");
	localStorage.clear();
	window.location = "ventas";
})

/*=============================================
CAPTURAR HOY
=============================================*/

$(".daterangepicker.opensleft .ranges li").on("click", function(){


	var textoHoy = $(this).attr("data-range-key");

	if(textoHoy == "Hoy"){

		var fechaInicial = moment().format('YYYY-MM-DD').padStart(10, '0');
		var fechaFinal = moment().format('YYYY-MM-DD').padStart(10, '0');

    	localStorage.setItem("capturarRango", "Hoy");

    	window.location = "index.php?ruta=productos-ventas&fechaInicial="+fechaInicial+"&fechaFinal="+fechaFinal;

	}

})

