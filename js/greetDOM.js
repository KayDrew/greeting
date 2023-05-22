var nameField = document.querySelector(".nameField");
var showCount = document.querySelector(".showCount");
var checkedRadio = document.querySelectorAll("input[name='language']");
var submit = document.querySelector(".submit");
var reset = document.querySelector(".reset");
var display = document.querySelector(".message");
var errorMessage = document.querySelector(".error");
var from = document.querySelector(".form");
let greetUser = greetName();
let errorTimeOut = "";
let resetTimeOut = "";

if (usersGreeted === null) {
	showCount.innerHTML = 0;
}
else {
	showCount.innerHTML = usersGreeted;
}


function showGreeting() {


	var language = "";
	for (let radio of checkedRadio) {

		if (radio.checked) {

			language = radio.value;

			radio.checked = false;
		}

	}



	greetUser.setName(nameField.value);

	display.innerHTML = greetUser.getGreetings(language);

	errorMessage.innerHTML = greetUser.getCheckError();
	nameField.value = "";

	showCount.innerHTML = usersGreeted;


	errorMessage.style.visibility = "visible";
	errorMessage.style.color = "red";

	clearTimeout(errorTimeOut);
	clearTimeout(resetTimeOut);

	errorTimeOut = setTimeout(function () {
		errorMessage.style.visibility = "hidden";
	}, 3000);

}

submit.addEventListener("click", showGreeting);


function resetAll() {

	clearTimeout(errorTimeOut);
	clearTimeout(resetTimeOut);

	var reset = confirm("Counter will be reseted. Would you like to continue?");

	if (reset) {

		errorMessage.style.visibility = "visible";
		errorMessage.innerHTML = "Counter reseted";
		errorMessage.style.color = "green";

		resetTimeOut = setTimeout(function () {
			errorMessage.style.visibility = "hidden";
		}, 3000);

		localStorage.clear();
		usersGreeted = 0;
		names = {};

		showCount.innerHTML = usersGreeted;
		display.innerHTML = "";
		nameField.value = "";

		for (let radio of checkedRadio) {

			if (radio.checked) {

				language = radio.value;

				radio.checked = false;
			}

		}

	}

}

reset.addEventListener("click", resetAll);