import React from "react";
import "./pro.css";
const Product = () => {
  return (
    <>
      <div className="Line">
        {line.map((el, ind) => {
          return (
            <div className="wrd">
              {el.text}
              <div key={ind} className="zuraas"></div>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="parent1">
          {list.map((el, ind) => {
            return (
              <div key={ind} className="item">
                <img className="images" src={el.url} />
                <div className="boxes">{el.text}</div>
                <div className="words1">{el.text1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;

const line = [{ text: "Зөвлөгөө,Мэдээ Мэдээлэл" }];

const list = [
  {
    text: "Зөвлөгөө",
    text1: "Гар утас цэнэглэх хугацааг хурдасгах зөвлөгөө",
    url: "/img/zur1.jpg",
  },
  {
    text: "Зөвлөгөө",
    text1: "Иргэний цахим үнэмлэхийг цахимаар захиалах боллоо",
    url: "/img/zur2.jpg ",
  },
  {
    text: "Зөвлөгөө",
    text1: "Skype видео хийхдээ ар талаа бүдэгрүүлж болно",
    url: "/img/zur3.png",
  },
  {
    text: "Мэдээ",
    text1: "Баяр наадмын өдөр ажиллах ажилчдын нэрс,холбогдох утас",
    url: "/img/zur4.jpg",
  },
  {
    text: "Зөвлөгөө",
    text1: "Byte Fence (Anti malware) програмыг яаж устгах вэ?",
    url: "/img/zur5.jpg",
  },
  {
    text: "Мэдээ",
    text1: "Цахим аюулгүй байдлын хамгийн чухал 13 санамж",
    url: "/img/zur6.jpg",
  },
  {
    text: "Мэдээ",
    text1: "Цахим ном уншигч гэж юу вэ?",
    url: "/img/zur7.jpg",
  },
  {
    text: "Мэдээ",
    text1: "Агаар цэвэршүүлэгч сонгохдоо юунг анхаарах вэ?",
    url: "/img/zur8.jpg",
  },
];
