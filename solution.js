function isEven(number) {
  // % (the remainder operator) can be used to test whether a number is even
  // or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define
  // whether a positive whole number is even or odd:
  //
  // • Zero is even.
  // • One is odd.

  // For any other number N, its evenness is the same as N - 2.
  // Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
  // Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
	if(number < 0){
        number = number*(-1);
    }
    var temp = number-2;
    if(temp !== 0 && temp !==1){
        return isEven(temp);
    }else{
        if(temp === 0){
            return true;
        }
        if(temp === 1){
            return false;
        }
    }
}

function pascal(row, col) {
  // Write a procedure that computes the elements of Pascal's triangle by means of a recursive process.
  //     1
  //    1 1
  //   1 2 1
  //  1 3 3 1
  // 1 4 6 4 1
  //
  // pascal(4, 2)
  // // → 6
}

function sqrt(x) {
  // Square roots by Newton's method http://en.wikipedia.org/wiki/Newton%27s_method
  // Also you can look at the problem description in SICP[1.1.7] http://newstar.rinet.ru/~goga/sicp/sicp.pdf
  // You should write a function that takes a number and computes square root
  // You can build solution based on functions structure defined below or you can make up your own
}

function sqrtIter(guess, x) {
}

function improve(guess, x) {
}

function average(x, y) {
}

function isGoodEnough(guess, x) {
}

function square(x) {
}

module.exports.isEven = isEven;
module.exports.pascal = pascal;
module.exports.sqrt = sqrt;
