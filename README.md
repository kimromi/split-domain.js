split-domain.js
===============

Simple domain name splitter.

<a href="https://www.npmjs.com/package/split-domain" title="npm"><img src="http://img.shields.io/npm/v/split-domain.svg?style=flat-square"></a>
<a href="https://travis-ci.org/kimromi/split-domain.js" title="travis"><img src="https://img.shields.io/travis/kimromi/split-domain.js.svg?style=flat-square"></a>
<a href="https://coveralls.io/github/kimromi/split-domain.js" title="coveralls"><img src="https://img.shields.io/coveralls/kimromi/split-domain.js.svg?style=flat-square"></a>
<a href="https://github.com/kimromi/split-domain.js/blob/master/MIT-LICENSE" title="MIT License"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>

Installation
------------

```sh
$ npm install split-domain --save
```

Usage
-----

### Node.js

```javascript
import splitDomain from 'split-domain'

const domain = splitDomain('example.com')
domain.subDomain // => ''
domain.sld       // => 'example'
domain.tld       // => 'com'

const domain = splitDomain('sub.example.com')
domain.subDomain // => 'sub'
domain.sld       // => 'example'
domain.tld       // => 'com'

const domain = splitDomain('example.co.jp')
domain.subDomain // => ''
domain.sld       // => 'example'
domain.tld       // => 'co.jp'

const domain = splitDomain('sub.example.co.jp')
domain.subDomain // => 'sub'
domain.sld       // => 'example'
domain.tld       // => 'co.jp'
```

TypeSctipt

```javascript
import splitDomain, { SplitDomain } from 'split-domain'

const domain: SplitDomain = splitDomain('example.com')
domain.subDomain // => ''
domain.sld       // => 'example'
domain.tld       // => 'com'

const domain: SplitDomain = splitDomain('sub.example.com')
domain.subDomain // => 'sub'
domain.sld       // => 'example'
domain.tld       // => 'com'

const domain: SplitDomain = splitDomain('example.co.jp')
domain.subDomain // => ''
domain.sld       // => 'example'
domain.tld       // => 'co.jp'

const domain: SplitDomain = splitDomain('sub.example.co.jp')
domain.subDomain // => 'sub'
domain.sld       // => 'example'
domain.tld       // => 'co.jp'
```
Contribution
------------

1. Fork (https://github.com/kimromi/domainSplitter.js/fork)
1. Create a feature branch
1. Commit your changes
1. Rebase your local changes against the master branch
1. Run test suite with the `npm ci` command and confirm that it passes
1. Create a new Pull Request

Author
------

[kimromi](https://github.com/kimromi)
