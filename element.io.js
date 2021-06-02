// ==UserScript==
// @name       Get Rid of Grey In Element
// @namespace  http://cbeyond.net/
// @version    0.1
// @description  Make conversations black
// @include      https://*.element.io/*
// @author       Garry T. Williams
// ==/UserScript==

(function () {
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'body, .mx_MessageTimestamp, .hljs-meta, ' +
        '.mx_EventTile_body { color: #000000 !important; } ' +
        '.mx_EventTile_content .markdown-body a.mx_GroupPill, ' +
        '.mx_EventTile_content .markdown-body a.mx_RoomPill, ' +
        '.mx_GroupPill, .mx_RoomPill {' +
        'color: #fff; background-color: #2e2f32;}'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
