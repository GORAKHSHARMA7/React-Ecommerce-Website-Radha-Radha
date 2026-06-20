import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const products = [

    {
      id: 1,
      title: "iPhone 15 Pro",
      price: 129999,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1000",
    },

    {
      id: 2,
      title: "Gaming Laptop",
      price: 75999,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000",
    },

    {
      id: 3,
      title: "Boat Headphones",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    },

    {
      id: 4,
      title: "Smart Watch",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000",
    },

    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1000",
    },

    {
      id: 6,
      title: "DSLR Camera",
      price: 55999,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000",
    },

    {
      id: 7,
      title: "Nike Shoes",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000",
    },

    {
      id: 8,
      title: "Backpack",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1000",
    },

    {
      id: 9,
      title: "Samsung LED TV",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000",
    },

    {
      id: 10,
      title: "Mechanical Keyboard",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000",
    },

    {
      id: 11,
      title: "Gaming Mouse",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1000",
    },

    {
      id: 12,
      title: "Tablet",
      price: 24999,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000",
    },

    {
      id: 13,
      title: "Office Chair",
      price: 8999,
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000",
    },

    {
      id: 14,
      title: "Air Fryer",
      price: 6999,
      image:
        "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1000",
    },

    {
      id: 15,
      title: "Apple AirPods",
      price: 18999,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1000",
    },

    {
      id: 16,
      title: "Puma T-Shirt",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000",
    },

    {
      id: 17,
      title: "HP Printer",
      price: 7999,
      image:
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1000",
    },

    {
      id: 18,
      title: "Water Bottle",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000",
    },

    {
      id: 19,
      title: "Microwave Oven",
      price: 11999,
      image:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=1000",
    },

    {
      id: 20,
      title: "Study Table",
      price: 5999,
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000",
    },

  ];

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Ghaziabad");

  // ADD TO CART

  const addToCart = (product) => {

    const alreadyInCart = cart.find(
      (item) => item.id === product.id
    );

    if (!alreadyInCart) {
      setCart([...cart, product]);
    }

  };

  // REMOVE FROM CART

  const removeFromCart = (index) => {

    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

  };

  // ADD TO WISHLIST

  const addToWishlist = (product) => {

    const alreadyInWishlist = wishlist.find(
      (item) => item.id === product.id
    );

    if (!alreadyInWishlist) {
      setWishlist([...wishlist, product]);
    }

  };

  // SEARCH FILTER

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const menuBtn = {
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  };

  return (

    <BrowserRouter>

      <div
        style={{
          background: "#eaeded",
          minHeight: "100vh",
          fontFamily: "Arial",
        }}
      >

        {/* NAVBAR */}

        <div
          style={{
            background: "#131921",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap",
            position: "sticky",
            top: "0",
            zIndex: "1000",
          }}
        >

          {/* AMAZON LOGO */}

          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "38px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >

            <span
              style={{
                color: "#ff9900",
              }}
            >
              A
            </span>

            mazon

            <span
              style={{
                color: "#ff9900",
                fontSize: "14px",
                marginTop: "15px",
              }}
            >
              .in
            </span>

          </Link>

          {/* LOCATION */}

          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              minWidth: "120px",
            }}
          >

            <span
              style={{
                fontSize: "12px",
                color: "#cccccc",
              }}
            >
              Deliver To
            </span>

            <select
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              style={{
                background: "#131921",
                color: "white",
                border: "1px solid gray",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <option>Ghaziabad</option>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Lucknow</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>

          </div>

          {/* SEARCH BAR */}

          <div
            style={{
              flex: "1",
              display: "flex",
              minWidth: "250px",
              maxWidth: "700px",
            }}
          >

            <input
              type="text"
              placeholder="Search Amazon Products"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              style={{
                flex: "1",
                padding: "12px",
                border: "none",
                outline: "none",
                fontSize: "16px",
                borderTopLeftRadius: "6px",
                borderBottomLeftRadius: "6px",
              }}
            />

            <button
              style={{
                width: "60px",
                border: "none",
                background: "#febd69",
                cursor: "pointer",
                fontSize: "20px",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
            >
              🔍
            </button>

          </div>

          {/* WISHLIST */}

          <Link
            to="/wishlist"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            ❤️ Wishlist ({wishlist.length})
          </Link>

          {/* CART */}

          <Link
            to="/cart"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            🛒 Cart ({cart.length})
          </Link>

        </div>

        {/* MENU BAR */}

        <div
          style={{
            background: "#232f3e",
            padding: "12px 20px",
            display: "flex",
            gap: "25px",
            overflowX: "auto",
          }}
        >

          <button
            style={menuBtn}
            onClick={() => setSearch("")}
          >
            All
          </button>

          <button
            style={menuBtn}
            onClick={() => setSearch("iphone")}
          >
            Mobiles
          </button>

          <button
            style={menuBtn}
            onClick={() => setSearch("Laptop")}
          >
            Electronics
          </button>

          <button
            style={menuBtn}
            onClick={() => setSearch("Shoes")}
          >
            Fashion
          </button>

          <button
            style={menuBtn}
            onClick={() => setSearch("Watch")}
          >
            Watches
          </button>

          <button
            style={menuBtn}
            onClick={() => setSearch("Speaker")}
          >
            Speakers
          </button>

          <button
            style={menuBtn}
            onClick={() => setSearch("Camera")}
          >
            Cameras
          </button>

          <button
            style={menuBtn}
            onClick={() => setSearch("Backpack")}
          >
            Bags
          </button>

          <button
            style={menuBtn}
            onClick={() => setSearch("Headphones")}
          >
            Headphones
          </button>

        </div>

        <Routes>

          {/* HOME PAGE */}

          <Route
            path="/"
            element={
              <div>

                {/* HERO BANNER */}

                <div
                  style={{
                    width: "100%",
                    minHeight: "500px",
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1600')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px 20px",
                  }}
                >

                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      maxWidth: "800px",
                      padding: "40px",
                      borderRadius: "20px",
                      backdropFilter: "blur(6px)",
                      background:
                        "rgba(0,0,0,0.35)",
                    }}
                  >

                    <h1
                      style={{
                        fontSize:
                          "clamp(38px,6vw,70px)",
                        marginBottom: "15px",
                        color: "#ffd814",
                      }}
                    >
                      BIG FESTIVAL SALE
                    </h1>

                    <p
                      style={{
                        fontSize:
                          "clamp(18px,3vw,30px)",
                        marginBottom: "25px",
                      }}
                    >
                      Up To 70% OFF On Electronics,
                      Fashion, Mobiles & More
                    </p>

                    <button
                      style={{
                        background: "#ffd814",
                        color: "black",
                        border: "none",
                        padding: "15px 35px",
                        borderRadius: "40px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      Shop Now
                    </button>

                  </div>

                </div>

                {/* PRODUCTS */}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "25px",
                    padding: "30px",
                  }}
                >

                  {filteredProducts.map((product) => (

                    <div
                      key={product.id}
                      style={{
                        background: "white",
                        borderRadius: "15px",
                        overflow: "hidden",
                        boxShadow:
                          "0 4px 15px rgba(0,0,0,0.15)",
                      }}
                    >

                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: "100%",
                          height: "220px",
                          objectFit: "contain",
                          background: "#ffffff",
                          padding: "15px",
                          borderRadius: "10px",
                        }}
                      />

                      <div
                        style={{
                          padding: "20px",
                          textAlign: "center",
                        }}
                      >

                        <h2>
                          {product.title}
                        </h2>

                        <h3
                          style={{
                            color: "green",
                          }}
                        >
                          ₹{product.price}
                        </h3>

                        <button
                          onClick={() =>
                            addToCart(product)
                          }
                          style={{
                            width: "100%",
                            padding: "12px",
                            background: "#ffd814",
                            border: "none",
                            borderRadius: "25px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            marginBottom: "10px",
                          }}
                        >
                          Add To Cart
                        </button>

                        <button
                          onClick={() =>
                            addToWishlist(product)
                          }
                          style={{
                            width: "100%",
                            padding: "12px",
                            background: "#232f3e",
                            color: "white",
                            border: "none",
                            borderRadius: "25px",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                        >
                          ❤️ Add To Wishlist
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              </div>
            }
          />

          {/* CART PAGE */}

          <Route
            path="/cart"
            element={
              <div
                style={{
                  padding: "30px",
                }}
              >

                <h1>
                  Shopping Cart
                </h1>

                {cart.length === 0 ? (
                  <h2>
                    Cart Is Empty
                  </h2>
                ) : (
                  cart.map((item, index) => (

                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "20px",
                        background: "white",
                        padding: "20px",
                        marginTop: "20px",
                        borderRadius: "15px",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "220px",
                          height: "220px",
                          objectFit: "contain",
                          background: "#ffffff",
                          padding: "15px",
                          borderRadius: "10px",
                        }}
                      />

                      <div>

                        <h2>
                          {item.title}
                        </h2>

                        <h3
                          style={{
                            color: "green",
                          }}
                        >
                          ₹{item.price}
                        </h3>

                        <button
                          onClick={() =>
                            removeFromCart(index)
                          }
                          style={{
                            padding: "10px 20px",
                            background: "red",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  ))
                )}

                <div
                  style={{
                    background: "white",
                    padding: "20px",
                    marginTop: "20px",
                    borderRadius: "15px",
                  }}
                >

                  <h1>
                    Total ₹
                    {cart.reduce(
                      (total, item) =>
                        total + item.price,
                      0
                    )}
                  </h1>

                </div>

              </div>
            }
          />

          {/* WISHLIST PAGE */}

          <Route
            path="/wishlist"
            element={
              <div
                style={{
                  padding: "30px",
                }}
              >

                <h1>
                  My Wishlist
                </h1>

                {wishlist.length === 0 ? (
                  <h2>
                    Wishlist Is Empty
                  </h2>
                ) : (
                  wishlist.map((item, index) => (

                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "20px",
                        background: "white",
                        padding: "20px",
                        marginTop: "20px",
                        borderRadius: "15px",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "220px",
                          height: "220px",
                          objectFit: "contain",
                          background: "#ffffff",
                          padding: "15px",
                          borderRadius: "10px",
                        }}
                      />

                      <div>

                        <h2>
                          {item.title}
                        </h2>

                        <h3
                          style={{
                            color: "green",
                          }}
                        >
                          ₹{item.price}
                        </h3>

                      </div>

                    </div>

                  ))
                )}

              </div>
            }
          />

        </Routes>

        {/* FOOTER */}

        <div
          style={{
            background: "#131921",
            color: "white",
            marginTop: "50px",
          }}
        >

          <div
            style={{
              background: "#37475a",
              textAlign: "center",
              padding: "15px",
              fontWeight: "bold",
            }}
          >
            Back To Top
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(200px,1fr))",
              gap: "30px",
              padding: "40px",
            }}
          >

            <div>
              <h3>Get To Know Us</h3>
              <p>About Us</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>

            <div>
              <h3>Connect With Us</h3>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>

            <div>
              <h3>Make Money</h3>
              <p>Sell On Amazon</p>
              <p>Affiliate</p>
              <p>Advertise</p>
            </div>

            <div>
              <h3>Help</h3>
              <p>Your Account</p>
              <p>Returns</p>
              <p>Support</p>
            </div>

          </div>

          <div
            style={{
              borderTop: "1px solid gray",
              textAlign: "center",
              padding: "20px",
            }}
          >
            © 2026 Amazon Clone | Made By Gorakh Sharma
          </div>

        </div>

      </div>

    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);