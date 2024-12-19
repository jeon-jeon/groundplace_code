import { useState } from "react";
import "../../style/specialStyle.css";
import TitleText from "../common/TitleText";

const Special = () => {
  const [id, setId] = useState(1);

  const mouseEnter = (e) => {
    setId((prev) => e.target.value);
  };

  return (
    <section className="special_section">
      <TitleText text={"Special offers"} />
      <article>
        <div className="container">
          <div className="left_img1_box">
            <img src={`/images/special${id}_img1.jpg`} alt="" />
          </div>
          <div className="left_img2_box">
            <img src={`/images/special${id}_img2.jpg`} alt="" />
          </div>
        </div>
        <ul className="list">
          <li value={1} onMouseEnter={mouseEnter}>
            Indoor Pool
          </li>
          <li value={2} onMouseEnter={mouseEnter}>
            Outdoor Spa
          </li>
          <li value={3} onMouseEnter={mouseEnter}>
            BBQ
          </li>
          <li value={4} onMouseEnter={mouseEnter}>
            Goose Bedding
          </li>
          <li value={5} onMouseEnter={mouseEnter}>
            Private House
          </li>
        </ul>
        <div className="container">
          <div className="right_img3_box">
            <img src={`/images/special${id}_img3.jpg`} alt="" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Special;
