import React, { useState, useEffect } from "react";
import "./Orders.css";
import { useNavigate } from "react-router-dom";

function Orders({ addToCart, total, orderDishes }) {
  const navigate = useNavigate();
  const [dishes, setDishes] = useState([]);
  const [dishSearch, setDishSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const moveToBasket = () => {
    if (orderDishes.length === 0) {
      window.alert("הסל עדיין ריק... תיקח משהו");
    } else {
      navigate("../Basket");
    }
  };
  const filterDishByCategory = (category_id) => {
    fetch(`http://127.0.0.1:8000/dish?category=${category_id}`)
      .then((res) => res.json())
      .then((data) => setDishes(data));
  };
  const mySearch = () => {
    fetch(`http://127.0.0.1:8000/dish?search=${dishSearch}`)
      .then((res) => res.json())
      .then((data) => setDishes(data));
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/category/")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch(`http://127.0.0.1:8000/dish?category=6`)
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);
  const moveToCart = (dish_id) => {
    fetch(`http://127.0.0.1:8000/dish/${dish_id}`)
      .then((res) => res.json())
      .then((data) => addToCart(data));
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-brand mb-0 h1">
          <button className="btn btn-outline-danger" onClick={moveToBasket}>
            🛒 המשך לאישור הזמנה
          </button>
        </div>
        <div className="navbar-brand mb-0 h1">₪ {total}</div>

        <ul className="navbar-nav ms-auto">
          <li className="navbar-brand mb-0 h1 d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="...הקלידו את שם המנה"
              onChange={(e) => setDishSearch(e.target.value)}
            />
            <button className="btn btn-outline-danger" onClick={mySearch}>
              חיפוש
            </button>
          </li>
          <li className="navbar-brand mb-0 h1" id="menu">
            Sicilian Heart
          </li>
        </ul>
      </nav>

      <main className="container-fluid">
        <div>
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <ul className="navbar-nav ms-auto">
              {categories.map((cate) => {
                return (
                  <li className="navbar-brand mb-0 h1" key={cate.id}>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => filterDishByCategory(cate.id)}
                      style={{
                        backgroundImage: "url(" + cate.imageUrl + ")",
                        backgroundPosition: "center",
                        color: "white",
                        textShadow:
                          "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                        backgroundSize: "100%",
                      }}
                    >
                      {cate.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="col">
          <div className="row">
            {dishes.map((dish) => {
              return (
                <div
                  className="card"
                  style={{ maxWidth: "18rem" }}
                  key={dish.id}
                >
                  <img
                    src={dish.imageUrl}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "200px", maxWidth: "18rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      ₪ {dish.price} {dish.name}
                    </h5>
                    <p className="card-text">
                      <small style={{ float: "left", color: "green" }}>
                        {dish.isVegeterian && " 🥦צמחוני"}
                      </small>
                      <small style={{ float: "right", color: "green" }}>
                        {dish.isGlutenFree && "  🌾ללא גלוטן"}
                      </small>
                    </p>
                    <br />
                    <p className="card-text">{dish.description}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => moveToCart(dish.id)}
                    >
                      הוסף להזמנה
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Orders;
