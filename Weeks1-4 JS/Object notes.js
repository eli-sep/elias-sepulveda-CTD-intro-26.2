const objLiteral = {
    name: "Violet",
    age: 7,
    species: "dog",
}

const objConstructor = new Object();
objConstructor.name = "Violet";
objConstructor.age = 7;
objConstructor.species = "dog";

const objFactory = (name, age, species) => {
    return {
        name: name,
        age: age,
        species: species,
    }
}

//How do you use the factory function to create a new object?
const violet = objFactory("Violet", 7, "dog"); 

//So is the factory just a function that returns an object? 
//Yes, it is! It allows us to create multiple objects with the same structure without having to repeat the code for each one. We can simply call the factory function with different arguments to create different objects.

//Why don't we just call it a function that creates objects?

//That's a good question! The term "factory" is used because it emphasizes the idea of creating multiple objects with a similar structure. It's a common design pattern in programming, and it helps to organize code and make it more reusable. By using a factory function, we can easily create new objects without having to worry about the underlying implementation details.

const objEmpty = {};
objEmpty.name = "Violet";
objEmpty.age = 7;
objEmpty.species = "dog";

//This is another way to create an object, by starting with an empty object and then adding properties to it. It's a bit more verbose than using an object literal or a factory function, but it can be useful in certain situations where you need to create an object dynamically or add properties conditionally.    

//Is that basically the same as the constructor method?

// Yes, it's similar to the constructor method in that it allows you to create an object and then add properties to it. However, the constructor method typically involves defining a function that serves as a blueprint for creating objects, while the empty object approach is more straightforward and doesn't require defining a separate function. Both methods can achieve the same result, but they have different use cases and advantages depending on the situation.

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

//Is there way a way to console log the name of the person without using this.name?

// Yes, you can access the name property directly from the object itself instead of using `this`. Here's how you can modify the `introduceSelf` function to log the name without using `this.name`:
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${obj.name}.`);
  };
  return obj;
}

// In this version, we use `obj.name` to access the name property directly from the object. However, using `this.name` is generally preferred in object methods because it allows for more flexibility and better encapsulation, especially when dealing with inheritance or when the method is called in different contexts.

//What are some other ways we can log values of the object without using this?

// Besides using `this`, you can also access the properties of the object directly by referencing the object variable itself, as shown in the previous example. Another way to log values of the object is by using destructuring assignment to extract the properties into variables. Here's an example:

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    const { name } = obj; // Destructuring assignment
    console.log(`Hi! I'm ${name}.`);
  };
  return obj;
}

// In this example, we use destructuring to extract the `name` property from the `obj` and then log it. This approach can be useful when you want to work with multiple properties of the object without having to reference the object variable repeatedly.

function myObject(name, age) {
    return {
        name: name,
        age: age,
        }
    };

    //How would I console log the name and age of the object created by this function?

    // const person = myObject("Alice", 30);
    // console.log(`Name: ${person.name}, Age: ${person.age}`);


console.log(myObject("Alice", 30).name);

function newObject(name, age) {
    const obj = {
        name: name,
        age: age,
        }
    return obj;
    };

//Is there a way to console log the name and age of the object created by this function without creating a new variable to store the object?

// Yes, you can directly access the properties of the object returned by the function without storing it in a variable. Here's how you can do it:

console.log(`Name: ${newObject("Alice", 30).name}, Age: ${newObject("Alice", 30).age}`);

// However, this approach is not efficient because it calls the `newObject` function twice, creating two separate objects. A better way to do this would be to store the object in a variable and then access its properties:

const person = newObject("Alice", 30);
console.log(`Name: ${person.name}, Age: ${person.age}`);

function createCar(make, model) {
    console.log(`Make: ${make}, Model: ${model}`);
    return {
        make,
        model,
    }
}

function createTruck(make, model) {
return {
    make,
    model,
    describe : function () {
    console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
}
}

//What is the difference between the createCar and createTruck functions?

// The main difference between the `createCar` and `createTruck` functions is that `createCar` logs the make and model to the console immediately when the function is called, while `createTruck` does not log anything when the function is called. Instead, `createTruck` includes a method called `describe` that can be called later to log the make and model of the truck.

// In `createCar`, the logging happens as a side effect of calling the function, which may not always be desirable. In contrast, `createTruck` allows you to create the truck object without any side effects and gives you the flexibility to log the details whenever you choose by calling the `describe` method.


function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

console.log(createPerson("Bob").introduceSelf());

