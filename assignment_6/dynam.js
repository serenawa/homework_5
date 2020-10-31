//javascript for adding functionality to the shopping cart


//sliding cart

var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
var slider = document.getElementsByClassName('slider-parent')[0];

sliderTrigger.addEventListener("click", function(el){
	if(slider.classList.contains("active")) {
		slider.classList.remove("active"); 
	}
	else {
		slider.classList.add("active"); 
			}
	});

//add to cart

function update() {
    console.log("hi" + this.value)
    const color = {"color": this.value};
    const jsonColor = JSON.stringify(color);
    localStorage.setItem("yourColor", jsonColor)
    return this.value
}

//return all the data when the cart is clicked, need to add this function to the cart icon

function onCartLoad() {
  const yourColor = localStorage.getItem("youColor");
  if (yourColor === null) {
    return;
  }
  else {
    const savedColor = JSON.parse(yourColor);
    return savedColor.color
  }
}

function updatetwo() {
    return this.value
}

function SaveItem() {
    return this.value
}

//Change an existing key-value in HTML5 storage.
function ModifyItem() {
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;
    //check if name1 is already exists

//Check if key exists.
            if (localStorage.getItem(name1) !=null)
            {
              //update
              localStorage.setItem(name1,data1);
              document.forms.ShoppingList.data.value = localStorage.getItem(name1);
            }

    doShowAll();
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