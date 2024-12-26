# Incorrect Usage of MongoDB's $inc Operator

This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is designed to increment or decrement a numeric field. However, if the field doesn't exist, it will throw an error.

## Bug
The `bug.js` file shows how simply using `$inc` without checking if the field exists can lead to unexpected behavior.

## Solution
The `bugSolution.js` file provides a solution by first checking for field existence using an `if` statement with `$exists:true` before applying the `$inc` operator.