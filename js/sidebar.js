$(function() {
	$("a.btn_side_dropdown").click(function(event) {
		event.preventDefault();
		var dropdwon = $(this).next("div");
		if (dropdwon.css('display') == "block") {
			dropdwon.css('display', "none");
		} else {
			dropdwon.css('display', "block");
		}
	});

	$("#btn_openSide").click(function(event) {
		$(".sidebar").css('width', '230px');
		$(".content-right").css('margin-left', '230px');
		// $(".sidebar").css('display', 'table-cell');
		// $("#open_sideMenu").hide();
	});

	$("#btn_closeSide").click(function(event) {
		$(".sidebar").css('width', '0');
		$(".content-right").css('margin-left', '0');
		// $(".sidebar").hide();
		// $("#open_sideMenu").show();
	});
});