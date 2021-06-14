/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class MyBackpack {
	constructor(
		// Define parameters
		name,
		volume,
		color,
		pocketNum,
		strapLengthL,
		strapLengthR,
		lidOpen
	) {
		// Define properties
		this.name = name;
		this.volume = volume;
		this.color = color;
		this.pocketNum = pocketNum;
		this.strapLength = {
			left: strapLengthL,
			right: strapLengthR,
		};
		this.lidOpen = lidOpen;
	}
	// Method Functions
	toggleLid(lidStatus) {
		this.lidOpen = lidStatus;
	}
	newStrapLength(lengthLeft, lengthRight) {
		this.strapLength.left = lengthLeft;
		this.strapLength.right = lengthRight;
	}
}

export default MyBackpack;
