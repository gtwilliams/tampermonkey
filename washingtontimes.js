// ==UserScript==
// @name       Get Rid of Grey In Paragraphs
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Make conversations black
// @match        https://*.washingtontimes.com/*
// @author       Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'p { color: #000000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
