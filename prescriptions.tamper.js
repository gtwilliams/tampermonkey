// ==UserScript==
// @name         prescriptions
// @namespace    http://tampermonkey.net/
// @version      2024-04-19
// @description  Publix Prescriptions!
// @author       You
// @match        https://rx.publix.com/en/rx*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=publix.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var x = document.createElement("style");
    x.appendChild(document.createTextNode(
        'body, h1, h3, p, h4.rx-list-medication-name, ' +
        'a, #navBottom li a, .details-link a, ' +
        '.highlight-black .rx-item-panel a, ' +
        '.rx-patient-card-header ' +
	'{ color: #000000 !important; }'));
    document.getElementsByTagName("head")[0].appendChild(x);
})();
