const para = document.getElementById('p1')
const header = document.getElementById('header')
const input = document.getElementById('input')
const select = document.getElementById('select')
const select1 = document.getElementById('select1')

const btn = document.getElementById('btn')
const div1 = document.getElementById('header2')
var str


input.addEventListener('input', function hello1(){
 
 str = input.value 
 
 
})
para.addEventListener('click', function paraStr(){
    para.innerText = str 
})
header.addEventListener('click', function headerStr(){
    header.classList.toggle('header1')
    
})

select.addEventListener('click', function changeColor(){
    header.style.backgroundColor = select.value
    if(select.value === 'blue'){
        para.innerText = 'blue is awesome'
    }
})

btn.addEventListener('click', function changePic(){
    div1.classList = select1.value
   console.log(select1.value)
})

