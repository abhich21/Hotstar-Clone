import "./CardRows.css";

import React from "react";
import { width } from "@mui/system";

function CardRows() {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="row-title">
      <h3>Row Title</h3>
      <div className="card-container">
        {data.map((el) => {
          return (
            <div
              key={Date.now()}
              style={{
                backgroundImage: `url("https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/613/1160613-v-b525150954e1")`,
              }}
              className="row-card"
            >
              <div className="wrap">
                <div className="card-gradient">
                  <div className="card-content">
                    <h3>title</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Optio incidunt voluptas ipsam delectus sequi temporibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardRows;
