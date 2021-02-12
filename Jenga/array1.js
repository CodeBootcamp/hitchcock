var btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
var i = 0;
var arr = [0];

function storeData(){
    var input = document.getElementById('input').value;

    var arr2 = [0];
    arr[i] = input;
    i++;
}

function compare(a,b){
    return a-b;

}
function minAndMax(){
    arr.sort(compare);
    const p = document.getElementById('para');
    p.innerText = "Min Value is " + arr[0] + " and Max Value is " + arr[arr.length-1];
 
}
