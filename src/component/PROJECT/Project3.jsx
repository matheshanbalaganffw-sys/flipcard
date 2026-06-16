// import React from "react";
// // import "./CoffeeShop.css";

// const CoffeeShop = () => {
//   return (
//     <div className="app">

//       {/* Navbar */}
//       <nav className="navbar">
//         <h1 className="logo">☕ Brew Heaven</h1>

//         <ul className="nav-links">
//           <li>Home</li>
//           <li>Menu</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>

//         <button className="order-btn">Order Now</button>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-text">
//           <h2>Fresh Coffee Everyday</h2>

//           <p>
//             Enjoy premium quality coffee made with passion and love.
//           </p>

//           <button>Explore Menu</button>
//         </div>

//         <div className="hero-image">
//           <img
//             src="coffee-cup.png"
//             alt="coffee"
//           />
//         </div>
//       </section>

//       {/* Products */}
//       <section className="products">

//         <h1 className="title">Our Coffee Menu</h1>

//         <div className="product-grid">

//           {/* Card 1 */}
//           <div className="card">
//             <img
//               src="caramel-latte-with-chocolade-table.jpg"
//               alt="Latte"
//             />

//             <h2>Caramel Latte</h2>

//             <p>Hot creamy caramel coffee</p>

//             <h3>₹200</h3>

//             <button>Add to Cart</button>
//           </div>

//           {/* Card 2 */}
//           <div className="card">
//             <img
//               src="how_to_make_latte_art.jpeg"
//               alt="Espresso"
//             />

//             <h2>Espresso</h2>

//             <p>Strong and dark roasted coffee</p>

//             <h3>₹250</h3>

//             <button>Add to Cart</button>
//           </div>

//           {/* Card 3 */}
//           <div className="card">
//             <img
//               src="cup-coffee-top-view-with-coffee-beans-background.jpg"
//               alt="Cold Coffee"
//             />

//             <h2>Cold Coffee</h2>

//             <p>Chilled creamy cold coffee</p>

//             <h3>₹180</h3>

//             <button>Add to Cart</button>
//           </div>

//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <h2>☕ Brew Heaven</h2>

//         <p>Freshly brewed happiness everyday.</p>

//         <h4>📍 Trichy | 📞 9876543210</h4>
//       </footer>

//     </div>
//   );
// };

// export default CoffeeShop;

// App.js

import React from "react";
// import "./App.css";

function App() {

  const coffeeItems = [
    {
      id: 1,
      name: "Caramel Latte",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1170&auto=format&fit=crop"
    },

    {
      id: 2,
      name: "Espresso",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1170&auto=format&fit=crop"
    },

    {
      id: 3,
      name: "Cold Coffee",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1170&auto=format&fit=crop"
    }
  ];

  const orderCoffee = (coffeeName) => {
    alert(`${coffeeName} Added To Cart ☕`);
  };

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <h1 className="logo">
          ☕ Brew Heaven
        </h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="order-btn">
          Order Now
        </button>

      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">

          <h2>
            Fresh Coffee Everyday
          </h2>

          <p>
            Enjoy premium quality coffee made with passion and love.
          </p>

          <button>
            Explore Menu
          </button>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1170&auto=format&fit=crop"
            alt="coffee"
          />

        </div>

      </section>

      {/* Products */}
      <section className="products">

        <h1 className="title">
          Our Coffee Menu
        </h1>

        <div className="product-grid">

          {coffeeItems.map((item) => (

            <div className="card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <h2>{item.name}</h2>

              <p>
                Premium tasty coffee for coffee lovers.
              </p>

              <h3>
                ₹{item.price}
              </h3>

              <button
                onClick={() => orderCoffee(item.name)}
              >
                Add To Cart
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="footer">

        <h2>
          ☕ Brew Heaven
        </h2>

        <p>
          Freshly brewed happiness everyday.
        </p>

        <h4>
          📍 Trichy | 📞 9876543210
        </h4>

      </footer>

    </div>
  );
}

export default App;