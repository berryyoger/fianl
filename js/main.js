const loginBtn = document.querySelector(".loginBtn")
const loginPage = 'http://127.0.0.1:5500/login.html'
const localStrgList = document.querySelector(".localStrgList")

const getLocalstrg = document.querySelector(".getLocalStrg")

const toLogin = () =>{
    location.href=loginPage
}

const getUserData = () =>{
    const span = document.createElement("span")
    span.innerText = localStorage
    localStrgList.appendChild(span)
    console.log(localStorage)
}

getLocalstrg.addEventListener("click", getUserData)
loginBtn.addEventListener("click", toLogin)