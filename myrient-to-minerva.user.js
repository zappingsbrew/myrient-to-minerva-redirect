// ==UserScript==
// @name         Myrient to Minerva Redirect
// @namespace    https://github.com/zappingsbrew/myrient-to-minerva-redirect
// @version      1.0.0
// @description  Redirect myrient.erista.me/files/ URLs to minerva-archive.org/browse/, preserving full path and query
// @author       Zappingsbrew & ChatGPT
// @match        https://myrient.erista.me/files/*
// @icon         https://minerva-archive.org/favicon.ico
// @updateURL    https://github.com/zappingsbrew/myrient-to-minerva-redirect/releases/latest/download/myrient-to-minerva-redirect.user.js
// @downloadURL  https://github.com/zappingsbrew/myrient-to-minerva-redirect/releases/latest/download/myrient-to-minerva-redirect.user.js
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

/*!
 * MIT License
 *
 * Copyright (c) 2026 zappingsbrew
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function() {
    'use strict';

    const newUrl = window.location.href
        .replace('myrient.erista.me', 'minerva-archive.org')
        .replace('/files/', '/browse/');

    window.location.replace(newUrl);
})();
