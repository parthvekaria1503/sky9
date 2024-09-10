function display(val){
    document.getElementById("id1").value+=val;
}
function solve() {
    var a = document.getElementById("id1").value;
    var b = eval(a);
    document.getElementById("id1").value = b;
}
function clr() {
    document.getElementById("id1").value = " ";
}