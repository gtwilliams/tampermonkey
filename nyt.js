// ==UserScript==
// @name       Get Rid of Grey
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Make article paragraphs black
// @include      http://www.nytimes.com/*
// @copyright  2014, Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'p.story-body-text, p.story-content { color: #000000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
