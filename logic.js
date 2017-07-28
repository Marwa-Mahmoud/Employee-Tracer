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
		rate: rate,

		dateAdded: firebase.database.ServerValue.TIMESTAMP
	}

	database.ref("employee").push(data);


});

database.ref("employee").on("child_added",  function(snapshot){

	console.log(snapshot.val().name);
	console.log(snapshot.val().role);
	console.log(snapshot.val().startDate);
	console.log(snapshot.val().rate);

	$("#employeeData").append("<div class='well'><span id='employee-name'>" + snapshot.val().name + " </span><span id='employee-role'> " + snapshot.val().role + " <span id='start-date'> " + snapshot.val().startDate + " <span id='employee-rate'> " + snapshot.val().rate + " </span></div>");

}, function(errorObject){
	console.log("Errors Handled: " + errorObject.code);
});

database.ref("employee").orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){

	$("#display-name").html(snapshot.val().name);
	$("#display-role").html(snapshot.val().role);
	$("#startDate-display").html(snapshot.val().startDate);
	$("#rate-display").html(snapshot.val().rate);

});