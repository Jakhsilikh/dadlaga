import React from "react";
import "./file.css";
const filedownload = () => {
  return (
    <>
      <div className="Line">
        {line.map((el, ind) => {
          return (
            <div className="wrd">
              <img className="image" src={el.url} />
              <img className="image1" src={el.url1} />
              {el.text}
              <div key={ind} className="zuraas"></div>
            </div>
          );
        })}
      </div>
      <div className="contentpar"></div>
      <div className="rows-header"></div>
      <div className="type">Төрөл</div>
      <div className="name">Файлын нэр</div>
      <div className="name1">Teamviewer</div>
      <div className="download"></div>
      <button className="button">Татах</button>
      <div className="li"></div>
    </>
  );
};
export default filedownload;

const line = [
  { text: "Программ татах", url: "/img/icon.png", url1: "/img/ic.png" },
];
