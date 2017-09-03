new Swiper( '.swiper-container', {
	nextButton: '#next',
	prevButton: '#prev',
	spaceBetween: 50,
	slidesPerView: 3,
	autoHeight: true,
	setWrapperSize: true,

	breakpoints: {
		767: {
			slidesPerView: 1,
			spaceBetween: 30
		}
	}
} )

new Swiper( '#home-swiper-f', {
	parallax: true,
	autoHeight: true,
	autoplay: 2000,
	loop: true,
	setWrapperSize: true,
	effect: 'fade',
} )

new Swiper( '#home-swiper-s', {
	nextButton: '#nextS',
	prevButton: '#prevS',
	autoHeight: true,
	slidesPerView: 3,
	pagination: '.swiper-pagination',

	breakpoints: {
		767: {
			slidesPerView: 1,
			spaceBetween: 30
		}
	}
} )


var $input    = document.getElementById('curriculoInput'),
    $fileName = document.getElementById('curriculoFile');

$input.addEventListener('change', function(){
  $fileName.textContent = this.value;
});
