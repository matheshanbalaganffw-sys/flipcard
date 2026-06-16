

import { useState } from "react";



const products = [
  { id: 1, name: "Headphone", price: 999, category: "home", 
image: "https://pngimg.com/uploads/headphones/headphones_PNG101982.png"
},

  { id: 2, name: "Shoes", price: 1499, category: "shoes",image: "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png" },
  { id: 3, name: "Shoes", price: 1999, category: "shoes",image: "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5824.png" },

  { id: 4, name: "Watch", price: 799, category: "watch", image: "https://pngimg.com/uploads/watches/watches_PNG9880.png" },
  { id: 5, name: "Watch", price: 999, category: "watch", image: "https://pngimg.com/uploads/watches/watches_PNG9873.png"},

  { id: 6, name: "Mobile", price: 12000, category: "mobile",    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg"  },
  { id: 7, name: "Mobile", price: 15000, category: "mobile", image: "https://cdn-icons-png.flaticon.com/512/15/15874.png" },

  { id: 8, name: "Laptop", price: 55000, category: "home", image: "https://pngimg.com/uploads/laptop/laptop_PNG101814.png" },
  { id: 9, name: "Bag", price: 999, category: "home", image: "https://pngimg.com/uploads/backpack/backpack_PNG6354.png" },

  { id: 10, name: "T-Shirt", price: 499, category: "home",image: "https://pngimg.com/uploads/tshirt/tshirt_PNG5447.png"},





  { id: 13, name: "Keyboard", price: 899, category: "home",image: "https://pngimg.com/uploads/keyboard/keyboard_PNG101842.png"  },

  { id: 14, name: "Mouse", price: 499, category: "home",    image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SL1500_.jpg" },


];

function App() {

    const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const [filter, setFilter] = useState("home");

  const filtered =
    filter === "home"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="myshop"style={{ textAlign: "center" }}>
      <h1 className="title">My Shop 🛍️</h1>
       <h3 style={{ textAlign: "center" }}>Cart: {cart.length}</h3>

      {/* NAVBAR */}
      <div className="nav">
        <button onClick={() => setFilter("home")}>Home</button>
        <button onClick={() => setFilter("mobile")}>Mobile</button>
        <button onClick={() => setFilter("shoes")}>Shoes</button>
        <button onClick={() => setFilter("watch")}>Watch</button>
      </div>

      {/* PRODUCTS */}
      <div className="container">
        {filtered.map((p) => (
          <div className="card" key={p.id}>
           <img src={p.image} alt={p.name} width="50px" />
            <h3>{p.name}</h3>
            <p className="price">₹{p.price}</p>
       <button onClick={() => addToCart(p)}> 🛒 Add to Cart</button>
          </div>
        ))}
      
      
      
      </div>
      
      
            
    </div>

    
  );
}


export default App;

