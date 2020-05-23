

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
function speak(name){
	var a="goodbye";
	console.log(a + " " + name);	

}
function speak1(name){
	var b="hello";
	console.log(b + " " + name);	
	

}

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();


 
  if (firstLetter === 'j') {
    speak(names[i]);
  } else {
    speak1(names[i]);
  }
}

})();



