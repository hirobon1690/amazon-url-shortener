// ==UserScript==
// @name        Amazon URL Shortner
// @namespace   https://github.com/hirobon1690/amazon-url-shortner
// @version     1
// @include     https://www.amazon.co.jp/*
// @grant       none
// ==/UserScript==

history.pushState('','',location.href.match(/\/dp\/.{10}/));