$(document).ready(function() {

	//---toggle menu---//
	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
	});

	//---turn cads---//
	$(".section-4").waypoint(function() {

		$(".section-4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index);
		});

	}, {
		offset : "10%"
	});

	//---drawing svg flags---//
	// var waypointsvg = new Waypoint({

	// 	element: $(".section-5"),
	// 	handler: function(dir) {

	// 		if (dir === "down") {

	// 			$(".section-5 .tc-item").each(function(index) {
	// 				var ths = $(this);
	// 				setTimeout(function() {
	// 					var myAnimation = new DrawFillSVG({
	// 						elementId: "tc-svg-" + index
	// 					});
	// 					ths.children(".tc-item__content").addClass(".tc-item__content-on");
	// 				}, 500*index);
	// 			});
	// 		};
	// 		this.destroy();
	// 	},
	// 	offset: '35%'
	// });

	
	
});

$(".slider-block").owlCarousel({
		
	});