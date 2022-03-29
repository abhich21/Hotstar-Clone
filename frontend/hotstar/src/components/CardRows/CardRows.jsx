import "./CardRows.css";

import React from "react";

function CardRows() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="row-title">
      <h2>Row Title</h2>
      <div className="cardContainer">
        {data.map((el) => {
          return (
            <div className="card">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3732/1123732-v-2cc8548c7dae"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardRows;
