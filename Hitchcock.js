var header = document.getElementById("header")
var para = document.getElementById('para')
var ocho = document.getElementById('ocho')
var cinco = document.getElementById('cinco')
var btn = document.getElementById('btn')

header.addEventListener('click',function addText() {
    header.innerText ="Goodbye"
    para.innerText= "Have a nice day"

})

para.addEventListener('click', function toggleBack() {
    header.innerText = "Hello Friend"
    para.innerText= ""
})

btn.addEventListener('click', function changeBackGround(){
    cinco.style.backgroundColor = "green"
    ocho.style.backgroundColor = "red"

})

