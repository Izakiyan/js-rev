var sayHello = function () {
  alert('Hello!');
};

var sayGoodbye = function () {
  alert('Goodbye!');
};

var sayWhatever = function (phrase) {
  alert(phrase);
};

var sentence = 'Im not a function but I still want to alert!';

var sayings = [sayHello, sayGoodbye, sayWhatever, sentence];

for (var i = 0; i < sayings.length; i++) {
	if (typeof sayings[i] === 'function')
	{
		console.log(sayings[i]());
	} 
	else if
	{
		alert(typeof sayings[i] === "undefined")
		{

		}
	}
	else
	{
		alert(sayings[i]);
	}
}


sayings[0];