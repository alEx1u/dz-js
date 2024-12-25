document.addEventListener("DOMContentLoaded", function () {
  const newYear = new Date("2024-12-31 21:00");
  //вообще не понимаю почему так делаю(просто цифры другие совсем)
  const boxes = document.querySelectorAll(".box");
  const interval = setInterval(() => {
    let date = new Intl.DateTimeFormat("ru-Ru", {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).formatToParts(newYear - new Date()); // Убрано +100

    boxes[0].innerHTML =
      String(parseInt(date[2].value) - 1).length == 1
        ? "0" + String(parseInt(date[2].value) - 1)
        : String(parseInt(date[2].value) - 1);
    boxes[1].innerHTML =
      String(parseInt(date[0].value) - 1).length == 1
        ? "0" + String(parseInt(date[0].value) - 1)
        : String(parseInt(date[0].value) - 1);
    boxes[2].innerHTML =
      String(date[4].value).length == 1
        ? "0" + String(date[4].value)
        : String(date[4].value);
    boxes[3].innerHTML =
      date[6].value.length == 1 ? "0" + date[6].value : date[6].value;
    boxes[4].innerHTML =
      date[8].value.length == 1 ? "0" + date[8].value : date[8].value;
  }, 1000);
  if (new Date().getDate() == 1 && new Date().getMonth() == 0) {
    clearInterval(interval);
  }
});
