#!/usr/bin/env gjs

/*! (c) Andrea Giammarchi - ISC */

(function (self) {'use strict';

  const { gi, searchPath, system } = imports;

  const { GLib, Gio } = gi;
  const { File } = Gio;

  const cache = Object.create(null);

  const DIR = GLib.get_current_dir();
  const MODULE = system.programInvocationName === 'gjs';
  const PROGRAM = MODULE ? '' : resolve(DIR, system.programInvocationName);

  let __dirname = MODULE ? DIR : getProgramDir(PROGRAM).get_path();
  let __filename = MODULE ? '' : PROGRAM.get_path();

  Object.defineProperties(window, {
    __dirname: {get: () => __dirname},
    __filename: {get: () => __filename},
    global: {value: window},
    require: {value: require}
  });

  self.require = require;

  if (MODULE)
    return;

  ARGV.forEach(arg => {
    const fd = resolve(DIR, arg);
    if (fd.query_exists(null))
      require(fd.get_path());
  });

  function getProgramDir(programFile) {
    const info = programFile.query_info('standard::', Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS, null);
    if (info.get_is_symlink()) {
      const symlinkFile = programFile.get_parent().resolve_relative_path(info.get_symlink_target());
      return symlinkFile.get_parent();
    } else {
      return programFile.get_parent();
    }
  }

  function resolve(dir, file) {
    return File.new_for_path(dir).resolve_relative_path(file);
  }

  function require(file) {
    if (/^[A-Z]/.test(file))
      return file.split('.').reduce(($, k) => $[k], gi);
    if (!/\.js$/.test(file))
      file += '.js';
    const fd = resolve(__dirname, file);
    const fn = fd.get_path();
    if (fn in cache)
      return cache[fn];
    const dn = fd.get_parent().get_path();
    const _fn = __filename;
    const _dn = __dirname;
    const saved_exports = window.exports;
    const saved_module = window.module;
    const exports = {};
    const module = { exports };
    window.exports = exports;
    window.module = module;
    __filename = fn;
    __dirname = dn;
    searchPath.unshift(dn);
    imports[fd.get_basename().replace(/\.js$/, '')];
    cache[fn] = module.exports;
    searchPath.shift();
    __filename = _fn;
    __dirname = _dn;
    window.exports = saved_exports;
    window.module = saved_module;
    return cache[fn];
  }

}(this));
