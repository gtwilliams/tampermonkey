// ==UserScript==
// @name       Fedora Blog to Black
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Gmail to black
// @match      https://communityblog.fedoraproject.org/*
// @author     Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'body { color: #000000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
