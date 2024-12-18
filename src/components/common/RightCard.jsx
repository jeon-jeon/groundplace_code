const RightCard = ({ imgSrc, title, content }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "50px 0",
        flex: 1,
      }}
    >
      <img src={imgSrc} alt="" />
      <span style={{ color: "#474f6f", fontSize: "40px", marginTop: "30px" }}>
        {title}
      </span>
      <p style={{ color: "#6d6d6d", fontSize: "14px" }}>{content}</p>
    </div>
  );
};

export default RightCard;
