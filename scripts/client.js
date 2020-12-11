console.log('Hello Cullen!!!');

//
// VARIABLES
// ------------------------------

// var
// can only set the value once
const name = 'Myron';

// are ABLE TO reset the value
let age = 20;
console.log(age);

age = 21;
console.log(age);

//
// DATA TYPES
// ------------------------------

// string
const dataString = 'a random thing of words';
console.log('dataString:', dataString);

// nummber
const dataNumber = 20;
console.log('dataNumber:', dataNumber);

// boolean
const dataBoolYes = true;
let dataBoolNo = false;
console.log('dataBoolYes:', dataBoolYes);
console.log('dataBoolNo:', dataBoolNo);

dataBoolNo = 'I am mighty';
console.log('dataBoolNo:', dataBoolNo);

//
// CONDITIONAL STATEMENTS
// ------------------------------

// if (/* expression */) {
//   // exicute whatever
// }

// expressions operator
// == - only if the value was the same
// === - both value and type are the same
// < - left value less than right value
// > - left value is great than the right value
// <= - left value is less than or euqal to the right value
// >= - left value is great than or equal to the right value
// != - just value doesn't match
// !== - doesn't equal both value and type
// ! - falsy

let myNum = 5;
let yourNum = '5';

if (myNum !== yourNum) {
  console.log('We Passed');
} else {
  console.log('We Failed');
}

const noMore = false;

if (!noMore) {
  // falsy
  console.log(`NOT pass`);
} else {
  // truthy
  console.log('NOT fail');
}

// INCREMENTING
let startNum = 0;

console.log(startNum + 1);
console.log(startNum);
startNum = startNum + 1;
console.log(startNum);
startNum += 1;
console.log(startNum);
startNum++;
console.log(startNum);
