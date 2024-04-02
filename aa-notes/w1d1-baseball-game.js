// We know to use stacks here because the question keeps prompting about the previous score
// We do each operation that is at the end of the array as we go in order

// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

//! Approach
// 1. Initalize an empty stack
// 2. Iterate through operations
// 3. For each operation
// If integer, push onto stack
// If "+", push sum of last two scores onto stack
// If "D", push double of last score onto stack
// If "C", pop last score from stack
// Return sum of scores in stack

//! Complexity
// Time Complexity - O(n) where n is the number of operations
// Space Complexity - O(n) where is the number of operations. The stack stores the valid scores which can be at most the same size as the number of operations

//! Solution

var calPoints = function (operations) {
    let stack = [];
    for (let i = 0; i < operations.length; i++) {
        let len = stack.length;
        switch (operations[i]) {
            case "+":
                stack.push(stack[len - 1] + stack[len - 2]);
                break;
            case "D":
                stack.push(stack[len - 1] * 2);
                break;
            case "C":
                stack.pop()
                break;
            default:
                // parseInt here is neccessary because the operations array
                // could contain strings representing numbers "5", "10"
                stack.push(parseInt(operations[i]))
        }
    }

    return stack.length ? stack.reduce((now, prev) => {
        return now + prev
    }) : 0;
}


console.log(calPoints(["5", "2", "C", "D", "+"]));
