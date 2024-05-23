import React, { useEffect } from "react";
import "./App.css";
import image from "./assets/img/Image.png";
import image2 from "./assets/img/Image (1).png";
import image3 from "./assets/img/Image (2).png";
import icon from "./assets/img/shopping_cart.png";
import iconarrow from "./assets/img/arrow.png";
import iconarrowmedia from "./assets/img/arrow (1).png";

const App = () => {
  useEffect(() => {
    const websocketUrl = process.env.REACT_APP_WEBSOCKET_URL;
    const ws = new WebSocket(websocketUrl);

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onmessage = (message) => {
      console.log("WebSocket message:", message.data);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="circle-content-container">
            <div className="circle circle-1">1</div>
            <div className="content">
              <p>Получите партнерскую ссылку</p>
            </div>
          </div>
          <div className="illustration-1">
            <img src={image} alt="Illustration" />
          </div>
          <div>
            <img className="arrow" src={iconarrow} alt="arrow" />
            <img
              className="arrowmedia-1"
              src={iconarrowmedia}
              alt="arrow media"
            />
          </div>
        </div>

        <div className="card">
          <div className="circle-content-container">
            <div className="circle circle-2">2</div>
            <div className="content">
              <p>Расскажите о iiii.COM</p>
            </div>
          </div>
          <div className="illustration-2">
            <img src={image2} alt="Illustration" />
          </div>
          <div>
            <img className="arrow-2" src={iconarrow} alt="arrow" />
            <img
              className="arrowmedia-2"
              src={iconarrowmedia}
              alt="arrow media"
            />
          </div>
        </div>

        <div className="card">
          <div className="circle-content-container">
            <div className="circle circle-3">3</div>
            <div className="content">
              <p>Получайте хороший процент от покупок по вашей ссылке!</p>
            </div>
          </div>
          <div className="illustration-2">
            <img src={image3} alt="Illustration" />
          </div>
        </div>
      </div>
      <button className="btn">
        <img src={icon} alt="shopping cart" /> Стать партнером
      </button>
    </>
  );
};

export default App;
