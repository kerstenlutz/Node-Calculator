var rs = require('readline-sync');


let operatorString = '';                                                                       // Declaring our variable(s), array(s), and object(s)
let userNumOne = 0;
let userNumTwo = 0;
let userNumArray = [];
let operationsObject = {                                                                       // Listing out all the potential operators that can be chosen and how they interact with the 
    '+' : function(userNumOne, userNumTwo) {                                                   // user numbers 
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


function getOperator () {                                                                       // Set-up an function attaining the operator of choice from the user                  
    operatorString = rs.question('Which operator would you like to use? ');  
    if (operationsObject.hasOwnProperty(operatorString)) {                                     // Using the .hasOwnProperty attribute to check if the operator chosen is "Truthy"
        console.log('You have chosen ' + operatorString + '.');
    } else {
        console.log('That is not a valid operation! Please try again.')
        getOperator();
    }
}

function getNumbers () {     
    userNumOne = rs.questionInt('Which number would you like to use first? ');
    userNumArray.push(userNumOne);                                                             // Storing and validating our user's first and second numerical choice
    userNumTwo = rs.questionInt('Which number would you like to use next? ');
    userNumArray.push(userNumTwo);
    console.log('Your equation looks like this, ');                                           // We state the user's built equation
    console.log(userNumOne + operatorString + userNumTwo);
}

function userEquationResult () {                                                              // Now we solve the equation with the user inputs
    console.log('The result of your equation is ');
    return userNumArray.reduce(operationsObject[operatorString]);                          
}

function main () {                                                                            // Function main to control the flow of operation
    getOperator();
    getNumbers();
    console.log(userEquationResult(userNumArray, operatorString));
}

main ();                                                                                    