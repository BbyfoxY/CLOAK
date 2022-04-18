(function() {
    var l = document.querySelector("link[rel*='icon']") || document.createElement('link');
    l.type = 'image/x-icon';
    l.rel = 'shortcut icon';
    l.href = 'https://youtube.com/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(l);
    document.title = 'Youtube';
})();