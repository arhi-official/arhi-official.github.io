window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Toggle mobile navbar when the burger icon is clicked
    $(".navbar-burger").click(function() {
      // Keep burger icon and menu in sync
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    // Carousel settings (only applied if .carousel elements exist)
    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all divs with the carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Debug hook: log slide changes when carousels advance
    for(var i = 0; i < carousels.length; i++) {
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Example of accessing a specific carousel instance by ID
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }
})
