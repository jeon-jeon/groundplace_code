const LeftCard = () => {
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
      <span style={{ color: "#474f6f", fontSize: "40px" }}>Private space</span>
      <p style={{ color: "#9a9a9a", fontSize: "12px" }}>
        It's an emotional interior and a comfortable space. <br />
        We prepared a private space for only one team.
      </p>
      <img src="/images/room_preview_left.jpg" alt="" />
    </div>
  );
};

export default LeftCard;
