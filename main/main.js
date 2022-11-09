let btn = document.getElementsByClassName("btn")
let clear = document.getElementById("_clear")
let textArea = document.getElementById("_textarea")

const arroFcals = [
  "(", ")", "%", "AC", "7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "0", ".", "=", "+"
]


for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {

    console.log(btn[i].textContent)
    console.log(ggb)
    textArea.textContent += btn[i].textContent
    document.getElementById("_textarea").style.color = "black";
    textArea.textContent = truncateText('p', 31)
  });
}


//All Clear
clear.addEventListener("click", function(){

  textArea.textContent = ""
  document.getElementById("_textarea").style.color = "rgba(163, 168, 114, 0.5)";
})



//to stop characters more than 31
function truncateText(p, maxLength) {
  var element = document.querySelector("#_textarea"),
      truncated = element.innerText;

  if (truncated.length > maxLength) {
      truncated = truncated.substring(0,maxLength);
  }
  return truncated;
}



let gga = document.getElementById("test")
let ggb = gga.getAttribute("value")




