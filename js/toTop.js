//Draw arrow on canvas element
var canvas = document.getElementById('canvas_toTop');
var ctx = canvas.getContext('2d');

ctx.lineWidth = 5;
ctx.fillStyle  = 'white';
ctx.strokeStyle  = 'white';
ctx.fillRect(15, 20, 20, 40);

ctx.moveTo(8, 25);
ctx.lineTo(25, 5);
ctx.lineTo(42, 25);
ctx.closePath();
ctx.stroke();
ctx.fill();

//scroll to top function
$("#btn_toTop").on('click', function(e) {
	$('html, body').animate({scrollTop:0}, '300');
});