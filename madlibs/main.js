// JS steps
// get info from textbox
// do stuff with it
// output to page

function makeMadLib(noun, adjective, person) {
	var noun = document.getElementById('noun');
	var adjective = document.getElementById('adjective');
	var person = document.getElementById('person');
	var lib = ('The ' + adjective + ' ' + noun + ' devoured ' + person + '.');
	document.getElementById('story').innerHTML = lib; 
}


