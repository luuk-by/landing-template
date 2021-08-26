$(document).ready(function () {
    /* scroll */
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });


    !(function (i) {
        var o, n;
        i(".faq_item .quest").on("click", function () {
            (o = i(this).parents(".faq_item")),
                (n = o.find(".answer")),
                o.hasClass("active_block")
                    ? (o.removeClass("active_block"), n.slideUp())
                    : (o.addClass("active_block"), n.stop(!0, !0).slideDown(), o.siblings(".active_block").removeClass("active_block").children(".info").stop(!0, !0).slideUp());
        });
    })(jQuery);
});

(function setDate() {
    let d = new Date();
    let p = new Date(d.getTime() - 5 * 86400000);
    let monthA = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    $(".by").html(p.getDate() + " ");

    p = new Date(d.getTime());
    $(".to").html(p.getDate() + " " + monthA[p.getMonth()] + " ");
})();
