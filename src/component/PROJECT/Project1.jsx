// import React, { useState } from "react";

// function App() {
//   const burgers = [
//     { id: 1, name: "Veg Burger", price: 120 },
//     { id: 2, name: "Chicken Burger", price: 180 },
//     { id: 3, name: "Cheese Burger", price: 150 },
//   ];

//   const [cart, setCart] = useState([]);

//   // ADD
//   const add = (item) => {
//     const exist = cart.find((x) => x.id === item.id);

//     if (exist) {
//       setCart(
//         cart.map((x) =>
//           x.id === item.id ? { ...x, qty: x.qty + 1 } : x
//         )
//       );
//     } else {
//       setCart([...cart, { ...item, qty: 1 }]);
//     }
//   };

//   // INCREMENT
//   const inc = (id) => {
//     setCart(
//       cart.map((x) =>
//         x.id === id ? { ...x, qty: x.qty + 1 } : x
//       )
//     );
//   };

//   // DECREMENT
//   const dec = (id) => {
//     setCart(
//       cart
//         .map((x) =>
//           x.id === id ? { ...x, qty: x.qty - 1 } : x
//         )
//         .filter((x) => x.qty > 0)
//     );
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🍔 Burger Order App</h1>

//       <h2>Burgers</h2>
//       {burgers.map((b) => (
//         <div key={b.id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
//           <h3>{b.name}</h3>
//           <p>₹{b.price}</p>
//           <button onClick={() => add(b)}>Add</button>
//         </div>
//       ))}

//       <h2>Cart 🛒</h2>

//       {cart.length === 0 && <p>Cart is empty</p>}

//       {cart.map((item) => (
//         <div key={item.id}>
//           {item.name} - ₹{item.price} x {item.qty}
//           <button onClick={() => inc(item.id)}> + </button>
//           <button onClick={() => dec(item.id)}> - </button>
//         </div>
//       ))}

//       <h3>Total: ₹{total}</h3>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const burgers = [
//     {
//       id: 1,
//       name: "Veg Burger",
//       price: 120,
//       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
//     },
//     {
//       id: 2,
//       name: "Chicken Burger",
//       price: 180,
//       image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
//     },
//     {
//       id: 3,
//       name: "Cheese Burger",
//       price: 150,
//       image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086"
//     }
//   ];

//   const [cart, setCart] = useState([]);

//   const add = (item) => {
//     const exist = cart.find((x) => x.id === item.id);

//     if (exist) {
//       setCart(
//         cart.map((x) =>
//           x.id === item.id ? { ...x, qty: x.qty + 1 } : x
//         )
//       );
//     } else {
//       setCart([...cart, { ...item, qty: 1 }]);
//     }
//   };

//   const inc = (id) => {
//     setCart(
//       cart.map((x) =>
//         x.id === id ? { ...x, qty: x.qty + 1 } : x
//       )
//     );
//   };

//   const dec = (id) => {
//     setCart(
//       cart
//         .map((x) =>
//           x.id === id ? { ...x, qty: x.qty - 1 } : x
//         )
//         .filter((x) => x.qty > 0)
//     );
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🍔 Burger Order App</h1>

//       <h2>Burgers</h2>
//       <div style={{ display: "flex", gap: 20 }}>
//         {burgers.map((b) => (
//           <div key={b.id} style={{ border: "1px solid black", padding: 10 }}>
//             <img src={b.image} alt={b.name} width="150" />
//             <h3>{b.name}</h3>
//             <p>₹{b.price}</p>
//             <button onClick={() => add(b)}>Add</button>
//           </div>
//         ))}
//       </div>

//       <h2>Cart 🛒</h2>

//       {cart.length === 0 && <p>Cart is empty</p>}

//       {cart.map((item) => (
//         <div key={item.id}>
//           {item.name} - ₹{item.price} x {item.qty}
//           <button onClick={() => inc(item.id)}> + </button>
//           <button onClick={() => dec(item.id)}> - </button>
//         </div>
//       ))}

//       <h3>Total: ₹{total}</h3>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";

function App() {
  const burgers = [
    {
      id: 1,
      name: "Veg Burger",
      price: 120,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: 180,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
      id: 3,
      name: "Cheese Burger",
      price: 150,
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086"
    }
    
  ];

  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  // ADD
  const add = (item) => {
    const exist = cart.find((x) => x.id === item.id);

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...x, qty: x.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // INC
  const inc = (id) => {
    setCart(
      cart.map((x) =>
        x.id === id ? { ...x, qty: x.qty + 1 } : x
      )
    );
  };

  // DEC
  const dec = (id) => {
    setCart(
      cart
        .map((x) =>
          x.id === id ? { ...x, qty: x.qty - 1 } : x
        )
        .filter((x) => x.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div>

      {/* NAVBAR */}
      <div  style={{
        display: "flex",
        justifyContent: "space-between",
        background: "black",
        color: "white",
        padding: 15
      }}>
        <h2> 🍔 Burger Shop</h2>

        <div onClick={() => setOpen(!open)} style={{ cursor: "pointer", fontSize: 24 }}>
          ☰ ({totalItems})
        </div>
      </div>

      {/* MENU */}

      {open && (
        <div style={{
          position: "absolute",
          right: 10,
          background: "white",
          padding: 10,
          border: "1px solid black",
          gap:"10px",
          display:"flex"
        }}>
          <p>Home</p>
          <p>Cart ({totalItems})</p>
        </div>
      )}

      <div style={{ padding: 20 }}>

        {/* BURGER LIST */}
        <h2 className="burger">Burgers</h2>

        <div  className="image">
          {burgers.map((b) => (
            <div key={b.id} style={{
              border: "1px solid #ccc",
              padding: 10,
              borderRadius: 10
            }}>
              <img src={b.image} alt={b.name} width="150" />
              <h3>{b.name}</h3>
              <p>₹{b.price}</p>
              <button onClick={() => add(b)}>Add 🍔</button>
            </div>
          ))}
        </div>

        {/* CART */}
       <div className="but">
         <h2 >Cart 🛒</h2>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item) => (
          <div  >
            {item.name} =₹{item.price} x {item.qty}

            <button onClick={() => inc(item.id)}> + </button>
            <button onClick={() => dec(item.id)}> - </button>
            
              <h3 >Total: ₹{total}</h3>
          </div>
        ))}
       </div>
         
       
      </div>
    </div>
  );
}

export default App;