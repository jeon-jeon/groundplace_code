import { FaClock } from "react-icons/fa6";

const Button = () => {
  return (
    <button
      style={{
        width: "70px",
        height: "30px",
        borderRadius: "20px",
        color: "#3f4c59",
        border: "1px solid #3f4c59",
        background: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <FaClock />
      예약
    </button>
  );
};

export default Button;
