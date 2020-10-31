//javascript for adding functionality to the shopping cart

//get the color
function update(event) {
    console.log("hi ", event.target.value);
    const color = {"color": event.target.value};
    const jsonColor = JSON.stringify(color);
    localStorage.setItem("yourColor", jsonColor)
}

//get the material
function updatetwo(event) {
    console.log("hi ", event.target.alt);
    const material = {"material": event.target.class};
    const jsonMaterial = JSON.stringify(material);
    localStorage.setItem("yourMaterial", jsonMaterial)    
}


//add to cart - just update cart number here?
function saveItem() {
   const fullCart = localStorage.getItem("yourColor", "yourMaterial")
     if (fullCart === null) {
         return;
  }
    else {
        const savedCart = JSON.parse(fullCart);
        console.log("saved")
}

const cartContainer = document.getElementById("cart-items");

function fullCart(parent, color, material) {
    let divContainer = document.createElement("div");
    divContainer.className = "cart";
    parent.appendChild(divContainer);

    let divColor = document.createElement("p");
    divColor.innerHTML = color;
    divContainer.appendChild(divColor);

    let divMaterial = document.createElement("p");
    divMaterial.innerHTML = material;
    divContainer.appendChild(divMaterial);

}

//return all the data when the cart is clicked, need to add this function to the cart icon
function onCartLoad() {
  const yourColor = localStorage.getItem("yourColor");
  const yourMaterial = localStorage.getItem("yourMaterial");
  if (yourColor === null || yourMaterial===null) {
    return;
  }
  else {
    const savedColor = JSON.parse(yourColor);
    fullCart(cartContainer, savedColor.color, savedMaterial.material)
  }
}




function RemoveItem() {
var name=document.forms.ShoppingList.name.value;
document.forms.ShoppingList.data.value=localStorage.removeItem(name);
doShowAll();
}


//function to save information on the item that was selected
function cartItems(name, quantity, color, stuffing) {
	let divContainer = document.createElement("div");

	addButton.onclick = function () {
    	const details = {"name":name, "quantity":quantity, "color":color, "stuffing": stuffing};
    	const jsonDetails = JSON.stringify(details);
    	localStorage.setItem("myDetails", jsonDetails);
	}

  divContainer.appendChild(addButton);

  return divContainer;
} 


function onLoad() {
  const myDetails = localStorage.getItem("myDetails");
  if (myDetails === null) {
    return;
  }
  else {
    const savedDetails = JSON.parse(myDetails);
    cartItems(savedDetails.name, savedDetails.quantity, savedDetails.color, savedDetails.stuffing);
  }
}