var top_menu_height = 0;
jQuery(function($) {
    jQuery(window).on('load', function(){
            $('.external-link').unbind('click');    
        });
        
        jQuery(document).ready( function() {

        // load google map
        // var script = document.createElement('script');
        // script.type = 'text/javascript';
        // script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        //     'callback=initialize';
        // document.body.appendChild(script);

        // top_menu_height = $('.templatemo-top-menu').height();
        // scroll spy to auto active the nav item
        // jQuery('body').scrollspy({ target: '#templatemo-nav-bar', offset: top_menu_height + 10 });
        // jQuery('.external-link').unbind('click');

        // scroll to top
        // jQuery('#btn-back-to-top').click(function(e){
        //     e.preventDefault();
        //     scrollTo('#templatemo-top');
        // });

        // scroll to specific id when click on menu
        jQuery('.templatemo-top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                jQuery('.navbar-collapse').collapse('toggle');
            }
            jQuery(this).blur();
            return false;
        });
        /*
        var dt = window.atob('IHwgRGVzaWduOiA8YSByZWw9Im5vZm9sbG93IiBocmVmPSJodHRwOi8vd3d3LnRlbXBsYXRlbW8uY29tL3RtLTM5NS11cmJhbmljIiB0YXJnZXQ9Il9wYXJlbnQiPlVyYmFuaWM8L2E+'); // decode the string
        var div = document.getElementById('footer-line');
        div.innerHTML = div.innerHTML + dt;
        */
        // to stick navbar on top
        // jQuery('.templatemo-top-menu').stickUp();

        // gallery category
        jQuery('.templatemo-gallery-category a').click(function(e){
            e.preventDefault(); 
            jQuery(this).parent().children('a').removeClass('active');
            jQuery(this).addClass('active');
            var linkClass = jQuery(this).attr('href');
            jQuery('.gallery').each(function(){
                if(jQuery(this).is(":visible") == true){
                    jQuery(this).hide();
                };
            });
            jQuery(linkClass).fadeIn();  
        });

        //gallery light box setup
        jQuery('a.colorbox').colorbox({
            rel: function(){
            return jQuery(this).data('group');
        }
        });
    });
});

// function initialize() {
//     var mapOptions = {
//       zoom: 12,
//       center: new google.maps.LatLng(16.8451789,96.1439764)
//     };

//     var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
// }

// scroll animation 
function scrollTo(selectors)
{
    if(!jQuery(selectors).size()) return;
    var selector_top = jQuery(selectors).offset().top - top_menu_height;
    jQuery('html,body').animate({ scrollTop: selector_top }, 'slow');
}