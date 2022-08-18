let selectText = document.querySelector("[type=text]");
console.log(selectText);
let selectAdd = document.querySelector(".task");
console.log(selectAdd);
let listCLass = document.querySelector(".list");
let submit = document.querySelector(".add");
let listOfTask = [];
selectAdd.addEventListener("click", (e) => {
  if (selectText.value !== "") {
    listOfTask.push(selectText.value);
    window.localStorage.setItem("TaskToAdd", JSON.stringify(listOfTask));
    location.reload();
  }
  selectText.value = "";
});

if (window.localStorage.getItem("TaskToAdd")) {
  for (
    let i = 0;
    i < JSON.parse(localStorage.getItem("TaskToAdd")).length;
    i++
  ) {
    let createDiv = document.createElement("div");
    createDiv.className = "container";
    listCLass.append(createDiv);
    let selectList = document.createElement("p");
    let selectbut = document.createElement("button");
    selectbut.className = "del";
    selectbut.textContent = "Delete";
    selectbut.style.opacity = 1;
    selectList.style.opacity = 1;
    listOfTask = JSON.parse(localStorage.getItem("TaskToAdd"));
    console.log(listOfTask[i]);
    createDiv.append(selectList);
    createDiv.append(selectbut);
    selectList.textContent = listOfTask[i];
  }
  let s = document.querySelectorAll(".del");
  let sp = document.querySelectorAll("p");
  console.log(s);
  console.log(sp);
  for (let i = 0; i < s.length; i++) {
    s[i].addEventListener("click", (e) => {
      // console.log((s[i].style.opacity = 0));
      console.log([i]);
      for (let j = i; j < i + 1; j++) {
        let TaskToAdd = JSON.parse(localStorage.getItem("TaskToAdd"));
        console.log(sp[i]);
        TaskToAdd.splice(i, 1);
        localStorage.setItem("TaskToAdd", JSON.stringify(TaskToAdd));
        // sp[i].style.opacity = 0;
      }
      location.reload();
    });
  }
}
