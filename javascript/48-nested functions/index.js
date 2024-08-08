// nested functions = functions inside other functions. Outer functions have access to inner functions. Inner functions are "hidden" from outside. Used in closures.

let userName = "César";
let userInbox = 0;

login();

function login() {
    displayUsername();
    displayUserInbox();

    function displayUsername() {
        console.log(userName);
    }

    function displayUserInbox() {
        console.log(userInbox);
    }
}
