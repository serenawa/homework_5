//javascript for adding functionality to the shopping cart


//cart number counter
var itemCount = 0;


//get the item
function itemSave(event){
    console.log("hi", event.target.alt);
    localStorage.clear();
    const item = {"item": event.target.alt};
    const jsonItem = JSON.stringify(item);
    localStorage.setItem("yourItem", jsonItem);
}

//get the color
function update(event) {
    console.log("hi ", event.target.value);
    const color = {"color": event.target.value};
    const jsonColor = JSON.stringify(color);
    localStorage.setItem("yourColor", jsonColor);
}

//get the material
function updatetwo(event) {
    console.log("hi ", event.target.alt);
    const material = {"material": event.target.alt};
    const jsonMaterial = JSON.stringify(material);
    localStorage.setItem("yourMaterial", jsonMaterial); 
}

//creating array to store the cart items to be used later
let cartArray = [];

//add to cart - just update cart number here and later add item to div
function saveItem() {
   console.log("saved");

   const yourColor = localStorage.getItem("yourColor");
   const yourMaterial = localStorage.getItem("yourMaterial");
   const yourItem = localStorage.getItem("yourItem");

   console.log(yourColor, yourMaterial)

   if (yourColor===null || yourMaterial===null || yourItem===null) {
    alert("You must pick a color AND material!");
  }
  else {
    itemCount = itemCount + 1;

    const count = JSON.stringify(itemCount);
    localStorage.setItem("yourCount", count);
    
    document.getElementById("quant").style.display = "inline";
    document.getElementById("quant").innerText = localStorage.getItem("yourCount");
    //document.getElementById("quant").innerText = itemCount;
    console.log(itemCount);

    cartArray.push(yourColor, yourMaterial, yourItem);
    const json = JSON.stringify(cartArray);
    localStorage.setItem("yourCart", json);

    console.log(cartArray);
    }
}

const cartContainer = document.getElementById("cart-items");

function fullCart(parent, item, color, material) {
    let divContainer = document.createElement("div");
    //divContainer.className = "cart";
    parent.appendChild(divContainer);

    let divItem = document.createElement("p");
    divItem.innerHTML = "Item: " + item;
    divContainer.appendChild(divItem);

    let divColor = document.createElement("p");
    divColor.innerHTML = "Color: " + color;
    divContainer.appendChild(divColor);

    let divMaterial = document.createElement("p");
    divMaterial.innerHTML = "Material: " + material;
    divContainer.appendChild(divMaterial);

    cartArray.push(divItem, divColor, divMaterial);

    return divContainer;
}

//return all the data when the cart is clicked
function onCartLoad() {
  const yourColor = localStorage.getItem("yourColor");
  const yourMaterial = localStorage.getItem("yourMaterial");
  const yourItem = localStorage.getItem("yourItem");

  const yourCart = localStorage.getItem("yourCart");
  //if (yourColor===null || yourMaterial===null || yourItem===null) {
  if (yourCart===null) {
    return;
  }
  else {
    const savedColor = JSON.parse(yourColor);
    const savedMaterial = JSON.parse(yourMaterial);
    const savedItem = JSON.parse(yourItem);

    const savedCart = JSON.parse(yourCart);

    savedCart.forEach((item) => {
      fullCart(cartContainer, savedItem.item, savedColor.color, savedMaterial.material);
      cartArray.push(savedItem.item, savedColor.color, savedMaterial.material);
    });

    ///const savedCart = JSON.parse(yourColor, yourMaterial, yourItem)

    //localStorage.setItem("yourCount", count);

    //document.getElementById("cartquant").innerText = localStorage.getItem("yourCount");

    document.getElementById("cartquant").innerText = localStorage.getItem("yourCount");


    console.log("loaded", savedColor, savedMaterial, itemCount, cartArray);

    //fullCart(cartContainer, savedItem.item, savedColor.color, savedMaterial.material);
    //cartArray.push(savedColor, savedMaterial, savedItem);
  }
}

function del() {
  var oldCount = localStorage.getItem("yourCount");
  var newCount = oldCount - 1;
  if (newCount===0) {
    return;
  }
  else {
  localStorage.setItem("yourCount", newCount);
  document.getElementById("cartquant").innerText = localStorage.getItem("yourCount");
  }
}

