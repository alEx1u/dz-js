export class Task {
  #message;
  constructor(message = "no message") {
    this.#message = message;
  }
  run() {
    return this.#message;
    //console.log(this.#message);
  }
}
