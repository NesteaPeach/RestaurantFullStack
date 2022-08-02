import React from "react";

function BasketCard({ dish, removeDish }) {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={dish.imageUrl}
              className="img-fluid rounded-start"
              alt="..."
              style={{ maxHeight: "200px", width: "18rem" }}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                ₪ {dish.price} {dish.name}
              </h5>
              <p className="card-text">{dish.description}</p>
              <p className="card-text">
                <button
                  className="btn btn-danger"
                  onClick={() => removeDish(dish)}
                >
                  מחק פריט
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasketCard;
