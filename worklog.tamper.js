// ==UserScript==
// @name         Format Worklog Entries Correctly
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make worklog entries easier to read.
// @author       You
// @match        https://tts-ticketviewer.apps.cloud.comcast.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'span.value.details, span.value ' +
        '{ white-space: pre; font-family: monospace; !important; }' +
        '.table, .mat-card { color: #000; }' +
        '.table td, .table th { padding: 0.25rem; font-size: larger; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
