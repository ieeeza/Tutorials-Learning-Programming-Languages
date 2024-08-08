//cookie = a small text file stored on your computer. Used to remenber a information about the use. Saved in name-value pairs.

document.cookie = "firstName=SpongeBob; expires=Sun, 1 Jan 2030 12:00:00 UTC; path=/";
document.cookie = "lastName=SquarePants; expires=Sun, 1 Jan 2030 12:00:00 UTC; path=/";

deleteCookie("firstName");
deleteCookie("lastName");
deleteCookie("email;")

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value} ${expires}; path=/` 
}
function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecoded = documentURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.lenght + 1)
        }
    });
    return result;
}