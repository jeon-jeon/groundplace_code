import ImageSwiper from "../layout/ImageSwiper";
import SwiperBottomText from "../layout/SwiperBottomText";

import "../../style/customStyle.css";

const MainSwiper = () => {
  return (
    <section className="mainSwiper_section">
      <ImageSwiper />
      <SwiperBottomText />
    </section>
  );
};

export default MainSwiper;
