# Bigstream-console

- install nvm at https://github.com/creationix/nvm
- #nvm install v6.1.0
- #nvm use v6.1.0

## Running Application

Prerequisite

```
$ npm install -g polymer-cli
$ npm install -g bower
$ npm install && bower install
```

and run this to open application (This will create run of Bigstream-console application on electron)

```
$ npm start
```

## Building Application

This packaging will be create built file in ./release-builds

```
# npm install electron-packager --save-dev
# npm install electron-packager -g

# packaging for Windows
for window 32bit
$ npm run package-win32 

for window 64bit
$ npm run package-win64 

# packaging for Mac OS X
$ npm run package-mac

# packaging for Linux (Ubuntu)
$ npm run package-linux
```

## Create Installer

This will be create installer file in ./release-built-installers

```
# npm i electron-installer-dmg --save-dev
# npm i electron-installer-dmg -g

# For Windows (exe file installer)
$ npm run create-installer-win

# For Mac OS X (dmg file)
$ npm run create-installer-mac
```
