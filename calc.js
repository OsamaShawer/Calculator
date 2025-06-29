let button = document.getElementsByClassName("button");
let display = document.querySelector("input");
let equal = document.getElementById("button-equal");
let clear = document.getElementById("button-clear");
// let reset = false;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (event) {
    display.value += button[i].innerHTML;
    clear.addEventListener("click", function () {
      display.value = "";
    });
  });
}

function calculate() {
  display.value = display.value.replaceAll("x", "*");
  display.value = display.value.replaceAll("÷", "/");
  console.log(display.value);
  display.value = eval(display.value);
  // if (reset === true) {
  //   for (let j = 0; j < button.length; j++) {
  //     button[j].addEventListener("click", function () {
  //       display.value = "";
  //       reset = false;
  //       display.value += button[j].innerHTML;
  //     });
  //   }
  // }
}
equal.addEventListener("click", function (event) {
  calculate();
  // reset = true;
});
