
// 1st

const arr = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null];

const filteredArr = arr.filter((element) => {
    return (element !== 0 && element !== null && element !== false);
});
console.log(filteredArr);

// 2nd 

const arr1 = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null]

const slArr = arr1.slice(1, 3);
const slArr1 = arr1.slice(4, 7);
const slArr2 = arr1.slice(8, 9);
const slArr3 = arr1.slice(11, 17);

const newArr = slArr.concat(slArr1, slArr2, slArr3);

console.log(newArr);