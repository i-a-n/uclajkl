var VIEWPORT_WIDTH_MED = 768;

$(document).ready(function() {
	// Window resize handler
	var viewportWidth = $(window).width();
	$(window).resize(function() {
		viewportWidth = $(window).width();
	});

	// Set up click handler
	$(".faculty-img-container > img").click(function() {

		// Only do stuff if the window is medium+
		if (viewportWidth > VIEWPORT_WIDTH_MED) {
			// Deactivate any active detail box
			$(".detail-container").removeClass("active");

			// If they're clicking the active img, shut it all down
			if( $(this).parent().hasClass("active") ) {
				$(".faculty-img-container").removeClass("inactive");
				$(this).parent().removeClass("active");
			}
			else {
				// Deactivate all images, except the one clicked
				$(".faculty-img-container").addClass("inactive").removeClass("active");
				$(this).parent().removeClass("inactive").addClass("active");

				// Get next detail box
				var nextDetailBox = $(this).parent().parent().next(".detail-container");

				// Insert variables into it
				nextDetailBox.find('.js-replace-name').html($(this).attr('data-faculty-name'));
				nextDetailBox.find('.js-replace-title').html($(this).attr('data-faculty-title'));
				nextDetailBox.find('.js-replace-email').html($(this).attr('data-faculty-email'));
				nextDetailBox.find('.js-replace-bio').html($(this).attr('data-faculty-bio'));

				// Activate the next detail box
				nextDetailBox.addClass("active");

				// Scroll to the image that was just clicked
				scrollToDetail($(this));
			}
		}
	})

	// "Pick one" handler
	pickOneOf = $('.pick-one');
	$(pickOneOf[Math.floor(Math.random()*pickOneOf.length)]).css('display', 'block');

});

function scrollToDetail(activeImage) {
	$("html, body").animate({
		scrollTop: activeImage.offset().top
	}, 520)
}
