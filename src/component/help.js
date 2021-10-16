import React from "react";
import "./help.css";
const Help = () => {
  return (
    <>
      <div className="content-sector">
        <div className="header">
          {bars.map((el, ind) => {
            return (
              <div key={ind}>
                <div className="items-active1">{el.text01}</div>
                <div className="items-false1">{el.text02}</div>
              </div>
            );
          })}
        </div>
      </div>
      <form>
        <div className="input-parent">
          <div className="title">Нэвтрэх нэр</div>
          <input
            div
            className="email"
            type="email"
            placeholder="Е-мэйл хаягаараа нэвтэрнэ үү"
          ></input>
        </div>
        <div className="input-item">
          <div className="title2">
            <span>Нууц үг</span>
            <div className="forget">Нууц үг мартсан</div>
            <div className="input-par"></div>
            <input
              className="pass"
              type="password"
              placeholder="Нууц үгээ оруулна уу"
            ></input>
          </div>
        </div>
        <div className="button-parameter">
          <button type="submit">Үргэлжлүүлэх</button>
        </div>
      </form>
    </>
  );
};
export default Help;

const bars = [{ text01: "Нэвтрэх", text02: "Бүртгүүлэх" }];
