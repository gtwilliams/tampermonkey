// ==UserScript==
// @name       Bridge Cheaters to black
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Bridge Cheaters to black
// @match      http://bridgecheaters.com/*
// @author     Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'body { color: #000000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
