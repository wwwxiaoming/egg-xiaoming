/*
 *
 * Template Name : Standard
 * Template Author : Obaid Hossain (One Plus Solution)
 * Graphics Designer : Towkir Ahmed Bappy
 * Template Link : http://demo.oneplussolution.com/html5/standard
 * Author Link : http://oneplussolution.com/v2
 *
 *
 * JavaScript Function 
 */
(function ($) {
	"use strict";
	
	jQuery(window).load(function(){
		var bar = $('.skill-progress');
		$(function(){
		  $(bar).each(function(){
			var bar_width = $(this).attr('aria-valuenow');
			$(this).width(bar_width + '%');
		  });
		});
	});

    jQuery(document).ready(function($){
        $(".navbar-nav li a").click(function(){
            $(".navbar-collapse").removeClass('in');
        });

        // jQuery scroll psy
        $('body').scrollspy({ 
            target: '.navbar-collapse',
            offset: 95
        });   
        
        // jQuery smooth scroll
		$('.smooth-scroll a').click(function(){
			var menu_height = '80';
			$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top - menu_height + "px"
			}, 2000);
			return false;
		}); 
		
		var doc_height = $( window ).height();
		$(function(){
		  $( 'div#ops_slider, .carousel-inner .item img' ).height( doc_height );
		});
		

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	