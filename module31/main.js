// // for - (in)

// var person = {firstName: "John", lastName:"Doe", age:25}

// var text = '';

// var z;

// for(z in person) {
//    text += person[z];
// }

// // 1 --> "John"
// // 2 ==> "John Doe"
// // 3 --> JohnDoe25

// console.log(text);

// console.log("-------------------------------------")

// // for - (of)

// var names = ['Steve','Bill','Mark'];

// var y;

// for( y of names ) {
//    console.log(y)
// }

// console.log("-------------------------------------");

// var txt = "Javascript";

// var l;

// for(l of txt){
//    console.log(l)
// }

// console.log("-------------------------------------")


var text = "The best school in the world is Digital School!";
var result = text.search("Digital School");
document.getElementById("result1").innerHTML = result;



var text = "The best school in the world is Digital School!";
var result = text.search(/Digital School/);
document.getElementById("result2").innerHTML = result;



var text = "The best school in the world is Digital School!";
var result = text.replace(/Digital School/ , "Another School");
document.getElementById("result3").innerHTML = result;



var text = "abcdef";
var regex = new RegExp('abc');
document.getElementById("result4").innerHTML = regex.test(text);



var text = "My school is the best school in the world!";
var regex = /school/g;
document.getElementById("result5").innerHTML = text.match(regex);



var text = "Digital school is the best school in the world!";
var regex = /i/g;
document.getElementById("result6").innerHTML = text.match(regex);



var text = "Digital school is the best school in the world!";
var regex = /[abc]/g;
document.getElementById("result7").innerHTML = text.match(regex);



var text = "Digital school is in top 10 best schools of the world!";
var regex = /[0-9]/g;
document.getElementById("result8").innerHTML = text.match(regex);



var text = "My school is the best school in the world";
var regex = /(top|best|school)/g;
document.getElementById("result9").innerHTML = text.match(regex);



var text = "100 percent !";
var regex = /\d/g;
document.getElementById("result10").innerHTML = text.match(regex);



var text = "My school is the best school in the world!";
var regex = /\s/g;
//space
document.getElementById("result11").innerHTML = text.match(regex);

