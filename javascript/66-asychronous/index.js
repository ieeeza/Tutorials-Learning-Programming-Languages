//synchronous = In an ordered sequence. Step-by-step linear instructions (start now, finish now).

//asyncrhonous code = Out of sequence. Ex. Access a database, Fetch a file. Tasks that take time (start now, finish sometime later)

console.log("START");
setTimeout(() => console.log("This is asycrhonous", 5000));
console.log("END");