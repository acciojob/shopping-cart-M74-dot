// Get the necessary elements
const addButton = document.getElementById('add');
const itemNameInput = document.getElementById('item-name-input');
const itemPriceInput = document.getElementById('item-price-input');
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

// Initialize grand total
let grandTotal = 0;

// Add event listener for the "Add" button
addButton.addEventListener('click', function() {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value.trim());

    // Validate input
    if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Please enter a valid item name and price.');
        return;
    }

    // Create a new row
    const newRow = document.createElement('tr');

    // Create and append cells to the row
    const nameCell = document.createElement('td');
    nameCell.textContent = itemName;
    newRow.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = `$${itemPrice.toFixed(2)}`;
    newRow.appendChild(priceCell);

    // Append the new row to the table
    cartItems.appendChild(newRow);

    // Update the grand total
    grandTotal += itemPrice;
    totalElement.innerText = grandTotal.toFixed(2);

    // Clear the input fields
    itemNameInput.value = '';
    itemPriceInput.value = '';
});
