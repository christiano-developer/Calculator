let btn = document.getElementsByClassName("btn")      //arry of class
let clear = document.getElementById("_clear")         //All Clear
var textArea = document.getElementById("_textarea")   //textarea  
let backSpace = document.getElementById("backspace")

let bckAfter = ""



for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    

    textArea.textContent += btn[i].textContent
    
    document.getElementById("_textarea").style.color = "black"
    textArea.textContent = truncateText('p', 30)

  });
}


//All Clear
clear.addEventListener("click", function(){
  textArea.textContent = ""
  document.getElementById("_textarea").style.color = "rgba(163, 168, 114, 0.5)";
})

// Back Space

backSpace.addEventListener("click", function(){
  console.log(textArea.textContent.length)
  console.log(textArea.textContent)

  textArea.textContent = textArea.textContent.substring(0, textArea.textContent.length -1)
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










