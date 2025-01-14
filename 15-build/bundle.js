(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  class Task {
    #message;
    constructor(message = "no message") {
      this.#message = message;
    }
    run() {
      return this.#message;
      //console.log(this.#message);
    }
  }

  class User {
    constructor(Task) {
      this.Task = Task;
    }
    do() {
      //this.Task.run()
      return this.Task.run();
    }
  }

  const Task1 = new Task(prompt('Write a phrase'));
  const User1 = new User(Task1);

  addEventListener('load' , function() {
      const el = document.createElement("div");
      el.style.color = "white";
      el.style.fontSize = "50px";
      el.innerHTML = User1.do();
      document.body.append(el);
  });

}));
