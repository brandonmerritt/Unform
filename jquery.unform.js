(function($) {
    var YesNo = new Array();
    YesNo["true"] = "Yes";
    YesNo["false"] = "No";
    $.fn.inline = function() {
        var editable = $(this);
        this.each(function() {
                $(this).find('input, select, textarea').not('[type=button],[type=submit]').each(function() {
                    if ($(this).attr("type") == "checkbox") {
                        $(this).parent().append("<span class=\"editable\">" + YesNo[$(this).attr('checked')] + "</span>");
                        $(this).hide();
                        $(this).bind('blur', function() {
                            var t = YesNo[$(this).attr('checked')];
                            $(this).hide().next().show().text(t);
                        });
                    }
                    else {
                        $(this).parent().append("<span class=\"editable\">" + $(this).val() + "</span>");
                        $(this).hide();
                        $(this).bind('blur', function() {
                            var t = $(this).val();
                            $(this).hide().next().show().text(t);
                        });
                    }
                });
                $('.editable').live('dblclick', function() {
                    $(this).hide().prev().show().focus();
                });
                $('.make-editable').toggle(
                function() {
                    $('.editable').hide().prev().show();
                }, function() {
                    $('.editable').remove();
                    $(editable).inline();
                });
        });
    };
})(jQuery);