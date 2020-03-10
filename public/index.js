//获取左右箭头
 var leftArrow = document.getElementsByClassName("left-arrow")[0];
var rightArrow = document.getElementsByClassName("right-arrow")[0];

//CUSTOM
var subtn = document.getElementsByClassName("nameDecide box-width")[0];
var nametxt=document.getElementById("inputName");
var p11img = document.getElementsByClassName("p1 img-setting")[0];
var p12img = document.getElementsByClassName("p1 img-setting")[1];
var p21img = document.getElementsByClassName("p2 img-setting")[0];
var p22img = document.getElementsByClassName("p2 img-setting")[1];
var p3img = document.getElementById("trueHead");


//获取头像框
var headPictures=document.getElementsByTagName("img");

//建立并填入头像数组（我知道很憨）
var headPosition=[];
for(var i=0;i<18;i++)
{
    headPosition[i] = "./headPicture/"+(i+1)+".jpg";
}

//点击左箭头切换头像
leftArrow.addEventListener('click', function () {
 //CUSTOM
 var mp3 = "./emm.mp3";
        var mp3 = new Audio(mp3);
                        mp3.play(); //播放 mp3这个音频对象
 //CUSTOM
    var p = headPosition[0];
    for(var t=0;t<headPosition.length;t++)
    {
       headPosition[t]=headPosition[t+1];
    }
    headPosition[headPosition.length-1]=p;
    for(var i=0;i<5;i++)
    {
        headPictures[i].src = headPosition[i];
    }
});

//点击右箭头切换头像
rightArrow.addEventListener('click', function () {
 //CUSTOM
 var mp3 = "./good.mp3";
        var mp3 = new Audio(mp3);
                        mp3.play(); //播放 mp3这个音频对象
 //CUSTOM
    var p = headPosition[headPosition.length-1];
    for(var t= headPosition.length-1;t>0;t--)
    {
        headPosition[t]=headPosition[t-1];
    }
    headPosition[0]=p
    for(var i=0;i<5;i++)
    {
        headPictures[i].src = headPosition[i];
    }
});

//CUSTOM
 function sleep(millisecond) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, millisecond)
        })
    }

subtn.addEventListener('click', function () {
    var mp3 = "./go.mp3";
        var mp3 = new Audio(mp3);
                        mp3.play(); //播放 mp3这个音频对象
 await sleep(3000);
});

nametxt.addEventListener('click', function () {
    var mp3 = "./reo.mp3";
        var mp3 = new Audio(mp3);
                        mp3.play(); //播放 mp3这个音频对象
});

p11img.addEventListener('click', function () {
    var mp3 = "./fa.mp3";
        var mp3 = new Audio(mp3);
                        mp3.play(); //播放 mp3这个音频对象
});

p12img.addEventListener('click', function () {
    var mp3 = "./fa.mp3";
        var mp3 = new Audio(mp3);
                        mp3.play(); //播放 mp3这个音频对象
});

p21img.addEventListener('click', function () {
    var mp3 = "./fa.mp3";
        var mp3 = new Audio(mp3);
                        mp3.play(); //播放 mp3这个音频对象
});

p22img.addEventListener('click', function () {
    var mp3 = "./fa.mp3";
        var mp3 = new Audio(mp3);
                        mp3.play(); //播放 mp3这个音频对象
});

p3img.addEventListener('click', function () {
    var mp3 = "./fa.mp3";
        var mp3 = new Audio(mp3);
                        mp3.play(); //播放 mp3这个音频对象
});
//CUSTOM







