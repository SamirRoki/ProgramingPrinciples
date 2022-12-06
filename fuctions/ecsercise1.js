/*1. Write a program that calculates the maximum of two given numbers.


function calc(a,b){
    return a + b;
}
var res = calc(5,7);
console.log(res);*/

/*2. Write a program that checks if a given number is odd.*/



function isNUmberOdd(a){
    if( a % 2 === 0){
        console.log("even");
    }
    else{  
        console.log("odd");
    }
}
//var res = isNUmberOdd(5);

/*3. Write a program that checks if a given number is a three digit long number.*/

function threeDigit(a){
    if(a > 99 || a < 1000){
        console.log("number has three digit");
    }
    else{
        console.log("number has not three digit");
    }

}
//var res = threeDigit(500);

/*4. Write a program that calculates an arithmetic mean of four numbers.*/

function aritmetic(arr){
    var sum = 0;
    
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
         var res = sum / arr.length;

    }
    console.log(res);   
}
//var art = aritmetic([5,8,15,10]);


/*7. Write a program that calculates a number of digits of a given number.*/


function digits_count(number) {
    var digits_count = 0;
    if (number >= 0); {
      digits_count++;
      while (number / 10 >= 1) {
        number /= 10;
        ++digits_count;
      }
    }
    return digits_count;
  }
  var count = digits_count(12345678910);
  //console.log(count);

 /* 8. Write a program that calculates a number of appearances of a given number in a
given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3*/

function appearancesOfNumber(e) {
    var a = [2, 4, 7, 8, 7, 7, 1];
    var count = 0;
    for (var i = 0; i < a.length; i++) {
      if (a[i] === e) {
        count++;
      }
    }
    return count;
  }
  var appearances = appearancesOfNumber(7);
 // console.log(appearances);

// 9. Write a program that calculates the sum of odd elements of a given array.

function calculates(arr){
    
    var calc = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            calc += arr[i];
        }
    }   
    return calc
}  
var res = calculates([1,2,3,4,5,6,7,8,9]);
//console.log(res);

/*10. Write a program that calculates the number of appearances of a letter a in a
given string. Modify the program so it calculates the number of both letters a and
A.*/

function numberOfLetter(n) {
    var count = 0;
    var a = "A";
    var b = "a";
    for (var i = 0; i <= n.length; i++) {
      if ((n[i] === a) || (n[i] === b)) {
        count++;
      }
    }
    return count;
  }
  var numberOf = numberOfLetter("Antidisestablishmentarianism");
  //console.log(numberOf);

 /* 11. Write a program that concatenates a given string given number of times. For
example, if “abc” and 4 are given values, the program prints out abcabcabcabc.*/

function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }
  //console.log(repeatStringNumTimes("abc", 4))
  

  
  
  


  



  







