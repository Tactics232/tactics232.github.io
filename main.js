const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (
    mySrc ===
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXphdnZxbGc3dHpidGg3cDUxNjR0NmU0aHZvb2N4cnc5czdxOTN4OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LKqotXWsCnTIN84d5C/giphy.gif"
  ) {
    myImage.setAttribute(
      "src",
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmIyYXgyd3kzNHlsNW8xMHF6Ymx4dmt3cjUyN2YwemphemxzNm04dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lsJCkIKV6AT28/giphy.gif",
    );
  } else {
    myImage.setAttribute(
      "src",
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXphdnZxbGc3dHpidGg3cDUxNjR0NmU0aHZvb2N4cnc5czdxOTN4OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LKqotXWsCnTIN84d5C/giphy.gif",
    );
  }
});

// Button der uns einen Username eingeben lässt und dann mit local Storage.getItem checkt ob schon vorhanden.
// Wenn noch nicht vorhanden wird er hinzugefügt, wenn vorhanden der alte Name genutzt.
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Yo was geht??, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Yo was geht??, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
