/**handles:aagb-separate-accordion,aagb-accordion-group**/
!function(n){n(document).on("click",".aab__accordion_head",function(){const s=n(this),a=s.parent(),o=s.children(".aab__accordion_icon").children(".aab__icon"),d=a.children(".aab__accordion_body");o.hasClass("dashicons-plus-alt2")?(o.removeClass("dashicons-plus-alt2"),o.addClass("dashicons-minus")):o.hasClass("dashicons-minus")?(o.removeClass("dashicons-minus"),o.addClass("dashicons-plus-alt2")):o.hasClass("dashicons-arrow-down-alt2")?(o.removeClass("dashicons-arrow-down-alt2"),o.addClass("dashicons-arrow-up-alt2")):o.hasClass("dashicons-arrow-up-alt2")?(o.removeClass("dashicons-arrow-up-alt2"),o.addClass("dashicons-arrow-down-alt2")):o.hasClass("dashicons-arrow-down")?(o.removeClass("dashicons-arrow-down"),o.addClass("dashicons-arrow-up")):o.hasClass("dashicons-arrow-up")?(o.removeClass("dashicons-arrow-up"),o.addClass("dashicons-arrow-down")):o.hasClass("dashicons-plus-alt")?(o.removeClass("dashicons-plus-alt"),o.addClass("dashicons-dismiss")):o.hasClass("dashicons-dismiss")?(o.removeClass("dashicons-dismiss"),o.addClass("dashicons-plus-alt")):o.hasClass("dashicons-insert")?(o.removeClass("dashicons-insert"),o.addClass("dashicons-remove")):o.hasClass("dashicons-remove")&&(o.removeClass("dashicons-remove"),o.addClass("dashicons-insert")),d.slideToggle()})}(jQuery);
!function(h){const s=h(".wp-block-aab-group-accordion");s.each(function(){const s=h(this).find(".aagb__accordion_head"),i=h(this).find(".aagb__accordion_body"),d=h(this).find(".aagb__icon"),a=h(this).find(".aagb__accordion_body--show"),n=h(this).find(".wp-block-aab-accordion-item");a.length&&a.slideDown(),s.each(function(){h(this).click(function(){const s=h(this).parent(),a=s.children(".aagb__accordion_body"),o=h(this).find(".aagb__icon");a.hasClass("aagb__accordion_body--show")?(s.removeClass("aagb__accordion_active"),a.removeClass("aagb__accordion_body--show"),a.slideUp()):(i.each(function(){h(this).hasClass("aagb__accordion_body--show")&&(h(this).removeClass("aagb__accordion_body--show"),h(this).slideUp())}),n.each(function(){h(this).hasClass("aagb__accordion_active")&&h(this).removeClass("aagb__accordion_active")}),d.each(function(){h(this).hasClass("dashicons-minus")?(h(this).removeClass("dashicons-minus"),h(this).addClass("dashicons-plus-alt2")):h(this).hasClass("dashicons-arrow-up")?(h(this).removeClass("dashicons-arrow-up"),h(this).addClass("dashicons-arrow-down")):h(this).hasClass("dashicons-arrow-up-alt2")?(h(this).removeClass("dashicons-arrow-up-alt2"),h(this).addClass("dashicons-arrow-down-alt2")):h(this).hasClass("dashicons-dismiss")?(h(this).removeClass("dashicons-dismiss"),h(this).addClass("dashicons-plus-alt")):h(this).hasClass("dashicons-remove")&&(h(this).removeClass("dashicons-remove"),h(this).addClass("dashicons-insert"))}),s.addClass("aagb__accordion_active"),a.addClass("aagb__accordion_body--show"),a.slideDown()),o.hasClass("dashicons-plus-alt2")?(o.removeClass("dashicons-plus-alt2"),o.addClass("dashicons-minus")):o.hasClass("dashicons-minus")?(o.removeClass("dashicons-minus"),o.addClass("dashicons-plus-alt2")):o.hasClass("dashicons-arrow-down-alt2")?(o.removeClass("dashicons-arrow-down-alt2"),o.addClass("dashicons-arrow-up-alt2")):o.hasClass("dashicons-arrow-up-alt2")?(o.removeClass("dashicons-arrow-up-alt2"),o.addClass("dashicons-arrow-down-alt2")):o.hasClass("dashicons-arrow-down")?(o.removeClass("dashicons-arrow-down"),o.addClass("dashicons-arrow-up")):o.hasClass("dashicons-arrow-up")?(o.removeClass("dashicons-arrow-up"),o.addClass("dashicons-arrow-down")):o.hasClass("dashicons-plus-alt")?(o.removeClass("dashicons-plus-alt"),o.addClass("dashicons-dismiss")):o.hasClass("dashicons-dismiss")?(o.removeClass("dashicons-dismiss"),o.addClass("dashicons-plus-alt")):o.hasClass("dashicons-insert")?(o.removeClass("dashicons-insert"),o.addClass("dashicons-remove")):o.hasClass("dashicons-remove")&&(o.removeClass("dashicons-remove"),o.addClass("dashicons-insert"))})})})}(jQuery);