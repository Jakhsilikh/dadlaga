import React, { useState } from "react";
import "./home.css";
const Home = () => {
  const [seeMore, setSeeMore] = useState(3);
  const [selectItem, setSelectItem] = useState(1);

  const HandleSeeMore = () => {
    setSeeMore(command.length);
  };

  return (
    <>
      <div className="container-parent">
        <div className="text-parent">
          <div className="big">
            <div className="row1">
              <div className="txt">Мэдээллийн</div>
              <div className="text-write">технологийн</div>
              <div className="lin">|</div>
            </div>
          </div>
          <div className="txt1">оновчтой шийдлүүд</div>
        </div>
        <div className="small"></div>
      </div>
      <div className="cards-row">
        <div className="cards-items">
          {command.map((el, ind) => {
            if (seeMore > ind) {
              return (
                <div key={ind} className="it">
                  <img className="imags" src={el.url} />
                  <div className="titl">{el.text10}</div>
                  <div className="desc">{el.text11}</div>
                  <div className="link">{el.text12}</div>
                </div>
              );
            }
          })}
          <div onClick={HandleSeeMore} className="more">
            {button.map((el, ind) => {
              return (
                <div key={ind}>
                  <div className="tect">
                    {el.tect}
                    <img className="imagg" src={el.url} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="all-product">
            {but.map((el, ind) => {
              return (
                <div key={ind}>
                  <div className="tet" href="http://localhost:3000/content">
                    {el.text}
                    <img className="imad" src={el.url} />
                  </div>
                </div>
              );
            })}
          </div>

          {contxt.map((el, ind) => {
            return (
              <div onClick={() => setSelectItem(el.code)} key={ind}>
                <div className="col-md-6 col-12">
                  <div className="pp">{el.text}</div>
                  {selectItem === el.code ? (
                    <div className="tight">{el.tight}</div>
                  ) : null}
                  <div className="par">
                    {el.par}
                    <img className="zar" src={el.url7} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="but1">Дэлгэрэнгүй</button>
      </div>
    </>
  );
};

export default Home;

const command = [
  {
    url: "/img/set.png",
    text10: "Бизнес процессын автоматжуулалт",
    text11:
      "Байгууллагын нийт үйл ажиллагааг шаардагдах түвшинд хамруулан бие даасан модулиудыг холбон ажиллуулдаг",
    text12: "Дэлгэрэнгүй",
  },
  {
    url: "/img/gl.png",
    text10: "Вэб сайт хөгжүүлэлт",
    text11:
      "Таны хэрэгцээнд нийцүүлэн, орчин үеийн технологи, график дизайны шийдлийг ашиглан, бүх төрлийн вебсайт, мобайл аппликейш хурдан шуурхай, чанарын өндөр түвшинд бүтээж үйлчилнэ",
    text12: "Дэлгэрэнгүй",
  },
  {
    url: "/img/web.png",
    text10: "Захиалгын програм хөгжүүлэлт",
    text11:
      "Танай байгууллагын хэрэгцээ шаардлагын дагуу веб болон клиент-сервер, мөн хосолсон технологиор өвөрмөц давтагдашгүй програмын шийдлийг хөгжүүлж өгнө",
    text12: "Дэлгэрэнгүй",
  },
  {
    url: "/img/an.png",
    text10: "Гар утасны аппликейшн",
    text11:
      "Android болон iOS үйлдлийн системтэй гар утсанд ажиллах төрөл бүрийн мобайл апп зохиож байна. Танд хэрэгцээтэй байгаа програмын шийдлийн талаар бидэнд хандана уу",
    text12: "Дэлгэрэнгүй",
  },
];
const button = [{ tect: "Цааш үзэх", url: "/img/d.png" }];
const but = [{ text: "БҮХ БҮТЭЭГДЭХҮҮНИЙГ ХАРАХ", url: "/img/n.png" }];
const tie = [{ text: "Бүтээгдэхүүн" }];
const contxt = [
  {
    text: "Macs",
    tesc: "Сангийн Яамны нягтлан бодох бүртгэлийн газраас 2жил тутамд шинэчлэн олгодог тусгай зөвшөөрлийг 1998 оноос хойш авсаар ирсэн бөгөөд үүнээс хойш зах зээлийн болон эрх зүйн орчны өөрчлөлт, харилцагчдынхаа хэрэгцээ шаардлагыг тусган...",
    url: "/img/product01.jpg",
    tight: "Macs санхүүгийн програм",
    code: 1,
  },
  {
    text: "Pacs",
    tight: "Pacs төрлийн санхүүгийн програм ",
    url: "/img/product02.jpg",
    code: 2,
  },
  {
    text: "Macs Human Capital",
    tight: "Хүний нөөцийн удирдлага төлөвлөлтийн систем",
    code: 3,
  },
  {
    text: "Car Service",
    tight: " Авто засварын бүртгэл, удирдлагын систем",
    code: 4,
  },
  { text: "Pos", tight: "Эмийн санд зориулсан POS систем", code: 5 },
  { text: "Cost", tight: "Бүтээгдэхүүний өртөг тооцооллын систем", code: 6 },
  {
    par: "Сангийн Яамны нягтлан бодох бүртгэлийн газраас 2жил тутамд шинэчлэн олгодог тусгай зөвшөөрлийг 1998 оноос хойш авсаар ирсэн бөгөөд үүнээс хойш зах зээлийн болон эрх зүйн орчны өөрчлөлт, харилцагчдынхаа хэрэгцээ шаардлагыг тусган...",
    url7: "/img/product01.jpg",
  },
];
