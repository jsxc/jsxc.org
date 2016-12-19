$('a[href^="images/"]').colorbox({
    maxWidth: '90%',
    maxHeight: '90%',
    rel: 'gal'
});

$('#post .content img').click(function() {
   $(this).colorbox({href: $(this).attr('src')});
});

$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    var nav = $('#mainNav');
    if (scroll > 100 && !nav.hasClass('navbar-graceful')) {
        nav.addClass('navbar-graceful');
    } else if (scroll <= 100 && nav.hasClass('navbar-graceful')) {
        nav.removeClass('navbar-graceful');
    }
});

// Piwik
var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u = "/piwik/";
    _paq.push(['setTrackerUrl', u + 'piwik.php']);
    _paq.push(['setSiteId', 8]);
    var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.defer = true;
    g.async = true;
    g.src = u + 'piwik.js';
    s.parentNode.insertBefore(g, s);
})();
