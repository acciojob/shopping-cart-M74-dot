
        // Get the necessary elements
        const addButton = document.getElementById('add');
        const itemNameInput = document.getElementById('item-name-input');
        const itemQtyInput = document.getElementById('item-qty-input');
        const itemPriceInput = document.getElementById('item-price-input');
        const cartItems = document.getElementById('cart-items');
        const totalElement = document.getElementById('total');

        // Initialize grand total
        let grandTotal = 0;

        // Add event listener for the "Add" button
        addButton.addEventListener('click', function() {
            const itemName = itemNameInput.value.trim();
            const itemQty = parseInt(itemQtyInput.value.trim(), 10);
            const itemPrice = parseFloat(itemPriceInput.value.trim());

            // Validate input
            if (itemName === '' || isNaN(itemQty) || itemQty <= 0 || isNaN(itemPrice) || itemPrice <= 0) {
                alert('Please enter a valid item name, quantity, and price.');
                return;
            }

            // Calculate total price for the item (quantity * price)
            const totalItemPrice = itemQty * itemPrice;

            // Create a new row
            const newRow = document.createElement('tr');

            // Create and append cells to the row
            const nameCell = document.createElement('td');
            nameCell.textContent = itemName;
            newRow.appendChild(nameCell);

            const qtyCell = document.createElement('td');
            qtyCell.textContent = itemQty;
            newRow.appendChild(qtyCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = `$${totalItemPrice.toFixed(2)}`;
            newRow.appendChild(priceCell);

            // Append the new row to the table
            cartItems.insertBefore(newRow, cartItems.lastElementChild);

            // Update the grand total
            grandTotal += totalItemPrice;
            totalElement.innerText = grandTotal.toFixed(2);

            // Clear the input fields
            itemNameInput.value = '';
            itemQtyInput.value = '';
            itemPriceInput.value = '';
        });
