import Text from "../common/Text";

const Footer = () => {
  return (
    <footer
      style={{ width: "100vw", height: "40vh", backgroundColor: "#ebf5ff" }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#bac5cf",
          fontFamily: "Pacifico",
        }}
      >
        <img src="./images/ft_logo.png" alt="" />
        <Text size={"120px"} text={"private poolvilla"}></Text>
      </div>
    </footer>
  );
};

export default Footer;
