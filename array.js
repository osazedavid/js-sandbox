
var array= ["Banana", "Apples", "Oranges", "Blueberries"];

array.splice(0,1);
console.log(array);

array.sort();
console.log(array);

array.push("kiwi");
console.log(array);

array.splice(0, 1);
console.log(array);

array.reverse();


var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1]);