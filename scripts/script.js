/* function sayHello() {
    document.write("Hello !!");
}
sayHello();

function calArea(w, h) {

    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;

    var area = w * h;
    document.getElementById("area").value = area;
}
 */
var paragraph = document.getElementById("para");

document.write("What is the type of element : ", paragraph.nodeType);
console.log("This is the inner html : ", paragraph.innerHTML);
console.log("Does it have any child node : ", paragraph.childNodes);
paragraph.innerHTML = "I have changed this text through javascript";
var list = document.getElementsByTagName("p");
//var aTag = list.getElementsByTagName("a");
console.log("We have : ", list.length, " items.");
//console.log("We have : ", aTag.length, " a tag items in list");

//---------How to add content to page by javascript--------//
var createpTag = document.createElement("p");
createpTag.innerHTML = "This is just added by javascript";
document.getElementById("maincontainer").appendChild(createpTag);

//--------------------------------------------------------//


//------create content directly-----//
var createText = document.createTextNode("This is adding text directly to the webpage. !");
document.getElementById("maincontainer").appendChild(createText);

//5 second timer
function fiveSecTimer() {
    alert("This is the 2 second timer");
}

setTimeout(fiveSecTimer, 2000);