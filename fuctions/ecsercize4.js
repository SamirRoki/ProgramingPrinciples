/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes*/

/*function chekElement (array,value){
    var isPresent = "no";
    for(i=0; i<array.length; i++){
        if (array [i]=== value){
            return isPresent = "yes";
            break;
        }
    }
    return isPresent ;
}
console.log(chekElement([5, -4.2, 3, 7],3));*/

/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

/*function multiplieByTwo (array){
    var newArray = [];
    
    for (i=0; i<array.length; i++){
        if (array[i]>0){
            newArray[i] =array[i]*2;

          
        }
        else {
            newArray[i] = array[i];
            
        }
        
       
    }
    return newArray;
     }
console.log(multiplieByTwo( [-3, 11, 5, 3.4, -8]));*/

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

/*function findMinIndex (array){
    var minimum = array[0];
    for(i=0; i<array.length; i++){
        if(array[i]<minimum){
         minimum = array[i];

        }
    }
    return minimum;
} console.log(findMinIndex([4, 2, 2, -1, 6]));*/



/*4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/





/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

/*function sumPositiveElements (array){
    var sum = 0;
    for (i=0; i<array.length; i++){
        if (array [i]>0){
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumPositiveElements([3, 11, -5, -3, 2]));*/

/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.*/

function isSymetric(array) {
    var answer = "The array is symetric" ;
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - 1]-i ) {
            answer = "The array isn't symetric";
        }
        break;
    }
    return answer;
}

//console.log(isSymetric ([2, 4, -2, 7, -2, 4, 2]));

//console.log(isSymetric ([3, 4, 12, 8]));


/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

function intertwineArrays(ar1, ar2) {
    var ar3 = [];
    for (var i = 0; i < ar1.length; i++) {
        ar3[ar3.length] = ar1[i];
        ar3[ar3.length] = ar2[i]
    }
    return ar3;
}

console.log(intertwineArrays([4, 5, 6, 2], [3, 8, 11, 9]));
