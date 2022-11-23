//copy set of html elemets <p> to downloadable json file
//


function Export() {
	//Convert contents of all <p> elemets into a json file that you can download.
	//The json file contains the following information:
	//	- Message
	//	- Author
	//	- Date

	var json = {};
	var p = document.getElementsByTagName("p");
	for (var i = 0; i < p.length; i++) {
		var msg = p[i].innerHTML;
		var author = p[i].getAttribute("author");
		var date = p[i].getAttribute("date");
		json[i] = {
			"Message": msg,
			"Author": author,
			"Date": date
		};

		//console.log(json[i]);
		//console.log(author);
		//console.log(date);
		//console.log(msg);
		//console.log(p[i].innerHTML);
		//console.log(p[i].getAttribute("author"));
		//console.log(p[i].getAttribute("date"));
		
			
	alert("Exporting...");
	//Do the oppisite of the above for the json file.
	//alert("Exporting...");
		//alert(p[i].innerHTML);
		//alert(p[i].getAttribute("author"));
		//alert(p[i].getAttribute("date"));
		//alert(msg);
}
//Below convers the uploaded JSON File from the user, checks the ID inside the JSON to confirm it was created with this site, and if it is valid, imports the messages inside back onto the screen. Like in the previous function, it may be HTML to JavaScript if it is easier to implement.
function Import() {
	//Imports the json file that was uploaded by the user into html that is viewed on the screen.
	//The json file contains the following information:
	//	- Message
	//	- Author
	//	- Date
	//	- ID

	var json = {};
	var p = document.getElementsByTagName("p");
	for (var i = 0; i < p.length; i++) {
		var msg = p[i].innerHTML;
		var author = p[i].getAttribute("author");
		var date = p[i].getAttribute("date");
		var id = p[i].getAttribute("id");
		json[i] = {
			"Message": msg,
			"Author": author,
			"Date": date,
			"ID": id

				
		};
		//console.log(json[i]);
		//console.log(author);
		//console.log(date);
		//console.log(msg);
		//console.log(p[i].innerHTML);
		//console.log(p[i].getAttribute("author"));
		//console.log(p[i].getAttribute("date"));
		//console.log(p[i].getAttribute("id"));
		
			
	alert("Importing...");	
		//alert(p[i].innerHTML);
		//alert(p[i].getAttribute("author"));
		//alert(p[i].getAttribute("date"));
		//alert(msg);
		//alert(p[i].getAttribute("id"));
		

	
}
