let first_item = document.createElement("li");
let list = document.getElementById("chathistory");

var clickHandler = function(eventObject) {
  let boxValue = document.getElementById("chatbox").value;
  let list = document.getElementById("chathistory");
  let item = document.createElement("li");
  let username = document.getElementById("userbox").value;
  item.innerHTML = username + ": "+ boxValue;
  list.appendChild(item);
}

var clearHandler = function(eventObject) {
  list.innerHTML = "";
}

document.querySelector("#chatbutton").addEventListener("click" , clickHandler);
document.querySelector("#clearbutton").addEventListener("click", clearHandler);
