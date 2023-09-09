const loginForm = document.querySelector('#login_form')
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector('#greeting')

const USERNAME_KEY = 'userName';

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본동작을 막는 것 (submit의 새로고침을 막음)
    localStorage.setItem('USERNAME_KEY', loginInput.value)
    loginForm.classList.add('hidden');
    paintGreetings();
}

function paintGreetings() {
    const userName = localStorage.getItem('USERNAME_KEY');
    greeting.classList.remove('hidden');
    greeting.innerText = `Hello ${userName}`;
}

const savedUserName = localStorage.getItem('USERNAME_KEY');

if (savedUserName === null) {
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings();
}


// const link = document.querySelector('a');

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.log(event);
//     alert('clicked!');
// }

// link.addEventListener('click', handleLinkClick);


// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//     console.log("Please wrrite a real positive number");
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >=18 && age <=50) {
//     console.log("You can drink");
// } else if (age === 100) {
//     console.log("Wow you are wise");
// } else if (age > 80) {
//     console.log("You can do whatever you want");
// } else {
//     console.log("You can't drink");
// }

// const title = document.getElementById("title")

// title.innerText = "Got you!"

// console.log(title.id);
// console.log(title.className);

// querySelector 는 css 방식으로 태그 호출이 가능함
// const h1 = document.querySelector(".hello h1")

// function handleClick() {
//     h1.style.color = "blue";
// }

// function handleMouseEnter() {
//     h1.innerText = "Mouse here!"
// }

// function handleMouseleave() {
//     h1.innerText = "Mouse leave!"
// }

// function windowResize() {
//     document.body.style.backgroundColor = "yellow";
// }

// function windowCopy() {
//     alert("copy complete!");
// }

//h1.addEventListener("click", handleClick);
//=
// h1.onclick = handleClick;
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseleave);

// window.addEventListener("resize", windowResize);
// window.addEventListener("copy", windowCopy);

// const h1 = document.querySelector(".hello h1")

// function handleClick() {
    // const clickedClass = "clicked"
    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleClick);