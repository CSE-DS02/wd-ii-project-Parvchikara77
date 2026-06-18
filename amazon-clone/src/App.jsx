import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "iPhone 16",
      price: 7999,
      category: "Mobile",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 2,
      name: "Samsung S25",
      price: 6999,
      category: "Mobile",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
    },
    {
      id: 3,
      name: "Apple Watch",
      price: 2499,
      category: "Watch",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    },
    {
      id: 4,
      name: "Noise Smart Watch",
      price: 499,
      category: "Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 5,
      name: "Boat Earbuds",
      price: 199,
      category: "Earbuds",
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500",
    },
    {
      id: 6,
      name: "OnePlus Buds",
      price: 349,
      category: "Earbuds",
      image:
        "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500",
    },
    {
      id: 7,
      name: "65W Fast Charger",
      price: 99,
      category: "Charger",
      image:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
    },
    {
      id: 8,
      name: "Gaming Laptop",
      price: 7499,
      category: "Laptop",
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <nav className="navbar">
        <h2>⚡ TechHub</h2>

        <input
          className="search"
          type="text"
          placeholder="Search gadgets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cart">
          🛒 Cart: {cart}
          <button className="clear-btn" onClick={() => setCart(0)}>
            Clear
          </button>
        </div>
      </nav>

      <div className="tabs">
        <span>Home</span>
        <span>Products</span>
        <span>Services</span>
        <span>Help</span>
        <span>Contact</span>
      </div>

      <div className="banner">
        <h1>Welcome to TechHub</h1>
        <p>Latest Technology at Best Prices</p>
      </div>

      <div className="products">
        {filteredProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <h4>${item.price.toLocaleString()}</h4>

            <button
              className="add-btn"
              onClick={() => setCart((prev) => prev + 1)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="info">
        <div className="box">
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div className="box">
          <h2>1000+</h2>
          <p>Customers</p>
        </div>

        <div className="box">
          <h2>4.8★</h2>
          <p>Rating</p>
        </div>
      </div>

      <footer>
        <h3>TechHub Store</h3>
      </footer>
    </div>
  );
}

export default App;