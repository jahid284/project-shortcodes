jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("sticky-nav");
	    } else {
	        $(".navbar-fixed-top").removeClass("sticky-nav");
	    }
	});



    // -------------------------------------------------------------
    // OffCanvas
    // -------------------------------------------------------------
    (function () {
        $('button.navbar-toggle').HippoOffCanvasMenu({
        documentWrapper: '#main-wrapper',
        contentWrapper : '.content-wrapper',
        position       : 'hippo-offcanvas-left',    // class name
        // opener         : 'st-menu-open',            // class name
        effect         : 'slide-in-on-top',             // class name
        closeButton    : '#off-canvas-close-btn',
        menuWrapper    : '.offcanvas-menu',                 // class name below-pusher
        documentPusher : '.offcanvas-pusher'
        });
    }());






    // -------------------------------------------------------------
    //  clientOneSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientOneSlider').owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:4,
                }
            }
        })


        // Navigation 
        var owl = $('.clientOneSlider');
        owl.owlCarousel();

        // Go to the next item
        $('.clientOneSlider-nav .next').click(function () {
            owl.trigger('next.owl.carousel');
        })

        // Go to the previous item
        $('.clientOneSlider-nav .prev').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });

    }());


    // -------------------------------------------------------------
    //  clientThreeSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientSlider').owlCarousel({
            loop:true,
            nav:false,
            margin: 90,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        })

    }());


    // -------------------------------------------------------------
    //  clientSevenSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientSevenSlider').owlCarousel({
            loop:true,
            nav:false,
            margin:90,
            responsive:{
                0:{
                    items:2
                },
                700:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        })

    }());





    // -------------------------------------------------------------
    //  clientNineSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientNineSlider').owlCarousel({
            loop:true,
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:6,
                },
                
            }
        })


        // Navigation 
        var owl = $('.clientNineSlider');
        owl.owlCarousel();

        // Go to the next item
        $('.clientNineSlider-nav .next').click(function () {
            owl.trigger('next.owl.carousel');
        })

        // Go to the previous item
        $('.clientNineSlider-nav .prev').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });

    }());



    // -------------------------------------------------------------
    //  clientTenSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientTenSlider').owlCarousel({
            loop:true,
            margin: 30,
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:4,
                }
            }
        })


        // Navigation 
        var owl = $('.clientTenSlider');
        owl.owlCarousel();

        // Go to the next item
        $('.clientTenSlider-nav .next').click(function () {
            owl.trigger('next.owl.carousel');
        })

        // Go to the previous item
        $('.clientTenSlider-nav .prev').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });

    }());







    // -------------------------------------------------------------
    // tooltip
    // -------------------------------------------------------------

    (function () {

        $('[data-toggle="tooltip"]').tooltip()

    }());




    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------

    (function () {

        $("a[rel^='prettyPhoto']").prettyPhoto();

    }());





    // -------------------------------------------------------------
    // Flickrfeed #photoStreamOne
    // -------------------------------------------------------------

    (function () {

		if ($('#photoStreamOne').length > 0) { 
	        $('#photoStreamOne').jflickrfeed({
	            limit: 8,
	            qstrings: {
	                id: '52617155@N08'
	            },
	            itemTemplate: '<li>'+
	                            '<a href="{{image}}" title="{{title}}">' +
	                                '<img src="{{image_s}}" alt="{{title}}" />' +
	                            '</a>' +
	                          '</li>'
	        });
		}

    }());


    // -------------------------------------------------------------
    // Flickrfeed #photoStreamTwo
    // -------------------------------------------------------------

    (function () {


		if ($('#photoStreamTwo').length > 0) { 
		    $('#photoStreamTwo').jflickrfeed({
		        limit: 8,
		        qstrings: {
		            id: '52617155@N08'
		        },
		        itemTemplate: '<li>'+
		                        '<a href="{{image}}" title="{{title}}">' +
		                            '<img src="{{image_s}}" alt="{{title}}" />' +
		                        '</a>' +
		                      '</li>'
		    });
		}

    	


    }());




    





    // -------------------------------------------------------------
    // flexslider
    // -------------------------------------------------------------
    (function () {

      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        directionNav: false
      });
        
    }());



    // -------------------------------------------------------------
    // testimonialSliderOne
    // -------------------------------------------------------------
    (function () {

        $('.testimonialSliderOne').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

        // Navigation 
        $('.prev').on('click', function(){
            $('.testimonialSliderOne').flexslider('prev')
            return false;
        })

        $('.next').on('click', function(){
            $('.testimonialSliderOne').flexslider('next')
            return false;
        })
    }());





    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function(){

          $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

            $(window).scroll(function () {
                if ($(this).scrollTop() != 0) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            }); 

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());



    // -------------------------------------------------------------
    // Counter One (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-one').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#f9f9f9',
            scaleColor: false,
            lineWidth: 8,
            size: 150,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    // -------------------------------------------------------------
    // Counter Two (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-two').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 3,
            size: 150,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    // -------------------------------------------------------------
    // Counter Three (counter)
    // -------------------------------------------------------------

    $('.counter-section').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });



    // -------------------------------------------------------------
    // Counter Four (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-four').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 7,
            size: 125,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    // -------------------------------------------------------------
    // Counter Five (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-Five').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#f9f9f9',
            scaleColor: false,
            lineWidth: 3,
            size: 150,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());




    // -------------------------------------------------------------
    // Counter Six (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-six-1st').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    (function () {

        $('.chart-six-2nd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#eb768c',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-six-3rd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#c183d6',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-six-4th').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#73c8b7',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    // -------------------------------------------------------------
    // Counter (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-seven-1st').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#1788bd',
            lineWidth: 12,
            size: 175,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-seven-2nd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#dc677d',
            lineWidth: 10,
            size: 175,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());

    (function () {

        $('.chart-seven-3rd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#ae6ec3',
            lineWidth: 10,
            size: 175,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());

    (function () {

        $('.chart-seven-4th').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#65baa9',
            scaleColor: '#73c8b7',
            lineWidth: 10,
            size: 175,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());




     // -------------------------------------------------------------
    // Counter Eight (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-eight').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#fff',
            scaleColor: false,
            lineWidth: 8,
            size: 150,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());




    // -------------------------------------------------------------
    // Counter Nine (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-nine-1st').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#f9f9f9',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    (function () {

        $('.chart-nine-2nd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#eb768c',
            trackColor: '#f9f9f9',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-nine-3rd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#c183d6',
            trackColor: '#f9f9f9',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-nine-4th').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#73c8b7',
            trackColor: '#f9f9f9',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());




    //-------------------------------------------------------
    // counter Ten
    //-------------------------------------------------------
    $('.counterTen').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });





    //-------------------------------------------------------
    // counter Eleven
    //-------------------------------------------------------
    $('.counterEleven').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    //-------------------------------------------------------
    // counter Twelve
    //-------------------------------------------------------
    $('.counterTwelve').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });



    //-------------------------------------------------------
    // counter Thirteen
    //-------------------------------------------------------
    $('.counterThirteen').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });



    // ----------------------------------------------------------------
    // owlcarousel   {portfolio-fifteen}
    // ----------------------------------------------------------------

    $('.portfolio-wraper-fifteen').owlCarousel({
            stagePadding: 50,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })



    // ----------------------------------------------------------------
    // owlcarousel   {portfolio-sixteen}
    // ----------------------------------------------------------------
       
        $('.portfolio-wraper-sixteen').owlCarousel({
            stagePadding: 50,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })



    // ----------------------------------------------------------------
    // slickslider   {portfolio-seventeen}
    // ----------------------------------------------------------------

        $('.portfolio-wraper-seventeen').slick({
            centerMode: true,
            centerPadding: '200px',
            autoplay: true,
            slidesToShow: 2,
            autoplaySpeed: 3000,
            arrows: false,
            pauseOnHover: false,

            responsive: [
                            {
                              breakpoint: 768,
                              settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '40px',
                                pauseOnHover: false,
                                slidesToShow: 2
                              }
                            },
                            {
                              breakpoint: 480,
                              settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '40px',
                                pauseOnHover: false,
                                slidesToShow: 1
                              }
                            }
                        ]
        });




    // ----------------------------------------------------------------
    // slickslider   {portfolio-eighteen}
    // ----------------------------------------------------------------

        $('.portfolio-wraper-eighteen').slick({
            centerMode: true,
            centerPadding: '90px',
            autoplay: true,
            slidesToShow: 3,
            autoplaySpeed: 3500,
            arrows: false,
            pauseOnHover: false,

            responsive: [
                            {
                              breakpoint: 1199,
                              settings: {
                                centerPadding: '40px'
                              }
                            },
                            {
                              breakpoint: 768,
                              settings: {
                                slidesToShow: 2
                              }
                            },
                            {
                              breakpoint: 480,
                              settings: {
                                slidesToShow: 1,
                                centerPadding: '30px'
                              }
                            }
                        ]


        });

    
    // ----------------------------------------------------------------
    // slickslider   {portfolio-nineteen}
    // ----------------------------------------------------------------

        $('.portfolio-wraper-nineteen').slick({
            centerMode: true,
            centerPadding: '200px',
            autoplay: true,
            slidesToShow: 2,
            autoplaySpeed: 4500,
            arrows: false,
            pauseOnHover: false,

            responsive: [
                            {
                              breakpoint: 1199,
                              settings: {
                                centerPadding: '50px',
                                slidesToShow: 2
                              }
                            },
                            {
                              breakpoint: 480,
                              settings: {
                                centerPadding: '40px',
                                slidesToShow: 1
                              }
                            }
                        ]
        });



    // ----------------------------------------------------------------
    // flexslider   {gallery-one}
    // ----------------------------------------------------------------
        (function () {

            $('.gallery-one-wrapper').flexslider({
                animation: "slide",
                controlNav: "thumbnails",
                directionNav: false
            })

                // Navigation 
                $('.gallery-one-wrapper-nav .prev').on('click', function(){
                    $('.gallery-one-wrapper').flexslider('prev')
                    return false;
                })

                $('.gallery-one-wrapper-nav .next').on('click', function(){
                    $('.gallery-one-wrapper').flexslider('next')
                    return false;
                })
        }());



    // ----------------------------------------------------------------
    // owlcarousel   {gallery-five}
    // ----------------------------------------------------------------
        $('.gallery-five-wrapper').owlCarousel({
                margin:30,
                autoplay:true,   
                autoplaySpeed:150,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:6
                    }
                }
            })


    // ----------------------------------------------------------------
    // flexslider   {gallery-six}
    // ----------------------------------------------------------------
        $('.gallery-six-two-wrapper').flexslider({
                animation: "slide",
                controlNav: "thumbnails",
                directionNav: false,
            })



    // ----------------------------------------------------------------
    // owlcarousel   {gallery-eight}
    // ----------------------------------------------------------------
        $('.gallery-eight-wrapper').owlCarousel({
                margin:30,
                nav:false,
                autoplay:true,   
                autoplaySpeed:150,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:6
                    }
                }
            })



    // ----------------------------------------------------------------
    // owlcarousel   {gallery-nine}
    // ----------------------------------------------------------------
        $('.gallery-nine-wrapper').owlCarousel({
                margin:1,
                nav:false,
                autoplay:true,   
                autoplaySpeed:150,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            })


}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
  e.stopPropagation()
})