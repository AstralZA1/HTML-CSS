function showOriginal(){
var book = ["Sherlock Holmes ", "Harry Potter", "Lord of the Rings", "To kill a Mockingbird"];
document.getElementById("output").innerHTML = "Original Order:"+"<br>"+book.join("<br>")+"<br>";
}
function showAlphabetical(){
book.sort();
document.getElementById("output").innerHTML = "Alphabetical Order:"+"<br>"+book.join("<br>")+"<br>";
}
function showReverse(){
book.reverse();
document.getElementById("output").innerHTML = "Reverse Order:"+"<br>"+book.join("<br>")+"<br>";
}
