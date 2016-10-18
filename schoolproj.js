/* jshint esversion:6 */
//one strategy:
var classes = [
	{
		name: "english",
		grade: "B",
		homework: false
	},
	{
		name: "programming",
		grade: "A",
		homework: true
	}
];

//use a for/in loop:
function getClassByName(name) {
	for (var i in classes) {
		if(classes[i].name === name) {
			return classes[i];
		}
	}
}

//or use a for/of loop:
function getClassByName(name) {
	for (var cls of classes) {
		if (classes[i] === name) {
			return cls;
		}
	}
}


//another strategy:
var classes = {
	"english": {			//quotes aren't necessary unless the key has a space or a special character or phrase
		grade: "B",
		homework: false
	},
	"programming": {
		grade: "A",
		homework: true
	}
};

function getClassByName(name) {
	return classes[name];
	//no: classes.name
	//no: classes["name"]	both will point to the "name" property, as in finding the exact word "name". not placeholder name.
}

//to get all classes:
res.write(JSON.stringify(classes));

//to get all of the class names:
function getClassNames() {
	var names = [];
	for (var name in classes) {
		names.push(name);
	}
	return names;
}
//or:
function getClassNames() {
	return Object.keys(classes);
}

getClassByName("english");

var className = "english";
var grade = classes[className].grade;

var classes = ["english", "programming"];
var grades = ["B", "A"];
var homework = [false, true];
//this is not as good of a solution as the first two. what if you add another class, but not a grade and/or homework?


