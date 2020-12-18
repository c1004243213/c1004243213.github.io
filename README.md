蔡余的域名：www.fengxingyuan123.com
联系QQ：1004243213
vx：cyoe2129
phone：17341974645
普通函数时:
在非箭头函数下， this 指向调用其所在函数的对象，
而且是离谁近就是指向谁（此对于常规对象，原型链， getter & setter等都适用）；
例子：
<script>
var o = {
  pro: 'name', 
  pop: function(){
    console.log(this.pro);
    console.log(this);//对象o中pop方法中的this指向的是对象o;
  }
}
o.pop();
//当把全局函数作为对象的方法传入对象时，调用者仍然是该对象
var pip = function(){
  console.log('123');
  console.log(this)//this指向的仍是对象o
}
o.cic = pip;//把函数pip传给对象o作为o的方法
o.cic();

//当不将其传入对象时，this默认为window(非严格模式下)，当然也可以用call等函数改变其this指向(严格模式下this为undefined)
//(window也是一个对象)
var pip2 = function(){
  console.log('123');
  console.log(this);
}
//用call apply等方法可以改变全局函数的默认(window)调用者
var aaa = {};
pip2();//this为window
pip2.call(aaa);//this为aaa对象
pip2.call(o);//this为o对象
//多层嵌套中的this指向
var ccc = function(){
  console.log('456');
  console.log(this);//this为ssb
}
o.ssb = {
  g: ccc,
}//多层嵌套，将ssb作为对象嵌套在o对象中，而ssb中嵌套了一个方法g，方法g的参数是全局里的函数ccc
o.ssb.g();/*当多层嵌套式this指向为离被调用函数最近的一个对象,及为(ssb)，因为有两个对象一个为o一个为ssb
而ssb离该方法最近*/

</script>
