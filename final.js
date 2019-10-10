var $ = function(id){
	return document.getElementById(id);
}
/*The Goal is simple. Create a simple calculator
I am going to set it up to where each button does the task they are supposed to. 
An example being when you click 1 the texbox has a 1 in it.
I will be using the eval() function in order to evaluate what has been entered into the textbox
All buttons including clear should be fully operational and able to be used.
There should be little to no errors or crashes and the logic should be strong.
*/


window.onload = function(){
	
	
var zero = $("zero");
//sets the variable named zero equal to the button with the id of 0
zero.addEventListener("click", function(){
	//makes it to where code below occurs when button is clicked
	//The same applies to buttons 0-9, +,-,/,*, ., and clear.
	//All require click events to trigger.
	//The numbers 0-9 on click just set the text box value equal to each of their respective numbers. 
	//The += makes it to where they all list out rather than override each other. 
	
	
	$("entry").value += this.value;
	//sets the value of the texbox equal to the value of zero which was defined in the html
});

var one = $("one");
//sets the variable named one equal to the button with the id of one
one.addEventListener("click", function(){
	$("entry").value += this.value;
});

var two = $("two");
//sets the variable named two equal to the button with the id of two
two.addEventListener("click", function(){
	$("entry").value += this.value;
});

var three = $("three");
//sets the variable named three equal to the button with the id of three
three.addEventListener("click", function(){
	$("entry").value += this.value;
});

var four = $("four");
//sets the variable named four equal to the button with the id of four
four.addEventListener("click", function(){
	$("entry").value += this.value;
});

var five = $("five");
//sets the variable named five equal to the button with the id of five
five.addEventListener("click", function(){
	$("entry").value += this.value;
});

var six = $("six");
//sets the variable named six equal to the button with the id of six
six.addEventListener("click", function(){
	$("entry").value += this.value;
});

var seven = $("seven");
//sets the variable named seven equal to the button with the id of seven
seven.addEventListener("click", function(){
	$("entry").value += this.value;
});

var eight = $("eight");
//sets the variable named eight equal to the button with the id of eight
eight.addEventListener("click", function(){
	$("entry").value += this.value;
});

var nine = $("nine");
//sets the variable named nine equal to the button with the id of nine
nine.addEventListener("click", function(){
	$("entry").value += this.value;
});	
var clear = $("clear");
//sets the variable named clear equal to the button with the id of clear
clear.addEventListener("click", function(){
	$("entry").value = "";
	
});

	
var equal = $("equal");
//sets the variable named equal to the button with the id of equal
equal.addEventListener("click", function(){
	var x = $("entry").value;
	
	if(isNaN(x)){
		//determines if the string will return a valid number
		$("entry").value = "Please enter a valid equation";
		//if it is not a valid number the textbox will say "Please enter a valid equation"
	}
	//A side note- The console still logs it as an error which I'm not sure how to get rid of, but it seems to work for now.
	
	
	var result = eval(x);
	//Takes the string in the textbox and evaluates it based on what is in it.
	//For example if it takes the string "3.12+4.2" it would output the result as a string which says 7.32
	console.log(result);
	//logs the result of eval(x) in the console
	
	$("entry").value = result;
	//Displays the final result in the textbox
	
	
	if($("entry").value == "Infinity"){
		$("entry").value = "You cannot divide by 0";
		//sets the value of the textbox to "You cannot divide by 0" if the current value of it is equal to "Infinity"
		//Infinity is the default result if you divide by 0 which is why it is set up this way
		
	}
	
	else{
		$("entry").value = result;
	}
});

var add = $("add");
//sets the variable add equal to the button with the id of add
add.addEventListener("click", function(){
	$("entry").value += "+";
});

var subtract = $("subtract");
//sets the variable subtract equal to the button with the id of subtract
subtract.addEventListener("click", function(){
	$("entry").value += "-";
});

var multiply = $("multiply");
//sets the variable multiply equal to the button with the id of multiply
multiply.addEventListener("click", function(){
	$("entry").value += "*";
});

var divide = $("divide");
//sets the variable divide equal to the button with the id of divide
divide.addEventListener("click", function(){
	$("entry").value += "/";
});

var decimal = $("decimal");
//sets the variable decimal equal to the button with the id of decimal
decimal.addEventListener("click", function(){
	$("entry").value += ".";
	
	
});




	
}

/*NOTES

With the way I have done it you are able to enter values into the textbox and it will output accordingly
It however does console log an error if you enter a series of letters, but when you click equal it tells you to enter a correct equation.
As I said earlier I'm not sure how to fix it but besides that everything works fine. 
*/

