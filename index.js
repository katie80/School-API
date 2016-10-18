/* jshint esversion:6 */

var http = require("http");
var fs = require("fs");

var classes = {
			"english": {
				grade: "B",
				homework: false,
				taking: true
			},
			"programming": {
				grade: "A",
				homework: true,
				taking: false
			},
			"math": {
				grade: "A",
				homework: true,
				taking: false
			},
			"biology": {
				grade: "A",
				homework: true,
				taking: false
			},
			"history": {
				grade: "B",
				homework: false,
				taking: true
			},
			"french": {
				grade: "B",
				homework: true,
				taking: false
			}
		};

var server = http.createServer((req, res) => {
	if (req.url === "/index.html" || req.url === "/"){
		fs.readFile("index.html", (err, data) => {
			res.write(data);
			res.end();
		});
	} else if (req.url === "/allclasses" && req.method === "GET") {
		res.write(JSON.stringify(classes));
		res.end();
	} else if (req.url === "/grades" && req.method === "GET") {
		var taking = [];
		for (var courseName in classes) {
			if (classes[courseName].taking === true) {
				taking.push(courseName + ": " + classes[courseName].grade);
			}
		}
		res.write(JSON.stringify(taking));
		res.end();
	} else if (req.url === "/schedule" && req.method === "GET") {
		var taking = [];
		for (var courseName in classes) {
			if (classes[courseName].taking === true) {
				taking.push(courseName);
			}
		}
		res.write(JSON.stringify(taking));
		res.end();
	} else if (req.url === "/schedule" && req.method === "POST") {
		var className = "";

			req.on('data', function(data) {
				className += data;
				if(className.length > 1e6) {
					className = "";
					res.writeHead(413, {'Content-Type': 'text/plain'}).end();
					req.connection.destroy();
				}
			});

			req.on('end', function() {
				console.log(className);

				classes[className].taking = true;

			});

			res.end();
	} else if (req.url === "/homework" && req.method === "GET") {
		var taking = [];
		for (var courseName in classes) {
			if (classes[courseName].taking === true) {
				taking.push({courseName: courseName, homework: classes[courseName].homework});
			}
		}
		res.write(JSON.stringify(taking));
		res.end();
	} else if (req.url === "/homework" && req.method === "POST") {

		var className = "";

			req.on('data', function(data) {
				className += data;
				if(className.length > 1e6) {
					className = "";
					res.writeHead(413, {'Content-Type': 'text/plain'}).end();
					req.connection.destroy();
				}
			});

			req.on('end', function() {
				console.log(className);

				classes[className].homework = true;

			});
	}
});

server.listen(8000, () => {
	console.log("Server started on port 8000");
});



