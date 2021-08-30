// ==UserScript==
// @name         Format Worklog Entries Correctly
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make worklog entries easier to read.
// @author       You
// @match        https://tts-ticketviewer.apps.cloud.comcast.net/*
// @grant        none
// ==/UserScript==

document.getElementsByTagName("head")[0].
    appendChild(document.createElement("style").
	appendChild(document.createTextNode(
	    'span.value.details, span.value { white-space: '
	    + 'pre; font-family: monospace; !important; }')));
