// Table of Content

// Using strict equality operator(===)
// Using double equals (==) operator
// Using String.prototype.localeCompare() method
const str1 = 'hello';
const str2 = 'geeks for geeks';
 
const comparison = str1.localeCompare(str2);// it return 0 or 1 
 
if (comparison === 0) {
  console.log('The strings are equal');
} else {
  console.log('The strings are not equal');
}

//Methods 2 Using String.prototype.match() method
const match = str2.match(str1);
 
if (match) {
    console.log('The strings are equal');
} else {
    console.log('The strings are not equal');
}