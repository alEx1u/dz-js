import { Task } from "./task.js";
import { User } from "./user.js";

const Task1 = new Task(prompt('Write a phrase'));
const User1 = new User(Task1);

window,addEventListener('load' , function() {
    const el = document.createElement("div");
    el.style.color = "white";
    el.style.fontSize = "50px";
    el.innerHTML = User1.do();
    document.body.append(el);
})