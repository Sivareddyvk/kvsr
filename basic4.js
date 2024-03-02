var fname="kv's";
var lname="Reddy!";
var msg="please, check you order!";

var greeting=fname+lname+msg;

var namee="siva reddy";
var tiles=namee.length;
var subtotal=tiles*5;
//var shipping=7;

var demo={
    shipping:8,
     // namee:"siva reddy",
 }
var total=(subtotal+demo.shipping);

//window.open('basic1.js');
var els1=document.getElementById('s1');
els1.textContent=''+greeting;
var elud=document.getElementById('userdesign');
elud.textContent=''+namee;
var eltiles=document.getElementById('tiles');
eltiles.textContent=''+tiles;
var elst=document.getElementById('subtotal');
elst.textContent='$'+subtotal;
var els=document.getElementById('shipping');
els.textContent='$'+demo.shipping
var elt=document.getElementById('Total');
elt.textContent='$'+total;



var area;
 function areas(side){
    area=side*side;
    document.write(area);
 }
 areas(5);
 document.write('\n');
 areas(6);

 //doc
 document.title="kkk";
var urldoc=document.URL;
document.write(document.URL);
document.write('hello');
window.alert('welcome');
var msg=document.lastModified;
document.write(msg);