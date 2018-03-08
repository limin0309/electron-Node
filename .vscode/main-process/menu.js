const {Menu,app} =require('electron');
let template=[
   { 
label:'one',
submenu:[
    {
        label: 'two'
    },
    {
        type:'separator'// 分隔符
    },
    {
        label:'haha',
        click:()=>{
            console.log('Haha')
        }
    }
   
]   
}
]