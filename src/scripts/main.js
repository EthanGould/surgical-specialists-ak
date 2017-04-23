// // Document content is loaded, lets do some JS.
// document.addEventListener("DOMContentLoaded", function(event) {
//
// 	var module = {};
//
// 	module.animateNav = function() {
// 		var scrolTrigger = window.innerWidth > 700 ? 225 : 152;
// 		var topOffset = '60px';
//
// 		// this = 'scroll' event
// 		var nav = document.querySelector('.nav');
//
// 		if (this.scrollY > scrolTrigger ) {
// 			nav.classList.add('nav--scrolled');
// 			document.querySelector('body').style.paddingTop = topOffset;
// 		} else {
// 			nav.classList.remove('nav--scrolled');
// 			document.querySelector('body').style.paddingTop = 0;
// 		}
// 	};
//
// 	module.init = function (argument) {
// 		window.addEventListener('scroll', module.animateNav);
// 	};
//
// 	module.init();
//
// });
