//Array methods

//1)push-- Append one or more elements at the end of the array(modifies the Original array).

let items=["pole","wire","switch","relay"];
//console.log("Main string:" + items);
console.log(items);
items.push("PCL","HMI");
console.log(items);

//2)pop-- Remove an elements at the end of the array(modifies the Original array).

let itemn=items.pop();
console.log(itemn);
console.log(items);


//3)shift--Removes the first element from an array and returns it.
let items1=items.shift();
console.log(items1);
console.log(items);

//4)unshift--Add the element at the  first in array and returns it.

let items2=items.unshift("pole");
console.log(items2);
console.log(items);

//5)splice--add or remove an element using specific index in an array.
items.splice(2,1,"conductor")
console.log(items);

//6)splice--creates a shallow copy or sub array and returns it as a new array.

let item4=items.splice(2,4);
console.log(item4);
console.log(items);

//7)concat--Combines two or more arrays and returns a new array.
let item5=["relay","switch","conductor"];
console.log(item5);
let item6=items.concat(item5);
console.log(item6);

//Iteration Methods

//8)forEach:Executes a provided function once for each array element (does not return anything).

items.forEach(item=>{console.log(item);});

//9)map:Creates a new array populated with the results of calling a function on every element in the array.
let numbers = [1, 2, 3];
let square = numbers.map(num => num * num);
console.log(square);

//10)filter:Creates a new array with all elements that pass the condition implemented by the provided function.

let country=["india", "USA", "indonesia", "UK", "Japan","Canada"]
let filterI = country.filter(con =>con.startsWith('i'));
console.log(filterI);

//11)find:Returns the first element in the array that satisfies the provided testing function.

let findI = country.find(con =>con.startsWith('i'));
console.log(findI);

//12)some:At least one element in the array passes the condition in a function it will Return boolean

let someCountry = country.some(con =>con.startsWith('i'));
console.log(someCountry);

//13)every:If all the element in the array passes the condition for a function - Return boolean
let eveNumbers = [2, 4, 6, 8];
let allEven = eveNumbers.every(num => num % 2 === 0);
console.log(allEven);

//14)indexOf:Returns the first index at which a specified element is found, or -1 if it is not found.

let indexOf = country.indexOf("USA");
console.log(indexOf);


//15)reverse:Reverses the elements of the array in place and returns the reversed array.(modifies the Original array).

let reverseNum = country.reverse();
console.log(reverseNum);
console.log(country);

//16)sort:Sorts the elements of the array in place and returns the sorted array.(modifies the Original array).

let sortedCountries = country.sort();
console.log(sortedCountries);

//17)length: length of the array, Note:The length property is not a method
let countriesCount = country.length;
console.log(countriesCount);
console.log(country);

let num= [2,1,11,23,12,8];
num.sort((a, b) => a - b);
console.log(num);

//Strings:

//1)length: Will get the length of the string
let userName= "Jayalakshmi";
if (userName.length === 0) {
    console.log("Username cannot be empty");
} else {
    console.log("Valid username.");
}

//2)at:allows you to access a character at a specific position in a string including using negative indices to count from the end of the string.

let message = "Hello, My name is Jayalakshmi!";
let msg4 = message.at(-1);
console.log(msg4);

//3)charAt:character at specified index (position) in a string & it returns an empty string if index is out of bounds.


let char = message.charAt(7);
console.log(char);

//4)split:splits a string into an array of substrings based on a specified separator(eg: "-" , ",")

let name = "Jaya,Lakshmi,Rayankula";
let nameInArray = name.split(",");
console.log(nameInArray);

//5)slice:Extracts a part of a string between two specified indices and returns the new string.

let part = message.slice(0, 5);
console.log(part);

//6)substring: Same as slice but difference in handeling of  negative indices

let msg = message.substring(0, 30);
console.log(msg);

//7)substr:Deprecated, but still used// returns a substring starting at a specified index

let msg2 = message.substr(0, 11);
console.log(msg2);

//8)trim:method removes whitespace from both ends of a string

let spaceMsg ="   Heelo, My name is Jayalakshmi!       ";
let trimmed =spaceMsg.trim();

console.log(trimmed);

//9)padStart:The padding is added to the beginning of the string.

let dateOfBirthStr="06/1997"
let paddedStart = dateOfBirthStr.padStart(10, "00/");
console.log(paddedStart);

//10)padEnd:

let dateOfBirthEnd="03/06"
let paddedEnd = dateOfBirthEnd.padEnd(10, "/0000");
console.log(paddedEnd);

