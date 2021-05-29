// ==UserScript==
// @name         Format Worklog Entries Correctly
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tts-ticketviewer.apps.cloud.comcast.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'div.ticketviewer[_ngcontent-c2] ' +
        'div.worklogs-container[_ngcontent-c2] ' +
        'span.value.details[_ngcontent-c2] ' +
        '{ white-space: pre; font-family: monospace; !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
