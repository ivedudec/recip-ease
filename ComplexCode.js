/*
Filename: ComplexCode.js
Content: A complex code example demonstrating an e-commerce application with user registration, product listing, cart management, and checkout functionality.
Note: This code is only for demonstration purposes and may not have complete error handling or security measures.
*/

// User Class
class User {
  constructor(name, email, address) {
    this.name = name;
    this.email = email;
    this.address = address;
  }

  // Method to register a user
  register() {
    console.log(`User registered: ${this.name}`);
  }
}

// Product Class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Cart Class
class Cart {
  constructor(user) {
    this.user = user;
    this.items = [];
  }

  // Method to add a product to the cart
  addToCart(product) {
    this.items.push(product);
    console.log(`${product.name} added to the cart.`);
  }

  // Method to remove a product from the cart
  removeFromCart(product) {
    const index = this.items.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`${product.name} removed from the cart.`);
    } else {
      console.log(`${product.name} not found in the cart.`);
    }
  }

  // Method to calculate total cart value
  calculateTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  // Method to checkout the cart
  checkout() {
    const total = this.calculateTotal();
    console.log(`Checking out... Total amount: $${total}.`);
    console.log(`Shipping address: ${this.user.address}`);
    console.log(`${this.user.name}, thank you for your purchase!`);
  }

  // Method to clear the cart
  clearCart() {
    this.items = [];
    console.log('Cart cleared.');
  }
}

// Example usage:
const user1 = new User('John Doe', 'johndoe@email.com', '123 Main St');
user1.register();

const product1 = new Product(1, 'Product 1', 10);
const product2 = new Product(2, 'Product 2', 20);

const cart = new Cart(user1);
cart.addToCart(product1);
cart.addToCart(product2);

cart.removeFromCart(product1);
console.log(`Cart total: $${cart.calculateTotal()}`);

cart.checkout();
cart.clearCart();

/*
Expected Output:

User registered: John Doe
Product 1 added to the cart.
Product 2 added to the cart.
Product 1 removed from the cart.
Cart total: $20
Checking out... Total amount: $20.
Shipping address: 123 Main St
John Doe, thank you for your purchase!
Cart cleared.
*/