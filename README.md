split-domain.js
===============

Simple domain splitter.

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
