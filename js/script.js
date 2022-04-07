'use strict';

const burger = document.querySelector('.menu__burger'),
	  nav    = document.querySelector('.menu__navigation');

function showBurger () {
	burger.addEventListener('click', () => {
		nav.classList.toggle('active');
		burger.classList.toggle('toggle');
	});
}
showBurger();


new Swiper('.swiper', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clikable: true
	},
	slidesPerView: 4,
});

new Swiper('.swiper2', {
	navigation: {
	  nextEl: '.feedback-swiper-button-next',
	  prevEl: '.feedback-swiper-button-prev',
	},
	pagination: {
		el: '.feedback-swiper-pagination',
		clikable: true
	},
	slidesPerView: 3,

});

