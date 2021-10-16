import React, { useState } from "react";
import "./help.css";
const Login = () => {
  const [itemsactive, setitemsactive] = useState(1);

  const Handleitemsactive = () => {
    setitemsactive(bars.length);
  };

  return (
    <>
      <div className="content-sector">
        <div className="header">
          {bars.map((el, ind) => {
            if (itemsactive > ind) {
              return (
                <div key={ind}>
                  <div onClick={Handleitemsactive} className="items-active1">
                    {el.text01}
                  </div>
                  <div className="items-false1">{el.text02}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="input-parent"></div>
      {bap.map((el, ind) => {
        return (
          <form>
            <div key={ind}>
              <div className="title">{el.text03}</div>
              <input
                div
                className="email"
                type="email"
                placeholder="Е-мэйл хаягаараа нэвтэрнэ үү"
              ></input>

              <div className="input-item">
                <div className="title2">
                  <span>Нууц үг</span>
                  <div className="forget">{el.text04}</div>
                  <div className="input-parameter"></div>
                  <input
                    div
                    className="pass"
                    type="password"
                    placeholder="Нууц үгээ оруулна уу"
                  ></input>
                </div>
              </div>
            </div>
          </form>
        );
      })}
      <div className="button-parameter">
        <button type="submit">Үргэлжлүүлэх</button>
      </div>
    </>
  );
};
export default Login;

const bars = [{ text01: "Нэвтрэх", text02: "Бүртгүүлэх" }];
const bap = [
  {
    text03: "Нэвтрэх нэр",

    text04: "Нууц үг мартсан",
  },
];
