let adult = checkAge(21);
console.log(adult)

// USING IF STATEMENT

/*function checkAge(age) {
    if(age >= 18) {
        return true;
    }
    else {
        return false;
    }
} */

// USING TERNARY OPERATOR

function checkAge(age) {
  
    return age >= 18 ? true : false;
}
