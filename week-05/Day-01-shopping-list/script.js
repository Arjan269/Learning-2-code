console.log(`Jarvis Initiate Connection`);

// ========== Selecting Elements ========== //
const itemInputEl = document.getElementById("item");
const quantityInputEl = document.getElementById("quantity");
const shoppingListDisplayEl = document.getElementById("shopping-list-display");

// ====== Data Structure to store the list ====== //
const shoppingList = [];


// ======== Functions ========= //


// ===================================================== //
//                  addItem Function
// ===================================================== //
function addItem(event) {
    event.preventDefault();

    const itemToAdd = {
        item: itemInputEl.value,
        quantity: quantityInputEl.value
    }

    // Add the new object to the list
    shoppingList.push(itemToAdd);
    console.log("ShoppingList:", shoppingList);

    // Clear up the input field
    itemInputEl.value = "";
    quantityInputEl.value = "";

    // Call the function that will show the items
    displayListItems();
}


// ========================== //
//  displayListItems Function           
// ========================== //
function displayListItems() {

    shoppingListDisplayEl.innerHTML = "";

    for (let i = 0; i < shoppingList.length; i++) {
        shoppingListDisplayEl.innerHTML += 
        `<p class="shopping-item">${shoppingList[i].item} x ${shoppingList[i].quantity}
            <span onclick="deleteItem(${i})">&#10062</span>
        </p>`
    }
}


// ========================== //
//     deleteItem Function           
// ========================== //
function deleteItem(itemToDelete) {
    // console.log(itemToDelete);
    shoppingList.splice(itemToDelete, 1);
    // console.log("after splicing", shoppingList);

    // Call the function to display the new list
    displayListItems();
}

// ==================== //
//    Shopping Basket   
// ==================== //
// selectinng elements
const shoppingBasketInputEl = document.getElementById("shopping-basket");
const itemStillToBuyDisplayEl = document.getElementById("item-still-to-buy-display");

// function
function addToBasket(event) {

    const basketArray = shoppingBasketInputEl.value.toLowerCase().split(/,\s*/);
    

    const itemsStillToBuy = shoppingList.filter((groceryItem) => {
        return !basketArray.includes(groceryItem.item);
    })
    console.log("basket array", basketArray)
    console.log("itemsStillToBuy Array", itemsStillToBuy);

    // clearing the list
    itemStillToBuyDisplayEl.innerHTML = "";

    if (itemsStillToBuy.length === 0) {
        itemStillToBuyDisplayEl.innerHTML = "<p>Congras! You are done shopping!</p>"
    } else {
        itemStillToBuyDisplayEl.innerHTML = "<p>Congras! You are done shopping!</p>"
         itemsStillToBuy.gorEach(function (groceryItem) {
        itemStillToBuyDisplayEl.innerHTML += `<p class="shopping-item>${groceryItem.item} x ${groceryItem.quantity}</p>`
    });
    }
}


// ======== Own Section ======== //
const form = document.getElementById('commentForm');
const commentsContainer = document.getElementById('comments');

// Load saved comments on page load
window.addEventListener('load', () => {
const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.forEach(comment => addCommentToPage(comment.name, comment.text));
});

// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

const name = document.getElementById('username').value.trim();
const text = document.getElementById('commentText').value.trim();

    if (name && text) {
      addCommentToPage(name, text);
      saveComment(name, text);
      form.reset();
    }
});

// Add comment visually to the page
function addCommentToPage(name, text) {
    const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
        commentsContainer.prepend(commentDiv);
}

// Save comment to localStorage
function saveComment(name, text) {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
        savedComments.push({ name, text });
        localStorage.setItem('comments', JSON.stringify(savedComments));
}