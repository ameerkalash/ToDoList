let tasks = [];
getTasksFromStorag();
function d(dd) {
  if (tasks[dd].isDone == "check") {
    tasks[dd].isDone = "cancel";
  } else if (tasks[dd].isDone == "cancel") {
    tasks[dd].isDone = "check";
  }
  storeTasks();
  a();
}
function c(cc) {
  let j = prompt("عدل على المهمة", `${tasks[cc].taskk}`);
  let jj = confirm("هل انت متأكد من التعديل على المهمة");
  if (jj) {
    tasks[cc].taskk = j;
    storeTasks();
    a();
  }
}
function b(bb) {
  let sure = confirm("هل انت متأكد من انك تريد حذف مهمة : " + tasks[bb].taskk);
  if (sure) {
    tasks.splice(bb, 1);
    storeTasks();
    a();
  }
}
function a() {
  document.getElementById("tasks").innerHTML = " ";
  let n = 0;
  for (i of tasks) {
    let content = `
    <div id="task" class="task ${i.isDone == "cancel" ? "task2" : ""}">
    <div class="r">
    <h3>${i.taskk}</h3>
    <div class="date">
    <span class="material-symbols-outlined">
    calendar_month
    </span>
    <span>${i.datee}</span>
    </div>
    </div>
    <div class="l">
    <button onclick="b(${n})" class="btns" id="btn1">
    <span class="material-symbols-outlined">
    delete
    </span>
    </button>
    <button onclick="d(${n})" class="btns" id="btn2">
    <span id="canche" class="material-symbols-outlined">
    ${tasks[n].isDone}
    </span>
    </button>
    <button onclick="c(${n})" class="btns" id="btn3">
    <span class="material-symbols-outlined">
    edit
    </span>
    </button>
    </div>
    </div>
    `;
    document.getElementById("tasks").innerHTML += content;
    n += 1; 
  }
}
document.getElementById("btn").addEventListener("click", function () {
  let nameTask = prompt("ادخل المهمة التي تريد تنجزها");
  let dat = new Date().toLocaleDateString();
  tasks.push({
    taskk: nameTask,
    datee: dat,
    isDone: "check",
  });
  storeTasks();
  a();
});

// storage Function
function storeTasks() {
  let stringTask = JSON.stringify(tasks);
  localStorage.setItem("tasks", stringTask);
}
function getTasksFromStorag() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  a();
}

