const click=document.querySelector('#click');
const path=require('path');
const BrowseWindow=requrie('electron').remote.BrowseWindow;
// 此处用到了remote  remote（渲染进程想拿到主进程的内容，例如：菜单，提示框，只要是可以枚举的都可以在remote里面，是ipc通信的简便方式）

let win;
click.onclick=()=>{
    //window.open('http://nodelover.me');
    win = new BrowseWindow({
       width:300,
       height:200,
       frame:true,
       
    });
    win.on('close',()=>{
        win.loadURL(path.join('file:',__dirname,'../model.html'));
        console.log(win)
        open('./model.html')
    })
    
}