//your code here
const addButton = document.querySelector('#add');
const nameInput = document.querySelector('#item-name-input');
const priceInput = document.querySelector('#item-qty-input');
const cartItems = document.querySelector('#cart_items');
const total = document.querySelector('#total');
let gransTotal =0;
addButton.innerHTML = "Add";
addButton.addEventListener('click',function(){
	const itemName = nameInput.value.trim();
	const itemPrice = parseFloat(priceInput.value.trim());

	if(itemName === '' || isNaN(itemPrice) || itemPrice <= 0 ){
		alert('Please enter a valid item name and price.');
		return;
	}

	const newRow = document.createElement('tr');
	newRow.innerHTML = `<td>${itemName}</td><td>$${itemPrice.toFixed(2)}</td>`;
	cartItems.insertBefor(newRow,cartItems.lastElementChild);

	gransTotal+=itemPrice;
	total.innerText = gransTotal.toFixed(2);

	nameInput.value='';
	priceInput.value='';
});















