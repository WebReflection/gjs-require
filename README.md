# gjs-require
A require like function for GJS

```sh
$ ./gjs-require test/index.js

gjs-require/test/index.js
gjs-require/test/ran/dom.js
random: 0.212101615295042
true
```

### Features

  * automatically provides `__dirname` and `__filename` variables (top level onyl)
  * automatically provides `module` and `exports` (top level onyl)
  * simplifies imports through GJS resolving absolutes and relative paths <sup><sub>(note: module should start with either `.` or `/`)</sub></sup>
  * usable to also require `GLib`, `Gio.File` or any other `gi` namespace

### Usage

You can either use `gjs-require` as executable, and pass along one or more files, or you can use it as `gjs` argument itself, and still pass along files to require, giving you the chance to configure gjs flags too.

Last, but not least, you can `const {require} = imports.require` assuming the `gjs-require` folder is part of `import.searchPath`.

### Install

```sh
# via terminal
curl -LO https://webreflection.github.io/gjs-require
chmod a+x gjs-require
./gjs-require file.js

# via npm
npm i -g gjs-require
gjs-require file.js

# via npx
npx gjs-require file.js

# via gjs itself
const {require} = imports.require;
const module = require('./file.js');
```
