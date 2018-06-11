// // import electron from 'electron';
// const defaultMenu = require('electron-default-menu');
// // const dialog = require('dialog');
const {
  remote
} = require('electron')
const {
  Menu,
  app,
  MenuItem,
  shell,
  BrowserWindow
} = remote
const url = require("url");
const path = require("path");

// // console.log("create menu");

// // window.addEventListener('contextmenu', (e) => {
// //   e.preventDefault()
// //   menu.popup({ window: remote.getCurrentWindow() })
// // }, false)

// function onAppReady() {
//   // // Get template for default menu
//   const menu = defaultMenu(app, shell);
//   console.log("menu = ", menu);
//   // Add custom menu
//   menu.splice(4, 0, {
//     label: 'Custom',
//     submenu: [{
//       label: 'Do something',
//       click: (item, focusedWindow) => {
//         console.log("dialog");
//         // dialog.showMessageBox({message: 'Do something', buttons: ['OK'] })
//       }
//     }]
//   })
//   // console.log("create default menu");
//   // Set top-level application menu, using modified template
//   // Menu.setApplicationMenu(Menu.buildFromTemplate(menu));

//   const mymenu = Menu.getApplicationMenu();
//   Menu.setApplicationMenu(mymenu);

//   console.log("onAppReady");
// };


// const mainWindow = new BrowserWindow({});
// mainWindow.loadURL(mainWindowUrl);

// const menu = Menu.buildFromTemplate(menuTemplate);
// Menu.setApplicationMenu(menu);


// ##############################################

// const { remote } = require('electron')
// const { Menu, MenuItem } = remote

const menu = new Menu()
// , accelerator: 'Cmd+X'
menu.append(new MenuItem({
  label: 'cut',
  role: 'cut',
  click() {
    console.log('item cut clicked')
  }
}))
// menu.append(new MenuItem({ type: 'separator' }))
// , accelerator: 'Cmd+C'
menu.append(new MenuItem({
  label: 'copy',
  role: 'copy',
  click() {
    console.log('item copy clicked')
  }
}))
// menu.append(new MenuItem({ type: 'separator' }))
// , accelerator: 'Cmd+V'
menu.append(new MenuItem({
  label: 'paste',
  role: 'paste',
  click() {
    console.log('item paste clicked')
  }
}))
// menu.append(new MenuItem({
//   label: 'new window',
//   click() {
//     openWin2();
//   }
// }))

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  menu.popup({
    window: remote.getCurrentWindow()
  })
}, false)

//###########################################



// function openWin2() {
//   // const mainWindow = new BrowserWindow({});
//   // console.log("mainWindow : ",mainWindow);
//   // mainWindow.loadURL(mainWindowUrl);

//   // const menu = Menu.buildFromTemplate(menuTemplate);
//   // Menu.setApplicationMenu(menu);


// var win = new BrowserWindow({ width: 1024, height: 600, show: false });
// win.on('closed', function() {
//   win = null;
// });

// win.loadURL('http://localhost:3000/');
// win.show();
// }


//###########################################


// const { remote } = require('electron')
// const { Menu, MenuItem } = remote

// // console.log("create menu");

// const template = [

//   {
//     label: 'Edit',
//     submenu: [
//       { role: 'undo' },
//       { role: 'redo' },
//       { type: 'separator' },
//       // { role: 'cut' },
//       // { role: 'copy' },
//       // { role: 'paste' },
//       { role: 'pasteandmatchstyle' },
//       { role: 'delete' },
//       { role: 'selectall' }
//     ]
//   },
//   {
//     label: 'View',
//     submenu: [
//       { role: 'reload' },
//       { role: 'forcereload' },
//       { role: 'toggledevtools' },
//       { type: 'separator' },
//       { role: 'resetzoom' },
//       { role: 'zoomin' },
//       { role: 'zoomout' },
//       { type: 'separator' },
//       { role: 'togglefullscreen' }
//     ]
//   },
//   {
//     role: 'window',
//     submenu: [
//       { role: 'minimize' },
//       { role: 'close' }
//     ]
//   },
//   { role: 'cut' },
//   { role: 'copy' },
//   { role: 'paste' },
//   {
//     role: 'help',
//     submenu: [
//       {
//         label: 'Learn More',
//         click() { require('electron').shell.openExternal('https://electronjs.org') }
//       }
//     ]
//   },

// ]

// if (process.platform === 'darwin') {
//   console.log("platform is darwin");
//   template.unshift({
//     label: app.getName(),
//     submenu: [
//       { role: 'about' },
//       { type: 'separator' },
//       { role: 'services', submenu: [] },
//       { type: 'separator' },
//       { role: 'hide' },
//       { role: 'hideothers' },
//       { role: 'unhide' },
//       { type: 'separator' },
//       { role: 'quit' }
//     ]
//   })

//   // Edit menu
//   template[1].submenu.push(
//     { type: 'separator' },
//     {
//       label: 'Speech',
//       submenu: [
//         { role: 'startspeaking' },
//         { role: 'stopspeaking' }
//       ]
//     }
//   )

//   // Window menu
//   template[3].submenu = [
//     { role: 'close' },
//     { role: 'minimize' },
//     { role: 'zoom' },
//     { type: 'separator' },
//     { role: 'front' }
//   ]
// }


// const menu = Menu.buildFromTemplate(template)
// Menu.setApplicationMenu(menu)


// window.addEventListener('contextmenu', (e) => {
//   e.preventDefault()
//   menu.popup({ window: remote.getCurrentWindow() })
// }, false)