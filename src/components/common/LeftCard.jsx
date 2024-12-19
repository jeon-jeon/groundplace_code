const LeftCard = ({ title, content, imgSrc }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "sticky",
        top: 0,
      }}
    >
      <span style={{ color: "#474f6f", fontSize: "40px" }}>{title}</span>
      <p style={{ color: "#9a9a9a", fontSize: "12px", whiteSpace: "pre-line" }}>
        {content}
      </p>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default LeftCard;
