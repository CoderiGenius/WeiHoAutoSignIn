// ==UserScript==
// @name         微吼直播签到助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://live.vhall.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
function signIn() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === "签到") {
            buttons[i].click();
            console.log("签到成功！");
        }
    }
}
setInterval(signIn, 1000);
})();
