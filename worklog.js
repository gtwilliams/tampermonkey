// ==UserScript==
// @name         Format Worklog Entries Correctly
// @namespace    https://comcast.com/
// @version      0.1
// @description  Nice format of log entries
// @author       Garry T. Williams
// @match        http://sams.cable.comcast.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        '.log { white-space: pre; ' +
        'font-family: monospace; !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
