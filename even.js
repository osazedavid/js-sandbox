


// var sum = 0

// for (let i=0; i<=10; i++) {

//     if (i % 2 == 0) {
//         sum = sum + i
//     }

// }

// console.log(sum)

var sum = 0

function evennum(a) {
    for (let i = 0; i<=a; i++) {

        if (i % 2 == 0) {
            sum = sum + i
            
        }
    }
 return sum
}
console.log(evennum(10));