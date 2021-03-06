import React from "react";
import "./ab.css";
const About = () => {
  return (
    <>
      <div className="text">
        {text.map((el, ind) => {
          return (
            <div className="rd">
              {el.text}
              <div className="rd2">{el.text2}</div>
              <div key={ind} className="zuraas"></div>
              <div className="rd1">{el.text1}</div>
              <div className="rd3">{el.text3}</div>
            </div>
          );
        })}
      </div>
      <div className="container"></div>
      <div class="items-false">Боломж</div>
      <div className="items-active">Давуу тал</div>
      <div className="line"></div>
      <div className="main-contents">
        Инфосистемс ХХК нь харилцагчиддаа үйл ажиллагаагаа зөв удирдан зохион
        байгуулах боломжийг олгодгоороо чухал ач холбогдолттой юм. Танд нэр
        хүндтэй уян хатан системтэй энгийн хялбар ажиллагаатай, онч мэргэн бүтэц
        диаграмтай програм хангамжтай болох боломжийг бид олгож байна. Манай
        програмыг ашиглаж байгаа хэрэглэгчдийн бүх үйлдэл, өдөр тутмын үйл
        ажиллагааны талаарх мэдээллийг дээд шатны удирдлагуудад мэдээлэх
        байдлаар таны хяналтанд бүрэн орох болно. Томоохон байгууллага
        корпорацийн салбар компани, жижиг сүлжээ дэлгүүрүүдийн хувьд ч програм
        хангамжийн хувьсал ирж байгаа гэдэгт итгэж болно. Манай компани
        алслагдсан олон салбаруудыг online байдлаар нэгдсэн сүлжээ үүсгэж хяналт
        тавих боломжийг мөн олгож байна.
      </div>
      <div className="prize">
        {prize.map((el, ind) => {
          return (
            <div key={ind} className="zuras">
              <div className="ez">
                {el.text}
                <img className="pic1" src={el.url} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;

const text = [
  {
    text: "Үүсэл Хөгжил",
    text1:
      "Манай компани 1997 оноос эхлэн Мэдээллийн технологийн салбарт програм хангамжийн чиглэлээр ажиллаж зах зээлд өөрийн гэсэн байр сууриа эзэлж, тэргүүлэгч компаниудын нэг болсон.",
  },
  {
    text2: "Зорилт",
    text3:
      "Цаашид Монголын мэдээллийн технологи хөгжиж, өдөр тутмын хэрэглээ болохын хирээр програм хангамжийн хэрэгцээ нэмэгдэх нь зайлшгүй юм. Ийм учраас бид үйл ажиллагааны хүрээгээ өргөтгөн, хэрэглэгчиддээ чанартай, олон улсын түвшинд хүрсэн бүтээгдэхүүнээр хангахын тулд дараах зорилтуудыг дэвшүүлэн ажиллах байна.",
  },
];
const prize = [
  { text: "Шагнал Урамшуулал", url: "/img/one.jpg" },
  { url: "/img/two.jpg" },
  { url: "/img/three.jpg" },
  { url: "/img/four.jpg" },
];
