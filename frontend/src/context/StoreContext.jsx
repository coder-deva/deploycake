import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({}); // Initialize cartItems as an empty object
  const url = "https://deploycake.onrender.com/"; // Ensure there's a trailing slash

  const [token, setToken] = useState("");
  const [cake_list, setCakeList] = useState([]);

  // Add item to the cart
  const addToCart = async (itemId) => {
    // Safely check for cart item existence and increment the count
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      newCartItems[itemId] = newCartItems[itemId] ? newCartItems[itemId] + 1 : 1;
      return newCartItems;
    });

    // If token exists, send cart data to the server
    if (token) {
      await axios.post(url + "api/cart/add", { itemId }, { headers: { token } });
    }
  };

  // Remove item from the cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      if (newCartItems[itemId] > 1) {
        newCartItems[itemId] -= 1;
      } else {
        delete newCartItems[itemId]; // Remove item if count reaches 0
      }
      return newCartItems;
    });

    if (token) {
      await axios.post(url + "api/cart/remove", { itemId }, { headers: { token } });
    }
  };

  // Calculate total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = cake_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  // Fetch the list of cakes from the server
  const fetchCakeList = async () => {
    try {
      const response = await axios.get(url + "api/cake/list");
      setCakeList(response.data.data);
    } catch (error) {
      console.error("Error fetching cake list:", error);
    }
  };

  // Load cart data for authenticated user
  const loadCartData = async (token) => {
    try {
      const response = await axios.post(url + "api/cart/get", {}, { headers: { token } });
      setCartItems(response.data.cartData);
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  // Load initial data (cakes, token, and cart)
  useEffect(() => {
    const loadData = async () => {
      await fetchCakeList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    };
    loadData();
  }, []);

  const contextValue = {
    cake_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
