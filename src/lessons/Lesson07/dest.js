const fruits = ['apple', 'orange'];

const arr = [...fruits, "cherry"];

console.log(arr); // Output: [ 'apple', 'orange', 'cherry' ]
console.log(fruits); // Output: [ 'apple', 'orange', 'cherry);


// object
const bookObj = {
    bookName: 'Great Gatsby',
    price: 20,
}

const newBookObj = {...bookObj, author: 'Fitzgerald'};
console.log(newBookObj);


// destruktur
// massiv
const colors = ["red", "black"];
// const colors1 = colors[0];
// const colors2 = colors[1];
// console.log(colors1);
// console.log(colors2);
// console.log(colors);

const [colors1, colors2] = colors;
console.log(colors1);
console.log(colors2);
console.log(colors);

// Objekt
const animal = {
    title: 'Dog',
    weight: 20
}
// const title = animal.title;
const {title, weight: animalWeight} = animal;
console.log(title);
// console.log(weight);
console.log(animalWeight);
console.log(animal);