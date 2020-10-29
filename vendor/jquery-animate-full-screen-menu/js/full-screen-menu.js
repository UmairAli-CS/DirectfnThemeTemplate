(function ($) {
	"use strict";

	//Navigation
	var app = function () {
		var html = undefined;
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var topMenuItems = undefined;
		var init = function init() {
			html = document.querySelector('html');
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			topMenuItems = document.getElementById('mainNav');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			if (menu != null) {
				menu.addEventListener('click', function () {
					return toggleClass(html, body, 'nav-active');
				});
			}
		};
		var toggleClass = function toggleClass(html, body, stringClass) {
			if (body.classList.contains(stringClass)) {
				topMenuItems.style.display = "flex";
				body.classList.remove(stringClass);
				resetfullmenufields();
				html.classList.remove('vertical-scroll-hidden');
			} else {
				topMenuItems.style.display = "none";
				body.classList.add(stringClass);
				html.classList.add('vertical-scroll-hidden');
			}
		};

		init();
	}();

	function resetfullmenufields() {
		const div = document.querySelectorAll('.nav__list-item div');
		if (div.length > 0) {
			div.forEach(function (elem) {
				if (elem.classList.contains('show')) {
					elem.classList.remove('show');
				}
			});
		}
		const text = document.querySelectorAll('.nav__list-item .dfn_solutions_text_color');
		if (text.length > 0) {
			text.forEach(function (elem) {
				if (elem.classList.contains('active')) {
					elem.classList.remove('active');
				}
			});
		}
	}

	$('.nav__list-item .dfn_solutions_text_color').click(function () {
		if ($(this).length > 0) {
			if ($(this).siblings('div').hasClass('show')) {
				$(this).removeClass('active');
				$(this).siblings('div').removeClass('show');
			}
			else {
				$(this).addClass('active');
				$(this).siblings('div').addClass('show');
			}
		}
	});

})(jQuery);