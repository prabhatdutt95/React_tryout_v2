import React, { createContext } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (id) => {},
  removeItem: (id) => {},
});

export default CartContext;
