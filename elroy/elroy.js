// I know their has to be an easier or neater way to write this code, but this is the only way i know how right now.




if(b=0){
btn.addEventListener('click', function write(){

    var Num = getRandNum()
    var Num2 = getRandNum()
    var Num3 = getRandNum()
    var Num4 = getRandNum()
    var Num5 = getRandNum1()
    var header = document.getElementById('header')
    // word varible won't pass into the function
    var word = document.getElementById('word').value;
    var btn = document.getElementById('btn')
    var noun1 = ["Jhon","Mary","Joe","Oscar","Elroy"]
    var verb = ["Ran","Walked", "Threw", "Grew","Swam"]
    var noun = ["Car", "Truck", "Tree", "Boat", "Book"]
    var adjective = ["Beautiful", "Pretty", "Handsome", "Ugly","Fat"]
    var pronoun = ["His","Her"]
    var para = document.getElementById('para')
    var b = 0
    
    

    function getRandNum(x){
        value1 = Math.floor(Math.random()*5)
        return value1
    }
    function getRandNum1(){
        value2 = Math.floor(Math.random()*2)
        return value2
    }

    header.innerText = noun1[Num] + " " + verb[Num2] + " " + pronoun[Num5] + " " + adjective[Num4] + " " + noun[Num3] + " to the " + document.getElementById('word').value;
    para.innerText = "Try it again"
  b=1
  
})
}

if(b=1){
    btn.addEventListener('click', function write(){

        var Num = getRandNum()
        var Num2 = getRandNum()
        var Num3 = getRandNum()
        var Num4 = getRandNum()
        var Num5 = getRandNum1()
        var header = document.getElementById('header')
        // word varible won't pass into the function
        var word = document.getElementById('word').value;
        var btn = document.getElementById('btn')
        var noun1 = ["Jhon","Mary","Joe","Oscar","Elroy"]
        var verb = ["Ran","Walked", "Threw", "Grew","Swam"]
        var noun = ["Car", "Truck", "Tree", "Boat", "Book"]
        var adjective = ["Beautiful", "Pretty", "Handsome", "Ugly","Fat"]
        var pronoun = ["His","Her"]
        var para = document.getElementById('para')
        var b = 0
        
        

        function getRandNum(){
            value1 = Math.floor(Math.random()*5)
            return value1
        }
        function getRandNum1(){
            value2 = Math.floor(Math.random()*2)
            return value2
        }

        header.innerText = noun1[Num] + " " + verb[Num2] + " " + pronoun[Num5] + " " + adjective[Num4] + " " + noun[Num3] + " to the " + document.getElementById('word').value;
        para.innerText = "Try it again"
      b=0
      
    })
}
