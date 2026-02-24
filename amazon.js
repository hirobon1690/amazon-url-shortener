// ==UserScript==
// @name        Amazon URL Shortener
// @namespace   https://github.com/hirobon1690/amazon-url-shortner
// @version     1
// @include     https://www.amazon.co.jp/*
// @include     https://www.amazon.com/*
// @include     https://www.amazon.co.*
// @grant       none
// ==/UserScript==

const fix = u => u ? (u.match(/\/(dp|gp\/product)\/.{10}/) || [u])[0] : u;
['pushState', 'replaceState'].forEach(m => {
    const orig = history[m];
    history[m] = (s, t, u) => orig.call(history, s, t, fix(u));
});
history.replaceState('', '', fix(location.href));
