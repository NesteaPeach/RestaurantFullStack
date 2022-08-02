import React, { useState } from "react";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Customer from "./pages/Customer";
import Finalle from "./pages/Finalle";
import Orders from "./pages/Orders";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [orderDishes, setOrderDishes] = useState([]);
  const [total, setTotal] = useState(0);
  const [dishId, setDishId] = useState([]);
  const [userPhone, setUserPhone] = useState("");
  const addPhone = (phone) => {
    setUserPhone(phone);
  };
  const newStart = () => {
    setTotal(0);
    setOrderDishes([]);
  };

  const removeDish = (dish) => {
    setTotal((prevTotal) => {
      return prevTotal - dish.price;
    });

    setOrderDishes((prevState) =>
      prevState.filter((orderDishes) => {
        return orderDishes.key !== dish.key;
      })
    );
    setDishId((prevState) =>
      prevState.filter((dishId) => {
        return dishId !== dish.id;
      })
    );
  };
  const addToCart = (dish) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    function generateString(length) {
      let result = " ";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }

      return result;
    }
    let newDish = {
      key: generateString(8),
      id: dish.id,
      name: dish.name,
      price: dish.price,
      description: dish.description,
      imageUrl: dish.imageUrl,
      isGlutenFree: dish.isGlutenFree,
      isVegetrian: dish.isVegetrian,
      category: dish.category,
    };
    setOrderDishes((prevlist) => {
      return [...prevlist, newDish];
    });
    setTotal((prevTotal) => {
      return prevTotal + dish.price;
    });
    setDishId((prevState) => {
      return [...prevState, dish.id];
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="Orders"
          element={
            <Orders
              addToCart={addToCart}
              total={total}
              orderDishes={orderDishes}
            />
          }
        />
        <Route
          path="Basket"
          element={
            orderDishes.length > 0 ? (
              <Basket
                orderDishes={orderDishes}
                total={total}
                removeDish={removeDish}
              />
            ) : (
              <Navigate replace to="/Orders" />
            )
          }
        />
        <Route
          path="Customer"
          element={
            orderDishes.length > 0 ? (
              <Customer orderDishes={dishId} setUserPhone={addPhone} />
            ) : (
              <Navigate replace to="/Orders" />
            )
          }
        />
        <Route
          path="Finalle"
          element={<Finalle userPhone={userPhone} newStart={newStart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
