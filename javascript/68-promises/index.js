//promise = object that encapsulates the result of an asychronous poperation. Let asynchronous methods return values like synchronous methods. "I promise to return something in the future".
// The STATE in 'pending' then: 'fulfilled' or 'reject'. The RESULT is what can be returned. 2 parts produncing and consuming.

const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;
    
    if(fileLoaded) {
        resolve("File loaded!");
    }
    else {
        reject("File NOT loaded!!");
    }
});

promise.then(value => console.log(value)).catch(error => console.log(error));

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(4000).then(() => console.log("HELLO! HOW ARE YOU DOING?"));