import React from "react";
import { useNavigate } from "react-router-dom";
import BasketCard from "../components/BasketCard";

function Basket({ orderDishes, total, removeDish }) {
  const navigate = useNavigate();
  const moveToCustomer = () => {
    navigate("../Customer");
  };
  const moveToHome = () => {
    navigate("../Orders");
  };

  return (
    <div className="container" style={{ textAlign: "right" }}>
      <div className="row">
        <div className="col-4">
          <div>
            <div className="card text-white bg-success mb-3">
              <div className="card-header">
                <h1>סה"כ הזמנה </h1>
              </div>
              <div className="card-body" style={{ textAlign: "center" }}>
                <h1 className="card-title">₪ {total}</h1>
                <br />
                <div className="card-text">
                  <div>
                    <button
                      className="btn btn-warning"
                      style={{ float: "left" }}
                      onClick={moveToCustomer}
                    >
                      המשך לתשלום
                    </button>
                    <button
                      className="btn btn-dark"
                      style={{ float: "right" }}
                      onClick={moveToHome}
                    >
                      חזרה לתפריט
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          {orderDishes.map((item) => (
            <BasketCard key={item.key} dish={item} removeDish={removeDish} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Basket;
