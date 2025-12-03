const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(5));
console.log(`The array length is ${arr.length}`); //Array length property

arr.push(6);
console.log(`After pushing, the array length is ${arr.length}`); // array push method when pushing an element in the last of the array

arr.pop();
console.log(`After popping, the array length is ${arr.length}`); // array pop method when removing the last element of the array


arr.unshift(0);
console.log(`After unshifting, the array length is ${arr.length}`); // array unshift method when adding an element at the beginning of the array

arr.shift();
console.log(`After shifting, the array length is ${arr.length}`); // array shift method when removing the first element of the array

console.log(arr.slice(1,4));
console.log(`The slicing elements is = ${arr.length}`); //Remember that the slice method does not change and does not effected the origional array

console.log(arr.splice(0,3));
console.log(`after splicing the array is ${arr}`);

console.log(arr.includes(1));

const newArr = [1,2,3,4,5];

console.log(newArr.map(n => String(n)));

const numbers = [
  5, 10, 15, 20, 25,
  30, 35, 40, 45, 50,
  55, 60, 65, 70, 75,
  80, 85, 90, 95, 100
];


const multipliedNumbers = numbers.map(num => num * 2);
console.log(multipliedNumbers);

const squareOfNumbers = numbers.map(num =>num * num);
console.log(squareOfNumbers);

const cubeOfNumbers = numbers.map(num => 
    num * num * num
);
console.log(cubeOfNumbers);

const filterArray = numbers.filter(num => num >= 30);
console.log(filterArray);