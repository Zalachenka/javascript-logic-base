const userAge = prompt("How old are you ?");
if (userAge >= 18) {
	alert("You are of lawful age") 
}

else {
	alert("Hello simple user")

};
const userRole = prompt("What do you do ?");
if (userAge >= 18 && userRole == "admin") {
	alert("Welcome, admin")
};
if (userAge >= 18 && userRole == "admin") {
	var password = prompt("Enter your password")
	if (password.length > 5) {
		alert("Welcome, master user.")
	};
};