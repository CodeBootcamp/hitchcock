const para = document.getElementById('p1')
const header = document.getElementById('header')
const input = document.getElementById('input')
const select = document.getElementById('select')
const select1 = document.getElementById('select1')
const div1 = document.getElementById('div1')
var str


input.addEventListener('input', function hello1(){
 
 str = input.value 
 
 
})
para.addEventListener('click', function paraStr(){
    para.innerText = str 
})
header.addEventListener('click', function headerStr(){
    header.innerText = str
    
})

select.addEventListener('click', function changeColor(){
    header.style.backgroundColor = select.value
})

select1.addEventListener('click', function changePic(){
    header.style.backgroundImage = "cat.jfif"
    console.log('hello')
})