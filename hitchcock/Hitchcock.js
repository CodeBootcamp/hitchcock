const gods = ["Zeus"," Poseidon"," Hades"]
const img = ["zeus.jpg","Poseidon.jfif","Hades.jfif"]
var header = document.getElementById("header")
var para = document.getElementById('para')
var ocho = document.getElementById('ocho')
var cinco = document.getElementById('cinco')
var btn = document.getElementById('btn')
var cat = document.getElementById('cat')
var body = document.getElementById('body')
var value = 0
var num = 0
var num1 = 0 

function meanKitten(){
    document.getElementById('kitten').src = "meanKitten.jfif"
}
function niceKitten(){
    document.getElementById('kitten').src = "kitten.jfif"
}

function blueBackground(){
    document.getElementById('body').style.backgroundColor = "blue"
}
function whiteBackground(){
    var body = document.getElementById('body')
    body.style.backgroundColor = "White"
    ocho.style.backgroundColor = "White"
}
function swapText(){
    header.innerText = "Cats are cool"
}
function swapImg(){
    //not understanding global vs local ??/
    var cat = document.getElementById('cat')

    cat.src = "dog.jfif"
}
function mouseOut(){
    document.getElementById('cat').src = "cat.jfif"
    header.innerText = "Hello Friend"
}

header.addEventListener('click',function addText() {
    header.innerText ="Goodbye"
    para.innerText= "Have a nice day"
    
    num += 1
    if(num > 2){
        header.innerText = "Having Fun?"
        num=0    
    }
  

})

para.addEventListener('click', function toggleBack() {
    header.innerText = "Hello Friend"
    para.innerText= ""
    function getRandomNumber(){
        return Math.floor(Math.random()*gods.length);
    
    }
    var randNum = getRandomNumber()
    num1 +=1
    if(num1 > 1){

        para.innerText= gods[randNum]
        console
        num1=0
        document.getElementById('cat').src = img[randNum]

    }

    
})

btn.addEventListener('click', function changeBackGround(){
    cinco.style.backgroundColor = "green"
    ocho.style.backgroundColor = "red"
value += 1
if(value > 1){
    cinco.style.backgroundColor = "White"
    btn.style.color = "black"
    value = 0}





})


para.addEventListener('click', function changeBtnColor(){
    btn.style.color = "yellow"
    
})

