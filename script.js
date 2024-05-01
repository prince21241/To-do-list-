const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addtask() {
  if (inputbox.value === "") {
    alert("You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  inputbox.value = "";
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagname === "LI") {
      e.target.classlist.toggle("checked");
    } else if (e.target.tagname === "SPAN") {
      e.targer.parentElement.remove();
    }
  },
  false
);
