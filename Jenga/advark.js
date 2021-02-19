const para = document.getElementById('p1')
const header = document.getElementById('header')
const input = document.getElementById('input')
const select = document.getElementById('select')
const select1 = document.getElementById('select1')
const select3 = document.getElementById('select3')
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
    if(select1.value === 'cat'){
        header.innerText = "Cats are Mysterious"
        para.innerHTML = '<select id = "select3" class = "select3"><option value = "jake"> Jake</option></select>'
    }
    if(select1.value === 'dog'){
        header.innerText = 'Dogs are mans best friend'
    }
    if(select1.value === 'lizard'){
        header.classList.toggle('null')
        para.innerText = 'Lizards are the shiznit'
        
    }

   if(header.className = 'null'){
      console.log("Ohhh nooo")
   }
   
})

