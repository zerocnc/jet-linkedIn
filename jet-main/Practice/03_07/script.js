/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const phone = {
	name: "Richards Phone",
	storageSize: "1 GB",
	color: "Black",
	earPhoneJack: true,
};

console.log("Phone object:", phone);
var query = "color";

console.log("Phone color is:", phone[query]);

console.log("Phone storage size is:", phone.storageSize);

const book = {
	title: "Programming with JS",
	chapterOne: {
		intro: "The start is here...",
	},
	chapterTwo: {
		intro: "We begin chapter two...",
	},
};

console.log("The book title is:", book.title);

console.log("The book chapter two starts with: ", book.chapterTwo.intro);
