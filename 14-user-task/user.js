export class User {
  constructor(Task) {
    this.Task = Task;
  }
  do() {
    //this.Task.run()
    return this.Task.run();
  }
}
