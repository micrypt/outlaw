// Main toggle for image
;(function($) {
    "use strict";
    var outlaw = function (target) {

        var alt = 'large',
            $window = $(window),
            $body = $('body'),
            $overlay = $(document.createElement('div')).addClass('outlaw-overlay').hide();
        
        target = target || '.imgSmall';

        var $targetImgs = $(target);
        $targetImgs.filter(':first').before($overlay);

        $targetImgs.each(function(index){
            var $this = $(this);
            $this.addClass('outlaw');
            $this.click(function () {
                var $this = $(this);
                $overlay.toggle();
                $this.toggleClass(alt);
                // Disable scrolling once zoomed in
                $body.toggleClass('stop-scrolling');
            });
            
            // Off click function
            $body.click(function (event) {
                if (!$(event.target).closest('.outlaw.large').length) {
                    $('outlaw-large').removeClass('large');
               }
            });
        });
    };
    window.outlaw = outlaw;
})(jQuery);