const electron = require('electron')

const BUILD_CONFIG = {
  VERSION: 1.2 ,
  BUILD: 240920201505
}

function onClickNewWindow () {
  // console.log("new window click menu")
  try {
    window.dispatchEvent(new CustomEvent('new-window'))
  } catch (error) {
    console.log('no dialog to show since it close')
  }
}

function callAppPort () {
  $.ajax({
    url: '/port',
    type: 'POST',
    complete: (data) => {
      // console.log("receive app port = ", data.responseJSON.port)
      try {
        let port = data.responseJSON.port
        let appPort = port
        _newWindow(appPort)
      // console.log('start app on port : ',port)
      } catch (error) {
        console.log('error get app port mainmenu_custom')
      }
    }
  })
}

function _newWindow (appPort) {
  try {
    console.log('_newWindow success at port : ', appPort)

    var win = new BrowserWindow({
      width: 1024,
      height: 600,
      show: false
    })
    win.on('closed', function () {
      win = null
    })

    win.loadURL('http://localhost:' + appPort)
    win.show()
  } catch (error) {
    console.log('_newWindow error : ', error)
  }
}

const template = [{
  label: 'Application',
  submenu: [
    // { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
    {
      label: app.getName() + ' V. '+BUILD_CONFIG.VERSION+' Build '+BUILD_CONFIG.BUILD,
      selector: 'orderFrontStandardAboutPanel:'
    },
    // {
    //   label: 'New Window',
    //   click() {

    //     // onClickNewWindow()
    //     // _newWindow()
    //     callAppPort()
    //   }
    // },
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
        // fortest
        role: 'reload'
      }, ,
      {
        // fortest
        role: 'toggledevtools'
      }
    ]
  },
// {
//   role: 'help',
//   submenu: [{
//     label: 'Learn More',
//     click() {
//       require('electron').shell.openExternal('https://electron.atom.io')
//     }
//   }]
// }
]

if (process.platform === 'darwin') {} else {}

console.log('main menu init = ', process.platform)

// const tpl = process.platform === 'darwin' ? macosTpl : otherTpl
const mymenu = Menu.buildFromTemplate(template)
// Menu.setApplicationMenu(mymenu)
// module.exports = mymenu; 
