import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Customer({ orderDishes, setUserPhone }) {
  const navigate = useNavigate();
  const moveToFinale = () => {
    if (contactForm.first_name !== "") {
      if (contactForm.last_name !== "") {
        if (contactForm.address !== "") {
          if (contactForm.phone !== "") {
            fetch("http://127.0.0.1:8000/Order/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(contactForm),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
            setUserPhone(contactForm.phone);
            navigate("../Finalle");
          } else {
            window.alert("חובה למלא את מס הטלפון");
          }
        } else {
          window.alert("חובה למלא את כתובת");
        }
      } else {
        window.alert("חובה למלא שם משפחה ");
      }
    } else {
      window.alert("חובה למלא שם פרטי");
    }
  };

  const [contactForm, setContactForm] = useState({
    dishes: orderDishes,
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  });
  const handleForm = (event) => {
    setContactForm((prevForm) => {
      return { ...prevForm, [event.target.name]: event.target.value };
    });
  };

  return (
    <div className="container-fluid" id="home">
      <div
        className="input-group mb-3"
        dir="rtl"
        style={{
          maxWidth: "70vh",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "right",
        }}
      >
        <div className="input-group mb-3" style={{ paddingTop: "20vh" }}>
          <span className="input-group-text" id="basic-addon2">
            שם
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="שם"
            name="first_name"
            onChange={handleForm}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
            שם משפחה
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="שם משפחה"
            name="last_name"
            onChange={handleForm}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
            כתובת
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="כתובת"
            onChange={handleForm}
            name="address"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">
            טלפון
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="טלפון"
            name="phone"
            onChange={handleForm}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <button
          className="btn btn-success"
          style={{
            width: "70vh",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10vh",
            textAlign: "center",
            fontSize: "24px",
          }}
          onClick={moveToFinale}
        >
          שלח הזמנה
        </button>
      </div>
    </div>
  );
}

export default Customer;
