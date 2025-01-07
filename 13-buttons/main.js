window.addEventListener("load", function () {
  const wrapper = document.createElement("div");
  document.body.append(wrapper);
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "center";
  wrapper.style.gap = "15px";
  for (let i = 0; i < 5; i++) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = "Нажми меня";
    wrapper.append(button);
  }
  const buttons = document.querySelectorAll('.button');
  const counter = document.createElement("div");
  let counterCounter = 0;
  counter.classList.add("counter");
  counter.innerHTML = counterCounter;
  document.body.append(counter);
  wrapper.addEventListener('click' , function(event) {
    if(event.target.classList.contains('button')) {
        counterCounter++;
        counter.innerHTML = counterCounter;
        for (but of buttons) {
            but.classList.remove('yellow');
            but.textContent = "Нажми меня";
        }
        event.target.classList.add('yellow');
        event.target.textContent = "Нажата";
    }
  })
});
