let username= document.querySelector("#username")
let password= document.querySelector("#password")
let loginBtn=document.querySelector("#sign-in")
let getUser= localStorage.getItem("username")
let getPassword=localStorage.getItem("password")

loginBtn.addEventListener("click",function (e) {
e.preventDefault()
if (username.value==="" || password.value==="") {
alert("please fill all fields")    
} else {
if (getUser && getUser.trim() === username.value && username.value.trim() && getPassword&&getPassword.trim()===password.value&& password.value.trim() ) {
setTimeout(() => {
window.location="index.html"    
}, 1500);    
}  
else{
alert("username or password is wrong")    
}  
}    
})
