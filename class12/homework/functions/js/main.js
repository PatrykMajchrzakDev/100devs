// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||



function checkAge(age){
        return (age > 18) ? true : confirm("Did parents allow you?")
}


function checkAge2(age){
    return (age > 18) || confirm("Did parents allow you?")
}


function minNum(a,b){
    return Math.min(a,b)
}

function pow(x,n){
    return Math.pow(x,n)
}