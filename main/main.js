let btn = document.getElementsByClassName("btn")
let clear = document.getElementById("_clear")
let textArea = document.getElementById("_textarea")

const arroFcals = [
  "(", ")", "%", "AC", "7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "0", ".", "=", "+"
]


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {

    console.log(btn[i].textContent)
    textArea.textContent += btn[i].textContent
    document.getElementById("_textarea").style.color = "black";
  });
}



clear.addEventListener("click", function(){

  textArea.textContent = ""
  document.getElementById("_textarea").style.color = "rgba(163, 168, 114, 0.5)";
})




