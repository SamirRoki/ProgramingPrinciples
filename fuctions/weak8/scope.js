/*2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -&gt; [‘a’,1,’b’,2,’c’,3]  */

/* new[0] = arr1[0];
new[1] = arr2[0];
new[2] = arr1[1];
new[3] = arr2[1]; */

function makeNewArray(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr[newArr.length] = arr1[i];
        newArr[newArr.length] = arr2[i];  
    }
    return newArr;
}

var a1 = makeNewArray(["a","b","c"], [1,2,3])
console.log(a1);

/* 3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

function rotateList(list, k) {
    var newList = [];
    
    for (var j = 0; j < k; j++) {
        for (var i = 0; i < list.length-k; i++) {
        newList[i] = list[k+i];
        } 
        newList[newList.length] = list[j]
    }
    return newList;
}

var a2 = rotateList([1,2,3,4,5,6], 2);
console.log(a2);


// 4. Write a function that takes a number and returns array of its digits.

function makeDigitsArray(num) {
    if (!isFinite(num)) {
        return "Imput must be number"
    }
    num = "" + num;
    var digits = [];
    for (var i = 0; i < num.length; i++) {
        digits[i] = num[i];
    }
    return digits;
}

var a3 = makeDigitsArray(555);
console.log(a3);

// 5. Write a program that prints a multiplication table for numbers up to 12.

function printMultiplicationTable(a) {
    var table = "";
    for (var i = 1; i <= 12; i++) {
        table += a + " * " +i + " = " + a *i + "\n";
    }
    return table;
}

var a4 = printMultiplicationTable(4);
console.log(a4);

// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function convertToFahrenheit(tC) {
    var tF = (9 * (parseFloat(tC))/5) + 32;
    return tF + " °F";
}

var a5 = convertToFahrenheit("21°C");
console.log(a5);

// 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements. 

function findMaxAndFilter(arr$) {
    var maximum = arr$[0];
    var newArr$ = [];
    for (var i = 0; i < arr$.length; i++) {
        if(isFinite (arr$[i]) && arr$[i] !== null) {
            newArr$[i] = arr$[i];
            if (arr$[i] > maximum) {
                maximum = arr$[i];
            }
        }
    }
    return [maximum, newArr$];
}

var a6 = findMaxAndFilter ([1, 2, 3, undefined, null, Infinity, NaN, "SomeString"]);
console.log(a6);
