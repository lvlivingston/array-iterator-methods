// Array Iterator Methods

//imperative vs. functional/declarative programming
//Today functional/declarative programming - more concise

// forEach method******
// should log out "I have a friend named <friend's name>" for each friend.

// const friends = ['Melissa', 'Marc', 'Andrew', 'Nick'];

// classic function
// friends.forEach(function(friend) {
//     console.log(`I have a friend named ${friend}.`);
// })

// arrow function
// friends.forEach((friend) => {
//     console.log(`I have a friend named ${friend}.`);
// });

//arrow function with their name returned as lowercase
// friends.forEach((friend) => {
//     const lowercaseFriend = friend.toLowerCase();
//     console.log(`I have a friend named ${lowercaseFriend}`);
// });

// map method******
// creates a new array from an original array

// const nums = [1, 2, 3];

// classic function
// const squared = nums.map(function(num) {
//     return num * num;
// });
// console.log(squared);

// arrow function
// const squared = nums.map((num) => num * num);
// console.log(squared);

// arrow function with multi-value array
// const people = [
//     {name: 'Fred', town: 'Bedrock'},
//     {name: 'Susan', town: 'Miami'},
//     {name: 'John', town: 'Arcadia'}
// ]

// const els = people.map((person, idx) => {
//     const el = document.createElement('div');
//     el.innerHTML = `${person.name} <span>(${person.town})</span>`;
//     return el;
// })

// els.forEach(el => document.body.append(el));

// const instructors = ['Alex', 'Stephanie', 'Daniel'];

// const isAwesome = instructors.map((instructor, idx) => {
//     const awesome = document.createElement('div');
//     awesome.innerHTML = `${instructor} is awesome`;
//     return awesome;
// })

// isAwesome.forEach(awesome => document.body.append(awesome));

// filter method******
// filters out a certain element from the array i.e. filter out all the squares

// const nums = [100, 2, 5, 42, 99];
// const odds = nums.filter((num) => num % 2);
// console.log(odds);

// const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];
// const jerks = people.filter((jerk) => jerk !== 'jerks');
// console.log(jerks);

// find method******
// finds an element within an array i.e. find the square in the group of shapes

// const cars = [
//     {color: 'red', make: 'BMW', year: 2001},
//     {color: 'white', make: 'Toyota', year: 2013},
//     {color: 'black', make: 'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016},
// ]

//find first white car in the array
// const firstWhiteCar = cars.find((car) => car.color === 'white');
// console.log(firstWhiteCar);

//if request doesn't exist, will return undefined
// const blueCars = cars.find((car) => car.color === 'blue');
// console.log(blueCars);

//if car older than 2014
// const notTooOldCar = cars.find((car) => car.year < 2014);
// console.log(notTooOldCar);

// findIndex method******





