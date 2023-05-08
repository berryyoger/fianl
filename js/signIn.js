const toJoinNowBtn = document.querySelector(".toJoinNowBtn")
const joinNowPage = 'http://127.0.0.1:5500/joinNow.html'
const mainPage = 'http://127.0.0.1:5500/main.html'

const id = document.querySelector(".id")
const password = document.querySelector(".password")

const loginBtn = document.querySelector(".loginBtn")

const toJoinNow = () =>{
    location.href=joinNowPage
}

const login = () =>{
    const tryUser = {
        id : id.value,
        password : password.value
    }
    const checkPassword = (tryPassword) =>{
        if(tryPassword==tryUser.password){
            alert("login!")
            location.href=mainPage
        }
        else{
            alert("Id or Password is wrong!")
        }
    }
    const isId = localStorage.getItem(tryUser.id)
    if(isId==null){
        alert("Id isn't exist!")
    }
    else{
        const tryLogin = JSON.parse(isId)
        checkPassword(tryLogin[0].password)
    }
}

toJoinNowBtn.addEventListener("click", toJoinNow)
loginBtn.addEventListener("click", login)