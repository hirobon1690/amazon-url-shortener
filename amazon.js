// ==UserScript==
// @name        Amazon URL Shortener
// @namespace   https://github.com/hirobon1690/amazon-url-shortner
// @version     1
// @include     https://www.amazon.co.jp/*
// @include     https://www.amazon.com/*
// @include     https://www.amazon.co.*
// @grant       none
// ==/UserScript==

(function() {
  const dp = location.href.match(/\/dp\/([A-Z0-9]{10})/i);
  const gp = location.href.match(/\/gp\/product\/([A-Z0-9]{10})/i);
  const asin = (dp && dp[1]) || (gp && gp[1]);
  if (asin) {
    history.replaceState('', '', `/dp/${asin}`);
  }
})();
