// task 1
// Write a function called knighted that takes a name and returns it with "Sir" in front
// when you use it - it should look like this
function knighted(name) {
  return "Sir " + name;
}
var name = knighted('Elton');
console.log(name) // 'Sir Elton'

document.getElementById('task-1').textContent = name;

// task 2
// Write a function called doubleIt that takes a number, doubles it and returns the new number
function doubleIt(number) {
  return number*2;
}
var answer = doubleIt(2);
console.log(answer) // 4

document.getElementById('task-2').textContent = answer;

// task 3
// Write a function called makeUser that takes a name and returns a new object
function makeUser(nameIs) {
  var nameObject = {name: nameIs}
  return nameObject;
}
var user = makeUser('Dave');
console.log(user) // {name: 'Dave'}

document.getElementById('task-3').textContent = user; //<--- this is weird

// task 4
// Write a function called makeLink that takes a title and a url and returns a string of html
function makeLink(title, url) {
  return '<a href="' + url + '>' + title + '</a>';
}
var aTag = makeLink('google', 'http://www.google.com');
console.log(aTag) // '<a href="http://www.google.com">google</a>'

document.getElementById('task-4').textContent = aTag;

// task 5
// Write a function called second that takes an array and returns the 2nd element in it
function second(array) {
  return array[1];
}
var answer = second(['a', 'b', 'c']);
console.log(answer) // 'b'

document.getElementById('task-5').textContent = answer;

// task 6
// Write a function called toSentence that takes an array and returns a string
// where the items are joined by commas (except the last one which is joined with 'and')
// where the first letter is capitalized and the string ends in an exclamation point.
function toSentence(array) {
  array[array.length-1] = 'and ' + array[array.length-1] + '!';
  array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1);
  return array.join(', ');
}
var sentence = toSentence(['lions', 'tigers', 'bears']);
console.log(sentence) // 'lions, tigers, and bears!'

document.getElementById('task-6').textContent = sentence;

// task 7
// Write a function called random number that returns a random number between 0 and x
// Hint: Take a look at MDN's docs on Math.random
function randomNumber(x) {
  var max = x + 1;
  return Math.floor(Math.random() * max);
}
var answer = randomNumber(5);
console.log(answer) // 0..5

document.getElementById('task-7').textContent = answer;

// task 8
// Write a function called magicEightball that returns a random answer from the following list
// "yes", "no", "maybe", "ask again later", "most likely"
function magicEightball() {
  var answers = ['yes', 'no', 'maybe', 'ask again later', 'most likely'];
  return answers[randomNumber(4)];
}
var answer = magicEightball();
console.log(answer) // yes || no || maybe etc...

document.getElementById('task-8').textContent = answer;

// task 9
// write a function called pluck that takes an array of objects and a key as arguments
// and returns a list of those properties
function pluck(array, key) {
  var valueList = [];
  // need to iterate through array
  // then need to access value of object attribute ['name']
  // push that attribute value to valueList;
  // array.map(valueList.push(student))
  for (var i = 0; i < array.length; i++) {
    var nameValue = array[i].name;
    valueList.push(nameValue);
  }
  return valueList;
}

var students = [{name: 'Harry', age: 12}, {name: 'Hermione', age: 13}, {name: 'Draco', age: 13}];
var names = pluck(students, 'name');
console.log(names) // ['Harry', 'Hermione', 'Draco']
document.getElementById('task-9').textContent = names.join(', ')


