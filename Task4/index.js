let speed = document.querySelector('#speed')
let vehicle = document.querySelector('#vehicle')
let pic = document.querySelector('img')
pic.src = "./pics/car"+ vehicle.value +".png"


// document.querySelector('.test').addEventListener('click', ()=>{console.log(vehicle.value);})
//给页面添加键盘listener移动小车：
document.addEventListener("keydown",keydown)
//给车型select添加点击listener更换图片：
vehicle.addEventListener('click',changePic)
//给两个select添加change事件写入缓存：
speed.addEventListener('change',()=>{localStorage.setItem("speed",speed.value)});
vehicle.addEventListener('change',()=>{localStorage.setItem('vehicle',vehicle.value)});



//如果有缓存内容，按缓存直接更新页面。
if (localStorage.getItem("speed")) {
   setStyles();
  }

//element.style只能得到内联样式。所以之前的项目都是通过增加className来修改样式的
//  console.log(pic.style.top); 为空字符串。
function keydown(e){
    let rawTopValue = getComputedStyle(pic).getPropertyValue('top');
    let rawLeftValue = getComputedStyle(pic).getPropertyValue('left');
    console.log(e.keyCode);
    switch(e.keyCode){
    case 38:
    let valueUp = Number(rawTopValue.slice(0,rawTopValue.length-2))-1*Number(speed.value) + 'px';   
    pic.style.top = valueUp;     
    localStorage.setItem('top',valueUp);
    break;
    case 40:
    let valueDown = Number(rawTopValue.slice(0,rawTopValue.length-2)) +1*Number(speed.value) + 'px';
    pic.style.top = valueDown;
    localStorage.setItem('top',valueDown);
    break;
    case 37: 
    let valueLeft = Number(rawLeftValue.slice(0,rawLeftValue.length-2))-1*Number(speed.value) + 'px';
    pic.style.left = valueLeft;
    localStorage.setItem('left',valueLeft);
    break;
    case 39: 
    let valueRight = Number(rawLeftValue.slice(0,rawLeftValue.length-2))+1*Number(speed.value) + 'px';
    pic.style.left = valueRight;
    localStorage.setItem('left',valueRight);
    break;
    }
}
function changePic(){
    pic.src = "./pics/car"+ vehicle.value +".png"
}

function setStyles(){
    console.log("setStyles运行");
    speed.value = localStorage.speed;
    vehicle.value = localStorage.vehicle;
    pic.src = "./pics/car"+ vehicle.value +".png"
    pic.style.top = localStorage.top;
    pic.style.left = localStorage.left;
}

