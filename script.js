// const arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(5));
// console.log(`The array length is ${arr.length}`); //Array length property

// arr.push(6);
// console.log(`After pushing, the array length is ${arr.length}`); // array push method when pushing an element in the last of the array

// arr.pop();
// console.log(`After popping, the array length is ${arr.length}`); // array pop method when removing the last element of the array


// arr.unshift(0);
// console.log(`After unshifting, the array length is ${arr.length}`); // array unshift method when adding an element at the beginning of the array

// arr.shift();
// console.log(`After shifting, the array length is ${arr.length}`); // array shift method when removing the first element of the array

// console.log(arr.slice(1,4));
// console.log(`The slicing elements is = ${arr.length}`); //Remember that the slice method does not change and does not effected the origional array

// console.log(arr.splice(0,3));
// console.log(`after splicing the array is ${arr}`);

// console.log(arr.includes(1));

// const newArr = [1,2,3,4,5];

// console.log(newArr.map(n => String(n)));

// const numbers = [
//   5, 10, 15, 20, 25,
//   30, 35, 40, 45, 50,
//   55, 60, 65, 70, 75,
//   80, 85, 90, 95, 100
// ];


// const multipliedNumbers = numbers.map(num => num * 2);
// console.log(multipliedNumbers);

// const squareOfNumbers = numbers.map(num =>num * num);
// console.log(squareOfNumbers);

// const cubeOfNumbers = numbers.map(num => 
//     num * num * num
// );
// console.log(cubeOfNumbers);

// const filterArray = numbers.filter(num => num >= 30);
// console.log(filterArray);

// const detailedArray = numbers.map(num => ({
//     Original: num,
//     Doubled: num * 2,
//     Squared:num * num,
//     Cubed:num * num * num
// }));

// console.log(detailedArray);

const numArray = [45, 10,20, 43, 5, 90, 33, 76, 12, 8];
//Array map method with three parameters value, index, array   
//1) The value return elements of the array one by one
//2) The index return the index of the elements one by one
//3) The array return the whole array each time when the map method iterates
// const changedArray = numArray.map((value , index, arr) =>{ 
// console.log(value, index, arr);
// });

//Array filter method 
const filtedArray  = numArray.filter((a)=>{
 return a > 10;
});
console.log(filtedArray);

// Reduce method in Array 
const arr3 = [20,30,34,33,32];
const reduceArr = arr3.reduce((a, b)=>{
   return a + b;
});

console.log(reduceArr);


const arr4 = ['Hello', 'World', 'This', 'is', 'JavaScript'];
const sortedArr = arr4.sort((a , b)=>{
    a.localeCompare(b);
});
console.log(sortedArr);


// forEach method in Array
const arr5 = [1,2,3,4,5];
let  sum  = 0;
arr5.forEach((number)=>{
sum += number;
});
console.log(sum);


const arr6 = [5,10,15,20,25];
const sortedArr6 = arr6.sort((a,b)=> b -a);
console.log(sortedArr6);

arr6.find((val)=>{
    val === 15
})

console.log('findNum = ',arr6)
const arr7 = [
    {
        name:'amirshah',
        age:24,
        gpa:3.6
    },
    {
        name:'talha',
        age:22,
        gpa:3.8
    },
    {
        name:'zain',
        age:23,
        gpa:3.5
    },
    {
        name:'hassan',
        age:21,
        gpa:3.9
    }
];
    
// const sortedArr7 = arr7.sort((a, b)=> a.gpa - b.gpa);  // ascending order
// const sortedArr7 = arr7.sort((a, b)=> b.gpa - a.gpa);   // descending order
const sortedArr7 = arr7.sort((a, b)=>a.name.localeCompare(b.name));   
console.log(sortedArr7);




