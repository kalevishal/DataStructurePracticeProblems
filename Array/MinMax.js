let array = new Array();
while(array.length<10)
{
    let number= Math.floor(Math.random()*1000);
    if(number>=100 && number<=999)
    {
        array.push(number);
    }
}
console.log(array);
let max = Math.max.apply(null, array)
array.splice(array.indexOf(max), 1)
max = Math.max.apply(null, array);
console.log("Second Largest number  : " + max);
let min = Math.min.apply(null, array)
array.splice(array.indexOf(min), 1)
min = Math.min.apply(null, array);
console.log("Second Smallest number : " + min);