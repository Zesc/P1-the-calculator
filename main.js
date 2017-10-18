var currentString = '';

function getValue(number) {
	var value = number.value;
	currentString += value;
	updateDisplay();
}

function updateDisplay() {
	var display = document.getElementById('display');
	display.innerHTML = currentString;
}

function buttonClear() {
	var display = document.getElementById('display');
	display.innerHTML = '';
	currentString = '';
}

function eql() {
	if( currentString.includes('x')){
		currentString = currentString.replace('x', '*');
		var answer = eval(currentString);
		currentString = answer;
		updateDisplay();
	}
	else {
		var answer = eval(currentString);
		currentString = answer;
		updateDisplay();
	}
}