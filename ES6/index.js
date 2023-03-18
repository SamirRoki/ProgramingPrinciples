//1. Write a function that capitalizes the first letter of each string argument it receives.
//Function arguments: [&#39;hello&#39;, &#39;there&#39;, &#39;ES&#39;, 6]
//Output: [&#39;Hello&#39;, &#39;There&#39;, &#39;ES&#39;]

let arr = ['hello','there','ES',6];

const  letterToUpperCase = (...arr) => {
 const filterArr = arr.filter(arr => typeof arr === 'string').map(arr => arr.charAt(0).toUpperCase() + arr.slice(1))

 return filterArr;


}


console.log(letterToUpperCase('hello','there','ES',6));



/*2. Write a function that calculates sale tax that should be paid for the product of the given price.
Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
Output2: [ 24, 20 ] // tax only*/


const products =  [{ name: 'Banana', price: 120 }, {name: 'Orange', price: 100}];
const taxRate = 0.2;

const calculateTax = array =>{
   return array.map( item => {
    return{
        name: item.name,
        price: item.price * (1 + taxRate)
    }
   }
    )
}

const calculateTaxOnly = array => {
    return array.map(item => item.price * taxRate);

}

console.log(calculateTax(products));
console.log(calculateTaxOnly(products));


/*3. Write a function that increases each element of the given array by the given value. If the value is
omitted, increase each element of the array by 1.
Input: [4, 6, 11, -9, 2.1], 2
Output: [6, 8, 13, -7, 4.1]*/

const array =  [4, 6, 11, -9, 2.1];

const increaseValue = (array, value = 1) => {
    return array.map(element => element + value)
};

console.log(increaseValue(array,2));
console.log(increaseValue(array));


  /* 4. Write a function that filters all even elements of the array.
        Input: [6, 11, 9, 0, 3]
        Output: [6, 0] */
    

const array1 = [6, 11, 9, 0, 3];

const filterArray1 = (array) => {
    return array1.filter(element => element % 2 === 0)
}

console.log(filterArray1(array1));


  /* 5. Write a function that filters all the strings from the given array that contain substring JS or js.
        Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
        Output: ['babel.js, 'JS standard'] */


        const array2 = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

        const filterJs = (array) => {
            return array2.filter(element =>  /(js|JS)/.test(element))
        }

        console.log(filterJs(array2));

          /* 6. Write a function that filters all integer numbers from the given array. 
    Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
        Output: [7, 8] */
    
    const arr3 = [1.6, 11.34, 9.23, 7, 3.11, 8];
    
    const filterIntegers = array => {
        return array.filter(element => Number.isInteger(element));
    };
      
    console.log(filterIntegers(arr3));


     /* 7. Write a function that filters all integer arguments that contain digit 5.
        Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
        Output: [45, 553] */
    
        const arr4 = [23, 11.5, 9, 'abc', 45, 28, 553];
    
        const filterDigit = array => {
            return array.filter(element => {
                if (Number.isInteger(element)) {
                    return String(element).includes("5");
                };
            return false;
            });
        };
        
        console.log(filterDigit(arr4));
    
         /* 8. Write a function that returns indexes of the elements greater than 10. 
        Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
        Output: [1, 2, 5] */
    
    const arr5 = [1.6, 11.34, 29.23, 7, 3.11, 18];
    
    const filterOver10 = array => {
        const result = [];
        array.forEach((item, index) => {
            if (item > 10) {
                result.push(index);
            };
        });
        return result;
    };
    
    console.log(filterOver10(arr5));