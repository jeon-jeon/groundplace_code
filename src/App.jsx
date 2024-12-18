import LeftCard from "./components/common/LeftCard";
import RightCard from "./components/common/RightCard";
import Concept from "./components/presentation/Concept";
import Intro from "./components/presentation/Intro";
import MainSwiper from "./components/presentation/MainSwiper";

function App() {
  return (
    <>
      {/* background image swiper */}
      <MainSwiper />

      {/* video */}
      <Intro />

      {/* concept */}
      <Concept />

      {/* room preview */}
      <section
        style={{
          width: "100vw",
          padding: "100px 0px",
          backgroundColor: "#ebf5ff",
        }}
      >
        <div
          style={{ color: "#474f6f", fontSize: "80px", textAlign: "center" }}
        >
          Ground Place
        </div>
        <div
          style={{
            maxWidth: "1024px",
            margin: "0 auto",
            display: "flex",
            gap: "100px",
            padding: "50px 0",
          }}
        >
          <div style={{ flex: 1, position: "sticky", top: 0 }}>
            <LeftCard />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              flex: 1,
              paddingTop: "50px",
            }}
          >
            <RightCard
              imgSrc={"/images/room_preview_right_img1.jpg"}
              title={"GROUND PLACE 1"}
              content={"대형 실내 수영장(8m)과 외부 자쿠지가 있는 독채 풀빌라"}
            />
            <RightCard
              imgSrc={"/images/room_preview_right_img2.jpg"}
              title={"GROUND PLACE 2"}
              content={"중형 실내 수영장(6m)과 외부 자쿠지가 있는 독채 풀빌라"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
