import "../../style/headerStyle.css";
import Button from "../common/Button";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav_ul">
          <li className="nav_ul_li">
            prologue
            <ul className="sub_ul">
              <li>exterior</li>
            </ul>
          </li>

          <li className="nav_ul_li">
            rooms
            <ul className="sub_ul">
              <li>GROUND PLACE 1</li>
              <li>GROUND PLACE 2</li>
            </ul>
          </li>
          <li className="nav_ul_li">
            special
            <ul className="sub_ul">
              <li>Indoor Pool</li>
              <li>Outdoor Spa</li>
              <li>BBQ</li>
              <li>Goose Bedding</li>
              <li>Private House</li>
            </ul>
          </li>
          <li className="nav_ul_li">
            tour
            <ul className="sub_ul">
              <li>tour</li>
            </ul>
          </li>
          <li className="nav_ul_li">
            location
            <ul className="sub_ul">
              <li>location</li>
            </ul>
          </li>
          <li className="nav_ul_li">
            reservation
            <ul className="sub_ul">
              <li>예약안내</li>
              <li>실시간예약</li>
              <li>공지사항</li>
            </ul>
          </li>
        </ul>
        <div className="right_box">
          <img src="/images/hd_logo.png" alt="" />
          <Button />
        </div>
      </nav>
    </header>
  );
};

export default Header;
