const books = {
  book1: {
    title: "Book 1",
    availability: 5,
  },
  book2: {
    title: "Book 2",
    availability: 3,
  },
};

const cartItems = [];

function addToCart(bookId) {
  const book = books[bookId];

  if (book.availability > 0) {
    cartItems.push(book);
    book.availability--;

    updateAvailability(bookId);
    updateCart();
  } else {
    alert("Book is out of stock");
  }
}

function updateAvailability(bookId) {
  const availabilitySpan = document.getElementById(`${bookId}-availability`);
  availabilitySpan.textContent = `Availability: ${books[bookId].availability}`;
}

function updateCart() {
  const cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = "";

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    cartItemsList.appendChild(li);
  });
}

function checkout() {
  if (cartItems.length > 0) {
    alert("Books rented successfully!");
    cartItems.length = 0; // Empty the cart
    updateCart();
  } else {
    alert("Cart is empty");
  }
}
