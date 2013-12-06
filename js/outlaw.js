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

        var react = function (target) {
            var $this = target;
            $overlay.toggle();
            $this.toggleClass(alt);
            // Disable scrolling once zoomed in
            $body.toggleClass('stop-scrolling');
        };

        $targetImgs.each(function(index){
            var $this = $(this);
            $this.addClass('outlaw');
            $this.click(function(){
                react($this);
            });
        });

        // Body off click function
        $body.click(function (ev) {
            var $large = $('.outlaw.large'),
                $target = $(ev.target);
            if ($large.length && !$target.is($large)) {
                react($large);
                ev.preventDefault();
            }
        });
    };
    window.outlaw = outlaw;
})(jQuery);