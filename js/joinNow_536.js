const toLoginBtn = document.querySelector(".toLoginBtn")
const loginPage = 'http://127.0.0.1:5500/signIn_536.html' //페이지 이동

const email = document.getElementById("email")
const id = document.getElementById("id")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword") 
const tel = document.getElementById("tel") 
const address = document.getElementById("address") 
const name = document.getElementById("name") 

//values


const createAccountBtn = document.querySelector(".createAccountBtn") //crtBtn

const toLogin = () =>{
    location.href=loginPage
} //페이지 이동 함수




// const savedToDos = localStorage.getItem(USERS_KEY);

const getValue = () =>{
    const account = {
        name : name.value,
        email: email.value,
        id: id.value,
        password: password.value,
        confirmPassword: false,
        tel: tel.value,
        address: address.value
    }
        if(password.value === confirmPassword.value) {
                account.confirmPassword = true
                let createPermission = confirm("Create Account?")
                    if(createPermission){
                        console.log(createPermission)
                        console.log(account)

                        const USERS_KEY = account.id;
                        let users = [];
                        const saveUsers = () =>{
                            localStorage.setItem(USERS_KEY, JSON.stringify(users))
                        }

                        users.push(account);
                        saveUsers();
                        alert("succesfully created!")
                    }
                    else{
                        alert("Cancled Creating Account.")
                    }
            }
            else{
                alert("check your Password!")
            }
} //getValue & signUp % 로컬스토리지 저장

toLoginBtn.addEventListener("click", toLogin)
createAccountBtn.addEventListener("click", getValue)