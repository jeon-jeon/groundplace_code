import Text from "../common/Text";

const SwiperBottomText = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        position: "absolute",
        bottom: 50,
        textAlign: "center",
        width: "100%",
        zIndex: 1,
        fontFamily: "Pacifico",
      }}
    >
      <Text size={"70px"} text={"Groundplace"} />
      <Text size={"25px"} text={"Private poolvilla"} />
    </div>
  );
};

export default SwiperBottomText;
