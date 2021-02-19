const btn = document.getElementById('btn');
const code = document.getElementById('code');
const para = document.getElementById('para');
const para2 = document.getElementById('para2');

btn.addEventListener('click', function codeIt(){
    var x = encode(code.value)
    para.innerText = x
    para2.innerHTML = '<button id = btn2>Decode<button>'
    btn2 = document.getElementById('btn2')
    btn2.addEventListener('click', function uncodeIt(){
     para.innerText = decode(x)
     para2.innerText = ''   
    })

})

function encode(str){
    str = str.replace(/a/g, '1');
    str = str.replace(/b/g, '7');
    str = str.replace(/c/g, '3');
    str = str.replace(/d/g, '4');
    str = str.replace(/e/g, '"');
    str = str.replace(/f/g, '&');
    str = str.replace(/g/g, '<');
    str = str.replace(/h/g, '9');
    str = str.replace(/i/g, 'I');
    str = str.replace(/j/g, '6');
    str = str.replace(/k/g, '5');
    str = str.replace(/l/g, '@');
    str = str.replace(/m/g, '2');
    str = str.replace(/n/g, '}');
    str = str.replace(/o/g, '{');
    str = str.replace(/p/g, '-');
    str = str.replace(/q/g, ';');
    str = str.replace(/r/g, 'R');
    str = str.replace(/s/g, 'S');
    str = str.replace(/t/g, 'T');
    str = str.replace(/u/g, '!');
    str = str.replace(/v/g, '>');
    str = str.replace(/w/g, ',');
    str = str.replace(/x/g, '_');
    str = str.replace(/y/g, 'Y');
    str = str.replace(/z/g, '=');
    str = str.replace(/ /g, '%');
    return str;
}

function decode(str){

    str = str.replace(/1/g, 'a');
    str = str.replace(/7/g, 'b');
    str = str.replace(/3/g, 'c');
    str = str.replace(/4/g, 'd');
    str = str.replace(/"/g, 'e');
    str = str.replace(/&/g, 'f');
    str = str.replace(/</g, 'g');
    str = str.replace(/9/g, 'h');
    str = str.replace(/I/g, 'i');
    str = str.replace(/6/g, 'j');
    str = str.replace(/5/g, 'k');
    str = str.replace(/@/g, 'l');
    str = str.replace(/2/g, 'm');
    str = str.replace(/}/g, 'n');
    str = str.replace(/{/g, 'o');
    str = str.replace(/-/g, 'p');
    str = str.replace(/;/g, 'q');
    str = str.replace(/R/g, 'r');
    str = str.replace(/S/g, 's');
    str = str.replace(/T/g, 't');
    str = str.replace(/!/g, 'u');
    str = str.replace(/>/g, 'v');
    str = str.replace(/,/g, 'w');
    str = str.replace(/_/g, 'x');
    str = str.replace(/Y/g, 'y');
    str = str.replace(/=/g, 'z');
    str = str.replace(/%/g, ' ');
   
    return str;
}








