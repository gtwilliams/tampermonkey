// ==UserScript==
// @name       Ars Tecnica article to black
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Ars Tecnica article to black
// @match      http://arstechnica.com/*
// @copyright  2014, Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'article.standalone, .article-content, .comment, .quotecontent, ' +
	'.post-content, .article-content blockquote { color: #000000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
