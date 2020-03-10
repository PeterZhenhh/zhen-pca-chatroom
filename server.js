/*引包*/
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*创建users数组，存放io对象*/
 users = [];
 userList = [];
/*读取静态文件*/
app.use(express.static("./public"));


/*监听客户端连接*/
io.on("connection",function(socket){

/*监听index.html发来的joining事件(输入昵称之后)*/
    socket.on("joining",function(name){
//将登录页面收集到的name（昵称）存储在服务器端
        trueName = name;
    users[name] = socket;
    userList.push(name);
})
//监听Head并把头像地址保存在服务器端
    socket.on("Head",function(Head){
        trueHead =Head;
    })

//监听joined事件（进入chatroom之后）
    socket.on("joined",function(){
    //给每个客户端发送各自的昵称、头像信息以保存在客户端
     socket.emit("yourName",trueName);
     socket.emit("yourHead",trueHead);
    io.emit("joined",trueName);
    //即时更新在线人数列表
    io.emit("userList",userList);
    /*控制台提示用户加入及昵称*/
    console.log("user:"+trueName+" "+"is connected");
    })

    /*监听message事件*/
    socket.on("message",function(message){
        io.emit("message",message);
    })
    //监听head-in-line事件
socket.on("head-in-line",function(head){
        io.emit("head-in-line",head);
    })

    /*监听username事件*/
    socket.on("username",function(name){
        io.emit("username",name)
    })

    /*监听exit事件*/
    socket.on("exit",function(name){
        var number = userList.length;
        //从在线用户的昵称数组里删除
        for(var i = 0;i<number;i++)
        {
           if(userList[i]==name)
           {
               userList.splice(i,1);
               break;
           }
        }
        //即时更新在线用户列表，发送用户退出提示
        io.emit("exit",name);
        io.emit("userList",userList);
        //打印用户退出信息
        console.log(name+" has exited");
    })
})


const port = process.env.PORT || 2333;
http.listen(port);

console.log("Server running at http://localhost:%d", port);
