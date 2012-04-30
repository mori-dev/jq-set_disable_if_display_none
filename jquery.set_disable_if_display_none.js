(function($) {

    var is_none = function(elm) {
        return (($(elm).css('display') === "none") && ($(elm).attr('type') !== "hidden")) ? true : false;
    };

    var set_disable = function (elm) {
        $(elm).attr("disabled", "disabled");
        return true;
    };

    var set_disable_if_display_none = function(element) {
        $(element).each(function(i,elm) {
          is_none(elm) && set_disable(elm);
          $(elm).parents().each(function(i,e) {
            is_none(e) && set_disable(elm);
          });
        });
    };

    $.fn.set_disable_if_display_none = function( options ) {
        options = $.extend({ input: 'input' }, options);
        return this.each(function() {
           $(this).submit(function (){ set_disable_if_display_none(options.input); });
        });
    };

})(jQuery);
