const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle("active");
};

menu.addEventListener('click', mobileMenu);


(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
		autoplayTimeout: 15000,
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();

})(jQuery);


$(document).ready(function() {
	$('#autoWidth,#autoWidth2').lightSlider({
		autoWidth:true,
		loop:true,
		auto:true,
        pauseOnHover: true,
		onSliderLoad: function() {
			$('#autoWidth,#autoWidth2').removeClass('Cs-hidden');
		} 
	});  
  
  });

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Close Mobile Menu
const hidemobileMenu = () => { 
	const menuBars = document.querySelector('.is-active');
	if (window.innerWidth <= 768 && menuBars) {
	  menu.classList.toggle('is-active');
	  menuLinks.classList.remove("active");
	}
  };
  
  menuLinks.addEventListener('click', hidemobileMenu);
  navLogo.addEventListener('click', hidemobileMenu);