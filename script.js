let mydata = JSON.parse(data);
let length = Object.keys(mydata).length
let index = Math.floor(Math.random() *length) ; 
document.getElementById("word").innerHTML = mydata[index].word;
document.getElementById("pronouncation").innerHTML = mydata[index].pronouncation;
document.getElementById("meaning").innerHTML = mydata[index].meaning;
document.getElementById("example").innerHTML = mydata[index].example;
