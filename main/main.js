let btn = document.getElementsByClassName("btn")      //arry of class
let clear = document.getElementById("_clear")         //All Clear
var textArea = document.getElementById("_textarea")   //textarea  
let backSpace = document.getElementById("backspace")
let solveIt = document.getElementById("solve")
let bckAfter = ""
var solveItArea = ""



for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    

    textArea.textContent += btn[i].textContent
    solveItArea += btn[i].value
    document.getElementById("_textarea").style.color = "white"
    textArea.textContent = truncateText('p', 20)

  });
}


//All Clear
clear.addEventListener("click", function(){
  textArea.textContent = ""
  solveItArea = ""
  document.getElementById("_textarea").style.color = "rgba(128, 128, 128, 0.5)";
})

// Back Space
backSpace.addEventListener("click", function(){
  textArea.textContent = textArea.textContent.substring(0, textArea.textContent.length -1)

  solveItArea = solveItArea.substring(0, textArea.textContent.length -1)
  if(textArea.textContent == "")
    document.getElementById("_textarea").style.color = "rgba(128, 128, 128, 0.5)";
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


//solve it
solveIt.addEventListener("click", function(){

  textArea.textContent = eval(solveItArea)
  console.log(eval(solveItArea))
  
})









