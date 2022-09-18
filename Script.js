function showMessage() {
  alert("Вы щелкнули по div-y");
}
function areaRectangle(forma1) {
  var a = document.obj.t1.value;
  var b = document.obj.t2.value;
  var s = a * b;
  document.obj.res.value = s;
}
function message(m) {
  alert(m);
}
function showDesc(obj, n) {
  obj.desc.value = n;
}
function delet(obj) {
  obj.desc.value = "";
}
function areaOfTriangle(obj) {
  var a = 1 * obj.st1.value;
  var b = 1 * obj.st2.value;
  var c = 1 * obj.st3.value;
  var p = (a + b + c) / 2;
  var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  s = s.toFixed(2);
  obj.res.value = s;
}
function maxZnach(obj) {
  var a = 1 * obj.zn1.value;
  var b = 1 * obj.zn2.value;
  var c = 1 * obj.zn3.value;
  var m = a;
  if (b > m) m = b;
  if (c > m) m = c;
  obj.res.value = m;
}
function Vday(obj) {
  var a = obj.zn.value;
  var s;
  switch (a)
  {case 'понедельник'  s="В понедельник будет ветрено, температура воздуха поднимется до +20 градусов";break;

  }
      
}
function summa(obj) {
  var summa=0;
  var a1=1*obj.a1.value;
  var a2=1*obj.a2.value;
  for (var i = a1; i <= a2; i++) {
   summa+=i;
  }
  obj.result.value = summa;
 }
 function nTime(obj) {
  var t=new Date();
  var h=t.getHours();
  var m=t.getMinutes();
  var s=t.getSeconds();
  var result=h+":"+m+":"+s;
  obj.res.value=result;
}
