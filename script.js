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

//if car newer than 2015
// const indexNewerThan2015 = cars.findIndex((car) => car.year > 2015);
// console.log(indexNewerThan2015);

//if newer than 2020
// const indexNewerThan2020 = cars.findIndex((car) => car.year > 2020);
// console.log(indexNewerThan2020);

// some method******
//if anything yes, return true. if not, return false

// is there a ford in the array?
// const includesFord = cars.some((car) => car.make === 'Ford');
// console.log(includesFord);

// is there an evil monkey in my room?
// const myRoom = ['evil monkey', 'bed', 'lamp'];
// const includesEvilMonkey = myRoom.some((evil) => evil === 'evil monkey');
// console.log(includesEvilMonkey);

// every method******
// are all the items in the array x?

// const allNewerThan2000 = cars.every((car) => car.year > 2000);
// console.log(allNewerThan2000);

// reduce method******
// will take single array and reduce down to a single object/value

// const nums = [25, 6, 100, 3];

//classic function
// const sum = nums.reduce((acc, num) => {
//     console.log(acc, num);
//     return acc + num;
// });
// console.log(sum);

//arrow function
// const sum = nums.reduce((acc, num) => acc + num, 0);
// console.log(sum);

//counts votes
const votes = ['Yes', 'No', 'No', 'Yes', 'Yes'];
const tally = votes.reduce((runningTally, vote) => {
    // assign a 1 if first time seeing a certain "type" of vote
    // otherwise, increase vote count by 1
    runningTally[vote] = runningTally[vote] ? runningTally[vote] + 1 : 1;
    return runningTally;
}, {});
console.log(votes);
console.log(tally);