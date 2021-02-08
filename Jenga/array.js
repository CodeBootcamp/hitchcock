var array1 = [5,6,7,2,9]
var array2 = [2,1,5,7,8,9,6]
var array3 = []
var n = 0  
var b = 0
var x = 0
var y = 0
// solved problem
for(n=0; n<array1.length; n++){
    
    for(y=0; y<array2.length; y++){
        if(array1[n] == array2 [y]){
            array3[x] = array1[n]
            x++
        }
    
    }
    y=0
}
console.log(array3)
//third attempt
// array3 = array2.forEach(function(value) {
//     array1.filter(num => num >=0)
//     return array2
// })
// console.log(array3)

//my second attemt
// for(b=0 ; b < 10 ; b++ ){

// y = array2.lenth--
//     if(array1[n] == array2[y]){
//     array3[x] = array1[n]
//     x++
//     }
//     if(array2[n] == array1[0]){
//      array3[x] = array2[n]
//     x++
//     }
//     n++

// 
// console.log(array3)


//my first attemts below
// for(b=0 ; b < 10 ; b++ ){
  
// n++
// for (y=0; y<5; y++){
// m++ 


// if(n < (array1.length + array2.length)){


// if(m < (array1.length + array2.length)){
//     if(array1[n] == array2[0]){
//         array3[x] = array1[n]
//         x++
        


// }

// }




// }

// }


// }

// console.log(array3)