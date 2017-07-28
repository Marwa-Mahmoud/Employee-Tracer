  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGbpD0iUAaXlkudVEVjU22f2NqzjyDlKg",
    authDomain: "employee-tracker-c7865.firebaseapp.com",
    databaseURL: "https://employee-tracker-c7865.firebaseio.com",
    projectId: "employee-tracker-c7865",
    storageBucket: "",
    messagingSenderId: "1019054819186"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //var name = "";
 // var role = "";
 

$("#add-employee").on("click", function(event){

	event.preventDefault();
	var name = $("#employee-name").val().trim();
	var role = $("#employee-role").val().trim();
	var startDate = $("#start-date").val().trim();
	var rate  = $("#employee-rate").val().trim();

	console.log(name);

	var data = {
		name: name,
		role: role,
		startDate: startDate,
		rate: rate
	}

	database.ref("employee").push(data);


});