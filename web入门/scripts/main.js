
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/google.jpeg') {
      myImage.setAttribute('src', 'images/google2.jpeg');
    } else {
      myImage.setAttribute('src', 'images/google.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '欢迎google的其中一个优质用户' + myName + '欢迎您';
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎google的其中一名优质用户' + storedName ;
  }

  myButton.onclick = function() {
    setUserName();
 }