// ==UserScript==
// @name       Wikipedia article to black
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Wikipedia article to black
// @match      http://en.wikipedia.org/*
// @author     Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        '.mw-body-content { color: #000000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
