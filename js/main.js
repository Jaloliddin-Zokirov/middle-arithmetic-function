let elForm = document.querySelector(".form")
let elInput = document.querySelector(".input")
let elRes = document.querySelector(".result")
let elBtn = document.querySelector(".button")
let arr = [];


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();


  arr.push(+elInput.value);
  var count = 0
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(elInput.value)) {
      count += arr[i]
    }
  }
  console.log(arr);
  elRes.textContent = (count / arr.length).toFixed(1)
  
  elInput.value = ""
})