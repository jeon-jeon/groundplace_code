import Concept from "./components/presentation/Concept";
import Footer from "./components/presentation/Footer";
import Header from "./components/presentation/Header";
import Intro from "./components/presentation/Intro";
import MainScroll from "./components/presentation/MainScroll";
import MainSwiper from "./components/presentation/MainSwiper";
import RoomPreview from "./components/presentation/RoomPreview";
import Special from "./components/presentation/Special";

function App() {
  return (
    <>
      {/* header */}
      <Header />

      {/* background image swiper */}
      <MainSwiper />

      {/* video */}
      <Intro />

      {/* concept */}
      <Concept />

      {/* room preview */}
      <RoomPreview />

      {/* special */}
      <Special />

      {/* background scroll */}
      <MainScroll />

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
