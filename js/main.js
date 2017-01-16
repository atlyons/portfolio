// The following code is for the nav bar
// Simply update the colors before to suit your needs
$(document).ready(function(){       
            var scroll_pos = 100;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 110) {
                    // header background color after scrolling
                    $("nav").css('background-color', 'white');
                    // header text color after scrolling
                    $("nav a").css('color', 'black');
                    // hamburger button outline color after scrolling
                    $("button i").css({"color":"black"});
                    // hamburger button icon color after scrolling
                    $(".navbar-toggler").css({"border-color":"black"});
                    $(".navbar-brand").css('color', 'black');
                    $(".navbar-brand").css('font-weight', '700');
                } else {
                    // header background color before scrolling
                    $("nav").css('background-color', 'transparent');
                    // header text color before scrolling
					$("nav a").css('color', 'white');
					$(".navbar-brand").css('color', 'white');
                    // hamburger button icon color before scrolling
                    $(".fa-bars").css({"color":"white"});
                    // hamburger button outline color before scrolling
                    $(".navbar-toggler").css({"border-color":"white"});
                    $(".navbar-brand").css('color', 'white');
                    $(".navbar-brand").css('font-weight', '100');
                }
            });
        });


$('body').css('overflow', 'hidden');


