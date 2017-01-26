// ==UserScript==
// @name       WSJ article to black
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  WSJ article to black
// @match      http://www.wsj.com/*
// @copyright  2014, 2017 Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        '.article-wrap, .fyre, .fyre-comment-stream ' +
	'{ color: #000000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
