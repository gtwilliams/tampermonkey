// ==UserScript==
// @name       epoch-font-family
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Fix broken font-family on epoch Web sites
// @match      https://www.theepochtimes.com/*
// @author     Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'div.post_content ' +
	'{ font-family: Georgia,"Times New Roman" !important; }' +
        'body { color: #000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
