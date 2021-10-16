import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="Line">
        {line.map((el, ind) => {
          return (
            <div className="wrd">
              {el.text}
              <div key={ind} className="zuraas"></div>
              <img className="img" src={el.url} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Contact;

const line = [{ text: "Холбоо барих", url: "/img/zura.PNG" }];
