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
    $fileName = document.getElementById('curriculoFile'),
		closeHamburger = document.querySelector('.hamburger__close'),
		openHamburger = document.querySelector('.main_hamburger'),
		body = document.querySelector('body');

openHamburger.addEventListener('click', function() {
	body.classList.add('hamburger-opened')
}, false)

closeHamburger.addEventListener('click', function() {
	body.classList.remove('hamburger-opened')
}, false)

$input.addEventListener('change', function(){
  $fileName.textContent = this.value;
});
