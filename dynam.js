//javascript for adding functionality to the shopping cart


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


//add to cart - just update cart number here?
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
    document.getElementById("quant").style.display = "inline";
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

    return divContainer;
}

//return all the data when the cart is clicked
function onCartLoad() {
  const yourColor = localStorage.getItem("yourColor");
  const yourMaterial = localStorage.getItem("yourMaterial");
  const yourItem = localStorage.getItem("yourItem");
  if (yourColor===null || yourMaterial===null || yourItem===null) {
    return;
  }
  else {
    const savedColor = JSON.parse(yourColor);
    const savedMaterial = JSON.parse(yourMaterial);
    const savedItem = JSON.parse(yourItem);
    console.log("loaded", savedColor, savedMaterial);
    fullCart(cartContainer, savedItem.item, savedColor.color, savedMaterial.material);
  }
}




function RemoveItem() {
var name=document.forms.ShoppingList.name.value;
document.forms.ShoppingList.data.value=localStorage.removeItem(name);
doShowAll();
}

