

document.addEventListener( 'DOMContentLoaded', function () {

	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 80,
		height      : 80,
		gap         : 10,
		cover       : false,
		isNavigation: true,
        rewind      : true,
        pagination  : false,
		focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
	} ).mount();
	
	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : false,
        
	} ); // do not call mount() here.
	
	primarySlider.sync( secondarySlider ).mount();
} );



