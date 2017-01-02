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
                }
            });
        });




//  // If the aria-expanded is false, hide the group and display the collapsed state image
//       if ($(this).attr('aria-expanded') === 'true') {
//          $(".navbar-toggler").css('background-color', 'red');
//       }
//       else {
//          $(".navbar-toggler").css('background-color', 'blue');
//       }

    // if ($(this).attr('aria-expanded') === 'false') {
    //      $(".navbar-toggler").css('background-color', 'transparent');
    //   }
    //   else {
    //      $(".navbar-toggler").css('background-color', 'red');
    //   }

// $('navbar-toggler[aria-expanded="true"]').css('background-color','#42DCA3');


// $(".navbar active").attr("aria-expanded","false").css('background-color', 'green');
// $(".navbar active").attr("aria-expanded","true").css('background-color', 'red');

// $('#history').tab('show')
// $('#approach').tab('show')
// $('#culture').tab('show')
// $('#method').tab('show')

