$('#menu-icon').click(function(event) {
	if ($('#menu-atas').attr('class') === "top-menu") {
		// console.log('tes ga');
		$('#menu-atas').addClass('responsive');
		$(".mainMenu").addClass('responsive');
		$("#drop").addClass('responsive');
	} else {
		$('#menu-atas').attr('class', 'top-menu');
		$(".mainMenu").removeClass('responsive');
		$("#drop").removeClass('responsive');
	}
});