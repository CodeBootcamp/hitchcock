const btn = document.getElementById('btn')
const select = document.getElementById('select')
const para = document.getElementById('para')

btn.addEventListener('click', function newSelect(){

    if(select.value === '1'){
        para.innerHTML = '<select id = "select2"> <option value = "1">Artemis</option> <option value = "2">Apollo</option><option value = "3">Hermes</option><option value = "4">Ares</option><option value = "5">Athena</option><option value = "6">Aphrodite</option></select><button id ="btn2">submit</button>'
    

        const select2 = document.getElementById('select2')
        const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', function kids(){
    if(select2.value === '1'){
        
    }
    if(select2.value === '2'){
        
    }


}   
)
}   
    if(select.value === '2'){
        para.innerHTML = '<select id = "select3"> <option value = "1">Theseus</option><option value = "2">Triton</option><option value = "3">Polyphemus</option><option value = "4">Orion</option><option value = "5">Belus</option><option value = "6">Agenor</option><option value = "7">Neleus</option><option value = "8">Atlas(the first king of Atlantis)</option><option value = "9">Pegasus</option><option value = "10">Chrysaor</option></select><button id ="btn3">submit</button>'
    
    const select3 = document.getElementById('select3')
    const btn3 = document.getElementById('btn3')
    
    
    }

    if(select.value === '3'){
        para.innerHTML = '<select id = "select4" class = "select 4"> <option value = "1">Zagreus</option><option value = "2">Macaria</option><option value = "3">Melinoe</option><option value = "4">Plutus</option><option value = "5">Erinyes</option></select><button id ="btn4">submit</button>'
    
    const select4 = document.getElementById('select4')
    const btn4 = document.getElementById('btn4')
       

    
    
    
    }




})