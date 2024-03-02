function totalval(){
var price;
var quantity;
var tota;
price=parseInt(document.getElementById('price').length);
quantity=parseInt(document.getElementById('quantity').value);
tota=price*5;

var el=document.getElementById('s1').innerHTML='$'+price;
//el.textContent='$'+tota;
}
function adder() {
    var num1 = parseInt(document.getElementById("myform").elements["num1"].value);
    var num2 = parseInt(document.getElementById("myform").elements["num2"].value);
    var total = num1 + num2;
    document.getElementById("p1").innerHTML = total;
  }