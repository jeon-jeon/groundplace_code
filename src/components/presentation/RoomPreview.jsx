import LeftCard from "../common/LeftCard";
import RightCard from "../common/RightCard";
import TitleText from "../common/TitleText";

const RoomPreview = () => {
  return (
    <section
      style={{
        width: "100vw",
        padding: "100px 0px",
        backgroundColor: "#ebf5ff",
      }}
    >
      <TitleText text={"Ground Place"} />
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
          <LeftCard
            title={"Private space"}
            content={
              "It's an emotional interior and a comfortable space. \nWe prepared a private space for only one team."
            }
            imgSrc={"/images/room_preview_left.jpg"}
          />
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
  );
};

export default RoomPreview;
