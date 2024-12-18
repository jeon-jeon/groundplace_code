import ImageSwiper from "../layout/ImageSwiper";
import SwiperBottomText from "../layout/SwiperBottomText";

const MainSwiper = () => {
  return (
    <section style={{ width: "100vw", height: "100vh" }}>
      <ImageSwiper />
      <SwiperBottomText />
    </section>
  );
};

export default MainSwiper;
