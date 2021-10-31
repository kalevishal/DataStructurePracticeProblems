let array = new Array();

for (let index = 0; index < 10; index++) {
    array[index] = Math.floor((Math.random() * 900) + 100);
}
console.log(array);
{
 let sortArray = array.sort();
console.log(sortArray);
    console.log("The Second Largest Number is: " + array[array.length-2]);
    console.log("The Second Smallest Number is: " + array[1]);
}