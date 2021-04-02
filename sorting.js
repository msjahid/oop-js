//---------------------integer sort-----------------------
let data = [];
data[0] = 8;
data[1] = 80;
data[2] = 17;
data[3] = 4;
data[4] = 90;
console.log("Before Sorting");

for(var i = 0; i < data.length; i++){
    console.log(data[i]);
}
console.log("After Sorting");

var numArray = data.sort((a,b) => a-b);
// function compareFunction(a, b){
//     // 1. if < 0 ... a
//     // 2. 0 ... nothing will be change
//     //3. if > 0 ... b
//     return a - b;
// }
// data.sort(compareFunction);
// console.log(data);
console.log(numArray);
//------------------------Float Sort-------------------------------
let doubleList = [3.2, 2.14, 43.24, 66.23, 1.2, 5.6, 23.1, 34.2, 123];
console.log("Before Sorting");

for(var i = 0; i < doubleList.length; i++){
    console.log(doubleList[i]);
}
console.log("After Sorting");

let doubleArray = doubleList.sort((a,b) => a-b);
console.log(doubleArray);

//--------------------------String Sort-------------------------------------------

let stringList = ["Monkey", "Donkey", "Wolverine", "Elephant", "Lion", "Lamb"];
console.log("Before Sorting");

for(var i = 0; i < stringList.length; i++){
    console.log(stringList[i]);
}
console.log("After Sorting");
let stringArray = stringList.sort();
for(var i = 0; i < stringArray.length; i++){
    console.log(stringArray[i]);
}