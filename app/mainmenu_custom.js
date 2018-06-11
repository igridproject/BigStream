'use strict'
// const os = require('os')
// const path = require('path')
const electron = require('electron')
// const {
//   // app,
//   // BrowserWindow,
//   // Menu
// } = electron;
// const config = require('./config')
// const {sendAction} = require('./util')

// const appName = app.getName()

function onClickNewWindow(){
  // console.log("new window click menu");
  window.dispatchEvent(new CustomEvent('new-window'));
}

const template = [{
    label: 'Application',
    submenu: [
      // { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
      {
        label: app.getName() + ' V. 1',
        selector: 'orderFrontStandardAboutPanel:'
      },
      {
        label: "New Window",
        click() {

          onClickNewWindow();

        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function () {
          app.quit()
        }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [{
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        selector: 'undo:'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        selector: 'redo:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        selector: 'cut:'
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        selector: 'copy:'
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        selector: 'paste:'
      },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        selector: 'selectAll:'
      }
    ]
  },
  {
    label: 'View',
    submenu: [{
        type: 'separator'
      },
      {
        role: 'resetzoom'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        role: 'togglefullscreen'
      },
      {
          //fortest
        role: 'reload'
      }, ,
      {
        //fortest
        role: 'toggledevtools'
      },
    ]
  },
  {
    role: 'help',
    submenu: [{
      label: 'Learn More',
      click() {
        require('electron').shell.openExternal('https://electron.atom.io')
      }
    }]
  }
]

if (process.platform === 'darwin') {} else {}

console.log("main menu init = ", process.platform);

// const tpl = process.platform === 'darwin' ? macosTpl : otherTpl;
const mymenu = Menu.buildFromTemplate(template);
// Menu.setApplicationMenu(mymenu);
module.exports = mymenu;


