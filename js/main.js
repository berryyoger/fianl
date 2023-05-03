const signInBtn = document.querySelector(".signInBtn")
const signInPage = 'http://127.0.0.1:5500/signUp.html'
const localStrgList = document.querySelector(".localStrgList")

const getLocalstrg = document.querySelector(".getLocalStrg")

const toSignIn = () =>{
    location.href=signInPage
    alert("test")
}

const getUserData = () =>{
    const span = document.createElement("span")
    span.innerText = localStorage
    localStrgList.appendChild(span)
    console.log(localStorage)
}

getLocalstrg.addEventListener("click", getUserData)
signInBtn.addEventListener("click", toSignIn)