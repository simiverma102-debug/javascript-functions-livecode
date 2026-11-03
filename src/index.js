const doubleTheNums = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};
console.log(doubleTheNums([1,2]));

// convert above function to an arrow function
const doubleTheNumsArrow = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};
console.log(doubleTheNumsArrow([2,4]));



// Write a function that prints out "Good morning, class!"

const classGreeting = () => console.log('Good Morning Class!');
classGreeting();



// Write a function that prints a random number (integer) between 1 and 100.
const randomnum = () => {
  const myRandNum = Math.floor(Math.random() * 100) + 1;
  console.log(myRandNum);
};
randomnum();



// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
  for (let i = 0; i < numTimes; i++) {
    console.log(action());
    //uncomment for anonymous callback
    //action();
    //uncomment this for function callback
  }
};
//doMultipleTimes(randomnum, 10);
//doMultipleTimes(classGreeting,10);


// use doMultipleTimes with an anonymous function. for a challenge, try using
// the enclosing scope to hold a value between calls (suggestion: calculate
// subsequent powers of 2 on each call, starting from 2^0 = 1)

//doMultipleTimes(() => 'Hello',10);

/*let powerofTwo = 1;
doMultipleTimes(() => {
  const currpower = powerofTwo;
  powerofTwo *= 2;
  return currpower;
}, 10);
*/

const powerFactory = (num) => {
  let powerofTwo = num;
  return () => {
    const currpower = powerofTwo;
    powerofTwo *= 2;
    return currpower;
  };
};
doMultipleTimes(powerFactory(2), 4);
doMultipleTimes(powerFactory(1), 4);

