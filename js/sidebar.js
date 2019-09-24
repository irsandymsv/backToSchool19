$(function() {
	$("a.btn_side_dropdown").click(function(event) {
		var dropdwon = $(this).next("div");
		if (dropdwon.css('display') == "block") {
			dropdwon.css('display', "none");
		} else {
			dropdwon.css('display', "block");
		}
	});

	$("#btn_openSide").click(function(event) {
		// $(".sidebar").width(250);
		$(".sidebar").show();
		// $(".main-content").css('margin-left', '250px');
		$(this).parent("#open_sideMenu").hide();
	});

	$("#btn_closeSide").click(function(event) {
		// $(".sidebar").width(0);
		$(".sidebar").hide();
		// $(".main-content").css('margin-left', '0px');
		$("#open_sideMenu").show();
	});
});