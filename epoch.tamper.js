// ==UserScript==
// @name       Epoch Times Article to Black
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Epoch Times Article to Black
// @match      https://www.theepochtimes.com/*
// @author     Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'body { color: #000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
