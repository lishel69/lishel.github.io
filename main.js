var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.png') {
      myImage.setAttribute ('src','images/cat2.png');
    } else {
      myImage.setAttribute ('src','images/cat.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Че надо, ' + myName + '? Кусь?';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Че надо, ' + storedName + '? Кусь?';
  }
  myButton.onclick = function() {
    setUserName();
  }