// ==UserScript==
// @name       Gmail to black
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Gmail to black
// @match      https://mail.google.com/*
// @author     Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        '.hx { color: #000000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
