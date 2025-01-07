// ==UserScript==
// @name        Amazon URL Shortener
// @namespace   https://github.com/hirobon1690/amazon-url-shortner
// @version     1
// @include     https://www.amazon.co.jp/*
// @include     https://www.amazon.com/*
// @include     https://www.amazon.co.*
// @grant       none
// ==/UserScript==

history.pushState('','',location.href.match(/\/dp\/.{10}/));
history.pushState('','',location.href.match(/\/gp\/product\/.{10}/));