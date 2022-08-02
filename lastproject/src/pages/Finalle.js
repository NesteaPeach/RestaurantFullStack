import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Finalle({ userPhone, newStart }) {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const moveToStart = () => {
    newStart();
    navigate("../");
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/Order/?phone=${userPhone}`)
      .then((res) => res.json())
      .then((data) => setOrders(data[data.length - 1]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(orders);
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage:
          "url(" +
          "https://sicilia-jaffa.co.il/wp-content/uploads/2021/11/4G0A9944-Custom.jpg" +
          ")",
        height: "100vh ",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card w-50"
        style={{
          textAlign: "center",
          marginTop: "0",
          backgroundColor: "#758B55",
          color: "#EDF0E8",
        }}
      >
        <div className="card-body">
          <h1 className="card-title">אנחנו כבר בדרך אליך</h1>
          <p className="card-text">
            מס הזמנה: {orders.id}
            <br />
            כתובת: {orders.address}
            <br />
            טלפון ליצירת קשר: 052-7325591
          </p>
          <br />
          <h5 className="card-title"> תודה ולהתראות </h5>
          <br />
          <button className="btn btn-dark" onClick={moveToStart}>
            חזרה לדף הראשי
          </button>
        </div>
      </div>
    </div>
  );
}

export default Finalle;
