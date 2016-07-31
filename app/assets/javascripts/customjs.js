
/* Projects page */
$('#carousel1').carousel();
$('#carousel2').carousel();
$('#carousel3').carousel();
$('#carousel4').carousel();
$('#carousel5').carousel();
$('#carousel6').carousel();

/* Publications page */ 
$(document).ready( function() {
		$('#myCarousel').carousel({
				interval:   false
		});
		
		var clickEvent = false;
		$('#myCarousel').on('click', '.nav a', function() {
						clickEvent = true;
						$('.nav li').removeClass('active');
						$(this).parent().addClass('active');        
		}).on('slid.bs.carousel', function(e) {
				if(!clickEvent) {
						var count = $('.nav').children().length -1;
						var current = $('.nav li.active');
						current.removeClass('active').next().addClass('active');
						var id = parseInt(current.data('slide-to'));
						if(count == id) {
								$('.nav li').first().addClass('active');    
						}
				}
				clickEvent = false;
		});
});


/* Publications */
$(document).ready(function(ev){
		$('#custom_carousel').on('slide.bs.carousel', function (evt) {
			$('#custom_carousel .controls li.active').removeClass('active');
			$('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
		})
});


/* Tab toggle for Designs */
$(document).ready( function() {
	var clickEvent = false;
	$('#tab').on('click', '.nav a', function() {
		clickEvent = true;
		$('.nav li').removeClass('active');
		$(this).parent().addClass('active');
	});
});