new Swiper( '.swiper-container', {
	spaceBetween: 50,
	slidesPerView: 3,
	autoHeight: true,
	setWrapperSize: true,

	breakpoints: {
		767: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	}
} )

new Swiper( '#home-swiper-f', {
	parallax: true,
	autoHeight: true,
	autoplay: 2000,
	setWrapperSize: true,
	effect: 'fade',
} )

new Swiper( '#home-swiper-s', {
	autoHeight: true,
	slidesPerView: 3,
	pagination: '#pagination',

	breakpoints: {
		767: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	}
} )


var $input    = document.getElementById('curriculoInput'),
    $fileName = document.getElementById('curriculoFile');

$input.addEventListener('change', function(){
  $fileName.textContent = this.value;
});
