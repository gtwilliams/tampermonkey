// ==UserScript==
// @name       Get Rid of Grey
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Make conversations black
// @include      https://*.element.io/*
// @author       Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'body { color: #000000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
