$(document).ready(function(){
    $('.our-school-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText:['<i class="far fa-arrow-right"></i>','<i class="far fa-arrow-left"></i>'],
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
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        // navText:['<i class="far fa-arrow-right"></i>','<i class="far fa-arrow-left"></i>'],
        responsive:{
            0:{
                items:1,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            600:{
                items:1
            },
            1000:{
                items:1,
            }
        }
    })
});
