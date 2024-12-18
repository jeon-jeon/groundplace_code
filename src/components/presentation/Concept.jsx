import { gsap } from "gsap";
import "../../style/conceptStyle.css";
import Text from "../common/Text";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Concept = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".concept_section",
        scrub: 3,
        // markers: true,
        start: "-10% top",
        end: "bottom bottom",
      },
    });
    timeline
      .to(img1.current, { y: -100 })
      .to(img2.current, { y: 50 }, "<")
      .to(img3.current, { y: -70 }, "<");
  }, []);

  return (
    <section className="concept_section">
      <div className="container title_box">
        <span className="title_position">private poolvilla</span>
        <Text size={"150px"} text={"Groundplace"} />
      </div>
      <div className="container img_box">
        <div className="main_img1_box">
          <img
            ref={img1}
            className="main_img1"
            src="/images/main_con1_img1.jpg"
            alt=""
          />
        </div>
        <img className="leaf_img" src="/images/leaf.png" alt="" />
        <img
          ref={img2}
          className="main_img2"
          src="/images/main_con1_img2.jpg"
          alt=""
        />
        <img
          ref={img3}
          className="main_img3"
          src="/images/main_con1_img3.jpg"
          alt=""
        />
        <p className="content_text">
          가장 긴 실내 풀장을 갖춘 독채 풀빌라
          <br />
          가장 편안한 휴식을 취할 수 있는 독채 풀빌라
          <br />
          따뜻한 스파를 할 수 있는 외부 자쿠지, 감성적인 외부풍경
        </p>
        <div className="vertical_text">
          <Text size={"32px"} text={"Groundplace private space"} />
          <Text size={"20px"} text={"It's a place where we are happy"} />
        </div>
      </div>
    </section>
  );
};

export default Concept;
