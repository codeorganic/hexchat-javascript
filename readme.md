HexChat Javascript
==================

[![Build Status](https://travis-ci.org/TingPing/hexchat-javascript.png?branch=master)](https://travis-ci.org/TingPing/hexchat-javascript)

Javascript interface using Spidermonkey.

It's my first time using javascript and c++ so forgive my mistakes ;)

Consider this an alpha, everything works well enough to do useful things with it
but the api is very likely to change and some bugs still exist.


Features
--------

- Load/unload/reload/autoloading scripts
- Interpreter via */js*
- Runtime per script
- Full coverage of hexchat api
- Windows(32bit) and Unix support


Downloads
---------

- [Fedora x64](http://dl.tingping.se/fedora/x86_64/)
- [Arch](https://aur.archlinux.org/packages/hexchat-javascript-git/)
- [Windows x86](http://dl.tingping.se/win32/hexchat-javascript/)


Requirements
------------

- HexChat 2.9.6+
- JS 1.8.5

Installation
------------

###Windows:

Place the dll above in the *addons* folder within your [config dir](http://docs.hexchat.org/en/latest/settings.html#config-files)
and you must download the [xulrunner-sdk](https://ftp.mozilla.org/pub/mozilla.org/xulrunner/releases/10.0.4esr/sdk/xulrunner-10.0.4esr.en-US.win32.sdk.zip)
and add its *bin* folder to your PATH.


Building
--------

###Linux:

1. Install the hexchat and js dev package from your distro of choice.
2. *make && make install*

###Windows:

1. Download [xulrunner-sdk](https://ftp.mozilla.org/pub/mozilla.org/xulrunner/releases/10.0.4esr/sdk/xulrunner-10.0.4esr.en-US.win32.sdk.zip).
2. Update path in [hexchat-javascript.props](win32/hexchat-javascript.props).
3. Open in [Visual Studio](https://www.microsoft.com/visualstudio/eng/downloads#d-express-windows-desktop) and build.
