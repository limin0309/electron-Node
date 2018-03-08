import { BrowserWindow } from 'electron';
import { create } from 'domain';

const {app,BrowseWindow} = require('electron');
const path=require('path');
const url=require('url') ;

let win;

constcreateWindow=()=>{
    win=new BrowserWindow({
        width:800,
        height:600
    });
    const URL=url.format({
        pathname:path.join(__dirname,'index.html'),// 配置环境的名字
        protocol:'file',//协议
        slashes:true//是否有双斜线
    });

    win.loadURL(URL);
    win.webContents.openDevTools();
    
    win.on('close',()=>{
        win=null;
    })
}

app.on('ready',createWindow);

app.on('window-all-close',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
});

app.on('active',()=>{
    if(win===null){
        createWindow()
    }
})