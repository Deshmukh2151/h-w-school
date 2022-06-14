$(document).ready(function(){
    $(".collapsed").click(function(){
        $(".logo__heading").toggleClass("text-white");
    });
    $("#searchHere").click(function(){
        $(".search-div").toggleClass("d-block");
    });
    // Carousel
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
                items:4
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
            },
            600:{
                items:1
            },
            1000:{
                items:3,
            }
        }
    });

    $('.spinner-lists-item').on("click", function(){
    
        $('.spinner-lists-item').removeClass('active');
        
        $(this).addClass('active');
    });
});


