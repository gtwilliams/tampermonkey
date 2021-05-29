// ==UserScript==
// @name       Ars Tecnica article to black
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Ars Tecnica article to black
// @match      http://arstechnica.com/*
// @match      http://arstechnica.co.uk/*
// @match      https://arstechnica.com/*
// @match      https://arstechnica.co.uk/*
// @author     Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'article.standalone, .article-content, .comment, .quotecontent, ' +
	'.comments-row, .post-content, .article-content blockquote, ' +
	'.article-single blockquote ' +
	'{ color: #000000 !important; } .comments-area ' +
        '#comments > li.gray > .body { opacity: 1 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
