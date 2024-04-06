let userInfo= document.querySelector("#user-info")
let userData=document.querySelector("#user")
let links=document.querySelector("#links")
if (localStorage.getItem("username")) {
 links.remove() 
userInfo.style.display="flex"
// userInfo.style.color="white"

  
userData.innerHTML="hello" +" "+localStorage.getItem("username") 
}
let logOut = document.querySelector("#logout")
logOut.addEventListener("click", function(){
localStorage.clear()
setTimeout(() => {
    window.location="login.html"
}, 1500);    
}) 


/***************************************************************************** */
let allProducts=document.querySelector(".products")
let products=[
    {
     id:1,
     title:"Iphone 14",
     color:"red",
     imageUrl:"images/apple-iphone-14-pakistan-priceoye-3j7db.jpg"   
    },
    {
        id:2,
        title:"OIP mobile",
        color:"red",
        imageUrl:"images/OIP.jpeg"
        },{
            id:3,
            title:"Real me",
            color:"black",
            imageUrl:"images/R.jpeg"    
        },
        {
            id:4,
        title:"Iphone 13",
        color:"black",
        imageUrl:"images/picture.1409852059.jpg"
        }
]
function drawItems() {
let pro=products.map((item) => {
return `<div class="product-item">
<img src=${item.imageUrl} alt="">
<div class="product-item-desc">
    <h2>${item.title}</h2>
    <p>this mobile is afantastic but it is so expensive</p>
    <span>${item.color}</span>
</div>
<div class="product-item-action">
    <button class="addtothecard" onClick = "addToCard(${item.id})" >Add To Card</button>

    <i class="far  fa-heart fav"></i>
</div>
</div>
`    
}) 
allProducts.innerHTML= pro   
}
drawItems()
let badge=document.querySelector(".badge")
let cartsProductsDiv=document.querySelector(".carts_products div")
// let addedItem=[]
let addedItem=localStorage.getItem("productInCart")? JSON.parse(localStorage.getItem("productInCart")):[]
if (addedItem) {
addedItem.map( item => {
    cartsProductsDiv.innerHTML += `<p>${item.title}</p>`;
})  
    badge.style.display="block"
    badge.innerHTML = addedItem.length 
  
}

if(localStorage.getItem("username")){
    // window.location="cartsproducts.html"
    function addToCard(id) {

        let choosenItem =products.find((item) => item.id === id );
    
     cartsProductsDiv.innerHTML += `<p>${choosenItem.title}</p>`;
     addedItem=[...addedItem,choosenItem]
     localStorage.setItem("productInCart" , JSON.stringify(addedItem) )


     let cartsProductsLength=document.querySelectorAll(".carts_products div p")

     badge.style.display="block"
     badge.innerHTML = cartsProductsLength.length 
    }

}else{
    window.location="login.html"
}


/**************************************************************** */
let shoppingCartIcon = document.querySelector(".shopping-cart")
let cartsProducts=document.querySelector(".carts_products")

shoppingCartIcon.addEventListener("click", opencart)
function opencart() {
if(cartsProductsDiv.innerHTML != "") {
if(cartsProducts.style.display == "block"){
 cartsProducts.style.display ="none"   
} else{
    cartsProducts.style.display ="block"
}   
}   
}