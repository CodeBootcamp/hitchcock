
var oHealth = 100 
var health = document.getElementById('health')
var attack = document.getElementById('Attack')



function damageHealth(){
 
   
    var damage = Math.floor(Math.random()*11)
    var life = oHealth - damage
    
    health.innerText = "Health " + life +"%"
    oHealth = life 
  
if(life <=0){
health.innerText = "Game Over"
attack.innerText = ""

}

}

