// var forEach = function (t, o, r) {
// 	if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
// 	else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
// };
// var hamburgers = document.querySelectorAll("#hamburger");
// if (hamburgers.length > 0) {
// 	forEach(hamburgers, function (hamburger) {
// 		hamburger.addEventListener(
// 			"click",
// 			function () {
// 				this.classList.toggle("is-active");

// 				// var this_but = this;

// 				// function fixed_but() {
// 				//   this_but.style.position = this_but.style.position === 'fixed' ? '' : 'fixed';
// 				//   this_but.style.top = this_but.style.top === '25px' ? '' : '25px';
// 				// }

// 				// if(this.classList.contains("is-active")) {
// 				// 	setTimeout(fixed_but, 500);
// 				// } else {
// 				// 	this_but.style.position = this_but.style.position === 'fixed' ? '' : 'fixed';
// 				// 	this_but.style.top = this_but.style.top === '25px' ? '' : '25px';
// 				// }
// 			},
// 			false
// 		);
// 	});
// }

jQuery(document).ready(function () {
	jQuery("#hamburger").click(function () {
		jQuery(".hamburger-mobile").addClass("close is-active");
		jQuery(".hamburger").addClass("is-active");
		jQuery(".menu-mobile").addClass("menu-mobile--open");
		jQuery(".overlay").addClass("overlay--open");
		jQuery("body").addClass("overflow-hidden");
	});
	jQuery(".hamburger-mobile").click(function () {
		jQuery(this).removeClass("close is-active");
		jQuery(".hamburger").removeClass("is-active");
		jQuery(".menu-mobile").removeClass("menu-mobile--open");
		jQuery(".overlay").removeClass("overlay--open");
		jQuery("body").removeClass("overflow-hidden");
	});
	jQuery(window).resize(function () {
		if (jQuery(window).width() > 767) {
			jQuery(".menu-mobile").removeClass("menu-mobile--open");
			jQuery("body").removeClass("overflow-hidden");
			jQuery(".overlay").removeClass("overlay--open");
			jQuery(".hamburger").removeClass("is-active close");
		}
	});

	$(window).scroll(function () {
		var $this = $(this),
			st = $this.scrollTop();

		if (st > 285) {
			$(".wrapper").addClass("scrolled");
		} else {
			$(".wrapper").removeClass("scrolled");
		}
	});

	$(".menu__item-dropdown").click(function () {
		if (jQuery(window).width() < 1200) {
			// if ($("body .menu__item-dropdown-active").length) {
			// 	$(".menu__wrapper-dropdown").hide(290);
			// } else {
			// 	$(".menu__wrapper-dropdown").show(290);
			// }
			$(this).toggleClass("menu__item-dropdown-active");
		}
	});

	jQuery(function ($) {
		$(document).mouseup(function (e) {
			let div = $(".menu__item-dropdown");
			let user_bag = $(".menu__item-dropdown");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				if (!user_bag.is(e.target) && user_bag.has(e.target).length === 0) {
					div.removeClass("menu__item-dropdown-active");
				}
			}
		});
	});
});

$('.input__input').on('input', function(){
  let $this = $(this);
  if ($this.val() == '') {
      $this.removeClass('input__input--filled');
  } else {
      $this.addClass('input__input--filled');
  }
});
$('.slider-case').slick({
  dots: true,
  dotsClass: 'slider-case__dots',
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$(document).ready(function(){
  $('.scroll-lets-talk').click( function(){  	    
    $('html, body').animate({ scrollTop: $('.lets-talk').offset().top }, 1000);
    $('#lets_talk_input').focus();
  });
});
jQuery(document).ready(function () {
	let windowWidth = $(window).width();

	jQuery(window).resize(function () {
		windowWidth = $(window).width();
		$('.menu__item-dropdown').find(".menu__wrapper-dropdown").removeAttr('style');
	});

	$(".menu__item-dropdown").hover(
		function () {
			if(windowWidth > 1199) {
				$(this).find(".menu__wrapper-dropdown").fadeIn(290);				
			}	
		},
		function () {
			if(windowWidth > 1199) {
				$(this).find(".menu__wrapper-dropdown").fadeOut(290);
			}
		}
	);
});
