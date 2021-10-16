import React from "react";

const Content = () => {
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

export default Content;

const line = [{ text: "Бүтээгдэхүүн" }];

const list = [
  {
    text: "Бүтээгдэхүүн",
    text1: "MACS санхүүгийн бүртгэлийн иж бүрэн програм",
    url: "/img/product01.jpg ",
  },
  {
    text: "Бүтээгдэхүүн",
    text1: "Хүний нөөцийн удирдлага төлөвлөлтийн цогц систем",
    url: "/img/product02.png ",
  },
  {
    text: "Бүтээгдэхүүн",
    text1: "PACS төслийн санхүүгийн программ",
    url: "/img/product03.jpg",
  },
  {
    text: "Бүтээгдэхүүн",
    text1: "Эмийн санд зориулсан POS систем",
    url: "/img/product04.jpg",
  },
  {
    text: "Бүтээгдэхүүн",
    text1: "Авто засварын газрын бүртгэл, удирдлагын систем",
    url: "/img/product05.jpg",
  },
  {
    text: "Бүтээгдэхүүн",
    text1: "“COST”- Бүтээгдэхүүний өртөг тооцооллын систем",
    url: "/img/product06.jpg",
  },
  {
    text: "Бүтээгдэхүүн",
    text1: "Macs Freight – Тээвэр зуучийн бүртгэлийн систем",
    url: "/img/product07.jpg",
  },
  {
    text: "Бүтээгдэхүүн",
    text1: "“Macs Attendance” – Цаг бүртгэлийн систем",
    url: "/img/product08.jpg",
  },
  {
    text: "Бүтээгдэхүүн",
    text1: "Contractus – Гэрээний бүртгэлийн систем",
    url: "/img/product09.jpg",
  },
];
