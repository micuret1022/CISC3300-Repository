// 1. JavaScript is a high-level scripting or programming language used for web development. Interpreted languages like JavaScript are executed line by line by an interpreter at runtime. Compiled languages, on the other hand, are translated into machine code before it is executed, resulting in a faster performance.   

// 2. 'Var' declares a a variable globally, or locally to an entire function, regardless of block scope. 'Let' declares a block-scoped variable, meaning it's only accessible within the block it's defined in. 'Const' also declares a block-scoped variable, but its value cannot be reassigned after initialization. 'var', 'let', and 'const' are all used for variable declaration in JavaScript, but they have different scopes and behaviors.

// 3. Anonymous functions are functions that are declared without a named identifier. They are often used as arguments to other functions or as immediately invoked function expressions. Higher-order functions are functions that can take other functions as arguments or return functions as results.

// 4. In JavaScript, objects are collections of key-value pairs where values can be of any data type, including functions and other objects. They are dynamic and can have properties and methods added or removed at runtime. JavaScript's object-oriented programming (OOP) model is based on prototypes rather than classes, which is different from more traditional class-based OOP languages like Java or C++. In traditional OOP languages, objects are instances of classes and inherit their properties and methods from those classes, whereas in JavaScript, objects inherit directly from other objects through prototypes. This prototype-based inheritance allows for flexible and dynamic object creation and manipulation.

const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
]

let availableCats = [];

for (let i = 0; i < cats.length; i++) {
    if (cats[i].adoptionStatus === 'available') {
        availableCats.push(cats[i].name);
    }
}

const sentence = `I've just adopted ${availableCats.join(', ')}!`;

console.log(sentence);

