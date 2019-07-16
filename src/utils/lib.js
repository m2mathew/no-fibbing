// Function to check if a number is in the Fibonacci sequence

// We start the sequence with the first two numbers preset
const set = [0, 1];

function fibChecker(number) {
  console.log('number →', typeof number, number);
  // exit early if the user puts in 0, empty value, or negative value
  if (!number || number < 0) {
    console.log('no number or less than 0');
    return false;

    // exit early if the user puts in 0 or 1
    //  since we already have those preset in our sequence
  } else if (set.includes(number)) {
    console.log('0 or 1 entered, already in the array');
    return true;
  }

  for (let i = 2; i <= number; i += set[0]) {
    if (i % (set[0] + set[1]) === 0) {
      set[0] = set[1];
      set[1] = i;
    }
  }

  if (set.includes(number)) {
    console.log('number in set');
    return true;
  }

  console.log('late return');
  return false;
}

function sayHello() { console.log('hello!'); }