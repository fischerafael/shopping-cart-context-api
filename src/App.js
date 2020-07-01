import React from "react";

import Cart from "./components/cart/cart";
import CourseList from "./components/courseList/courseList";

import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <CartProvider>
      <div>        
        <CourseList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
