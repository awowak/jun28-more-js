// JS steps
// get info from textbox
// do stuff with it
// output to page

function makeMadLib(noun, adjective, person) {
	var noun = document.getElementById('noun').value;
	var adjective = document.getElementById('adjective').value;
	var person = document.getElementById('person').value;
	var lib = ('The ' + adjective + ' ' + noun + ' devoured ' + person + '.');
	document.getElementById('story').innerHTML = lib; 
}
