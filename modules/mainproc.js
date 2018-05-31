const { app } = require('electron')
const ipc = require('electron').ipcMain
const dialog = require('electron').dialog
var fs = require('fs');
var util = require('util');

ipc.on('open-error-dialog', function (event, msg) {
    dialog.showErrorBox(msg.title, msg.detail)
})

ipc.on('save-dialog', function (event, options) {
    // const options = {
    //     title: 'Save a Data',
    //     filters: [
    //         { name: 'Images', extensions: ['BIN', 'jpg', 'png', 'gif'] }
    //     ]
    // }
    dialog.showSaveDialog(options, function (fileName) {
        if (fileName === undefined) {
            console.log("You didn't save the file");
            return;
        }
        // fileName is a string that contains the path and filename created in the save file dialog.  

        event.sender.send('saved-file', fileName)
    })
})

// create a file only file logger
const log = require('simple-node-logger').createSimpleLogger(app.getPath('appData') + '/' + app.getName() + '/log.txt');
ipc.on('log', function (event, msg) {
    if (msg.method === 'log') msg.method = 'info';
    log[msg.method](msg.text);
})