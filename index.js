var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function addToCart(item) {
 // write your code here
 var itemName = item;
 var itemPrice = getRandomArbitrary(1,100);
 item = {};
 item[itemName] = itemPrice;
 cart.push(item);
 console.log(itemName + " has been added to your cart.");
 return cart;
}

function viewCart() {
  var cartList = ""
  if (cart.length === 0)
  {
    console.log("Your shopping cart is empty.");
  }
  else
  {
    var key = Object.keys(cart[0])[0];
    var value = cart[0][key];
    if (cart.length === 1)
    {
      console.log("In your cart, you have " + key + " at $" + value + ".");
    }
    else if (cart.length === 2)
    {
      var keyTwo = Object.keys(cart[1])[0];
      var valueTwo = cart[1][keyTwo];
      console.log("In your cart, you have " + key + " at $" + value + " and " + keyTwo + " at $" + valueTwo + ".");
    }
    else if (cart.length > 2){
      var keyArr = [];
      var valueArr = [];
      for (let i=0; i<cart.length; i++){
        keyArr.push(Object.keys(cart[i])[0]);
        valueArr.push(cart[i][keyArr[i]]);
        if (i === cart.length - 1){
          cartList = cartList + "and " + keyArr[i] + " at $" + valueArr[i] + ".";
        }
        else{
          cartList = cartList + keyArr[i] + " at $" + valueArr[i] + ", ";
        }
      }
      console.log("In your cart, you have " + cartList);
    }
  }
}
addToCart("apples");
addToCart("bananas");
addToCart("peanuts");
viewCart();


function total() {
  // write your code here
<<<<<<< HEAD
  var keyArr = [];
  var valueArr = [];
  var valueSum = 0;
  for (let i=0; i<cart.length; i++){
    keyArr.push(Object.keys(cart[i])[0]);
    valueArr.push(cart[i][keyArr[i]]);
    var valueSum = valueSum + valueArr[i];
  }
  return valueSum;
=======
  for (let i=0; i<cart.length; i++){

  }
>>>>>>> ebc8def23cb209e4cc938611c31b7d6c179b5821
}

function removeFromCart(item) {
  // write your code here
<<<<<<< HEAD
  for (let i=0; i<cart.length; i++){
    if (item === Object.keys(cart[i])[0]){
      cart.splice(i, 1);
      return;
    }
  }
  console.log("That item is not in your cart.");
=======

>>>>>>> ebc8def23cb209e4cc938611c31b7d6c179b5821
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else{
    var cost = total();
    console.log("Your total cost is $" + cost + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}

const arr = [1, 2, 3];

const eachExample = () => arr.forEach(e => e);

console.log(eachExample());
