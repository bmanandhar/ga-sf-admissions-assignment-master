// message in the console
console.log("Hi there, welcome to the JavaScript console!");

// initialize the application
var app = new Object();
app.shakePokeball = function shakePokeball() {
  // code BELOW this line for challenge #1 -->
  var shakeBall = document.getElementById("pokeball");
  //shakeball.className = "shake";
  shakeBall.className = "shake";
} // <-- code ABOVE this line for challenge #1

app.setName = function setName() {
  // code BELOW this line for challenge #2 -->
  var firstNameInput = prompt("What is your first name?");
  var firstNameElement = document.getElementById("first-name");
  firstNameElement.innerHTML = firstNameInput;
} // <-- code ABOVE this line for challenge #2

app.setWebsite = function setWebsite() {
  // code BELOW this line for challenge #3 & bonus -->
  var favWebsiteInput = prompt("What is your favorite website?");
  var favWebsiteElement = document.getElementById("favorite-website");
  favWebsiteElement.innerHTML = "<a href='"+favWebsiteInput+"' >find out here!</a>";
} // <-- code ABOVE this line for challenge #3 & bonus
