// Map = object that holds key-value pairs of any data type.

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

//store.get("t-shirt"); -- Add the value of the key.
//store.set("hat", 40); -- add a new key and value in the object.
//store.delete("hat"); -- delete the key passed.
//store.has("underwear"); -- verify if the object has the key passed, return an bolean value.
//store.size; -- show the size of the object.

store.forEach((value, key) => console.log(key, value));