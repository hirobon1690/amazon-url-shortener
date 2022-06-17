// ==UserScript==
// @name        Amazon URL Shortner
// @namespace   
// @description AmazonのURLを短縮します。
// @include     http://*amazon.co.jp/*
// @exclude     
// ==/UserScript==

history.pushState('','',location.href.match(/\/dp\/.*\//));