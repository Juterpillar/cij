	$('body').css('scroll',"no");
	$('body').css('overflow', 'hidden'); 

$(window).load(function() {
	updateContainer();
	updateContentSize();
	if (document.getElementById('values')) {
		$('#values').hide().delay(500).fadeIn(1500)
	}

	// ------------- code for FLEXSLIDER -------------------

// This codes adds the appropriate classes to the image gallery so the css (particularly display: none)
// only works for those who have javascript enabled.

 	if(document.getElementById('home')) {
			var flexslider = document.getElementById('flexslider');
			var slides = document.getElementById('slides');
			
			slides.setAttribute("class", 'slides'); //For Most Browsers
			slides.setAttribute("className", 'slides'); //For IE

			flexslider.setAttribute("class", 'flexslider'); //For Most Browsers
			flexslider.setAttribute("className", 'flexslider'); //For IE
			$('.flexslider').flexslider({ 
				controlsContainer: ".container",
				controlNav: true,
				slideshowSpeed: 4200,
				animationSpeed: 2000
			});
	}


	 	if(document.getElementById('expertise')) {
			var flexslider = document.getElementById('flexslider');
			var slides = document.getElementById('slides');
			
			slides.setAttribute("class", 'slides'); //For Most Browsers
			slides.setAttribute("className", 'slides'); //For IE

			flexslider.setAttribute("class", 'flexslider'); //For Most Browsers
			flexslider.setAttribute("className", 'flexslider'); //For IE
			$('.flexslider').flexslider({ 
				pauseOnHover: true,
				controlNav: true,
				slideshowSpeed: 5000,
				animationSpeed: 1500,
				animation: 'slide',
				animationLoop: false
			});
	}

	 $(window).resize(function() {
     updateContainer();
     updateContentSize();
	 });

	function updateContainer() {
		if (document.getElementById('home')) {
			var newHeight = window.innerHeight;
			$('#home').css('height', newHeight);
			$('#home').css('overflow', 'hidden');
			$('#home').addClass('no_overflow'); //For IE
			$('.full_image').css('height', newHeight);  // ie hack!
			$('.full_image').css('min-height', newHeight);
			$('.full_image').css('min-width', 1000);
		}
	}

	function updateContentSize() {
		if(document.getElementById('content')) {
			$('#content').css('min-height', 0);	
			var newHeight = $(window).height();
			newHeight = newHeight - 172;
			var contentHeight = $('#content').height();
			if (contentHeight > newHeight) {
				$('#content').css('overflow-y', 'scroll');	
				$('#content').css('height', newHeight);	
			}
			else {
				$('#content').css('height', newHeight);	// ie hack!
			}
		}
	}

	if(document.getElementById('about')) {
		$('.wisdom').hide().addClass('position');
		$('#num1').hover(
			function () {
			$('#wisdom1').fadeIn('slow');
			},
			function () {
			$('#wisdom1').fadeOut('slow');
			}
		);
		$('#num2').hover(
			function () {
			$('#wisdom2').fadeIn('slow');
			},
			function () {
			$('#wisdom2').fadeOut('slow');
			}
		);
		$('#num3').hover(
			function () {
			$('#wisdom3').fadeIn('slow');
			},
			function () {
			$('#wisdom3').fadeOut('slow');
			}
		);
		$('#num4').hover(
			function () {
			$('#wisdom4').fadeIn('slow');
			},
			function () {
			$('#wisdom4').fadeOut('slow');
			}
		);
		$('#num5').hover(
			function () {
			$('#wisdom5').fadeIn('slow');
			},
			function () {
			$('#wisdom5').fadeOut('slow');
			}
		);

	}



});