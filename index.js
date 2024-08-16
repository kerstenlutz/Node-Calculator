var rs = require('readline-sync');

var operator = 0;
var userNumOne = 0;
var userNumTwo = 0;
var userIndex = [];
var operatorFunction = {
    '+' : function(userNumOne, userNumTwo) {
        return userNumOne + userNumTwo;
    },
    '-' : function(userNumOne, userNumTwo) {
        return userNumOne - userNumTwo;
    },
    '/' : function(userNumOne, userNumTwo) {
        return userNumOne / userNumTwo;
    },
    '*' : function(userNumOne, userNumTwo) {
        return userNumOne * userNumTwo;
    }
};


function pickOption () {
    operator = rs.question('Which operator would you like to use? ');
    if (operator == '*' || operator == '/' || operator == '+' || operator == '-') {
        console.log('You have chosen ' + operator + '.');
        userNumOne = rs.questionInt('Which number would you like to use first? ');
        userIndex.push(userNumOne);
        userNumTwo = rs.questionInt('Which number would you like to use next? ');
        userIndex.push(userNumTwo);
    } else {
        console.log('That is not a valid operation! Please try again.')
        pickOption();
    }
}

function userEquation (userIndex, operator) {
    return userIndex.reduce(operatorFunction[operator]);
}


pickOption();

console.log('Your equation looks like this, ');
console.log(userNumOne + operator + userNumTwo);
console.log('The result of your equation is ');

console.log(userEquation(userIndex, operator));