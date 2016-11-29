/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = [
  'test/',
  'docs/',
  'tools/',
  'signcode-tf',
  'rx',
  'nslog',
  'eslint',
  'cppunitlite',
  'caniuse-db',
  'spectron',
  'abp-filter-parser-cpp/(node_modules|test|perf|sample|scripts|test|vendor|ABPFilterParserData.dat)',
  'abp-filter-parser-cpp/build/Release/(obj|obj.target|.deps|abp-filter-parser-cpp.pdb|abp-filter-parser-cpp.map)',
  'tracking-protection/(node_modules|test|data|scripts|vendor)',
  'tracking-protection/build/node_modules',
  'tracking-protection/build/Release/(tp_node_addon.pdb|sample.pdb|test.pdb|tp_node_addon.map|sample.map|test.map|hashset-cpp.map|sample.exe|test.exe)',
  'hashset-cpp/build/Release/(obj|hashset-cpp.pdb|hashset-cpp.map)',
  'bloom-filter-cpp/build/Release/(obj|bloom-filter-cpp.map|bloom-filter-cpp.pdb)',
  'keytar/build/Release/(obj|keytar.pdb|keytar.map)',
  'spellchecker/build/Release/(obj|spellchecker.pdb|spellchecker.map)',
  'sqlite3/(src|deps)',
  'sqlite3/build/Release/(obj|obj.target|.deps)',
  'tracking-protection/build/Release/(obj|obj.target|.deps|hashset-cpp.pdb)',
  'nsp/node_modules',
  'electron-installer-squirrel-windows',
  'electron-chromedriver',
  'node-notifier/vendor',
  'node-gyp',
  'npm',
  '.brave-gyp',
  '.vscode',
  '.github',
  'jsdoc',
  'docs',
  'electron-download',
  'electron-rebuild',
  'electron-packager',
  'electron-builder',
  'electron-prebuilt',
  'electron-rebuild',
  'muon-winstaller',
  'electron-winstaller-fixed',
  'electron-installer-redhat',
  'flow-bin',
  'babel$',
  'babel-(?!polyfill|regenerator-runtime)',
  'jsdom-global',
  'react-addons-perf',
  'leveldown',
  'sqlite3'
]
