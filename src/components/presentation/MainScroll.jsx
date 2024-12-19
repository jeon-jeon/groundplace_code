import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MainScroll = () => {
  //   const bg_text = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll_section",
        scrub: true,
        // markers: true,
        start: "top center",
        end: "120% bottom",
      },
    });
    timeline
      .to(".bg_text", { duration: 3, opacity: 1, stagger: 3 })
      .to(".bg_scroll", { duration: 3, y: "-35%" });
  }, []);
  return (
    <section
      className="scroll_section"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ebf5ff",
      }}
    >
      <div
        className="bg_scroll"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/main_bg.jpg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          fontSize: "50px",
          color: "white",
          transition: "all 0.5s",
          fontFamily: "Pacifico",
        }}
      >
        <div className="bg_text" style={{ opacity: 0.1 }}>
          A trip to discover
        </div>
        <div className="bg_text" style={{ opacity: 0.1 }}>
          your taste, awaken your
        </div>
        <div className="bg_text" style={{ opacity: 0.1 }}>
          senses in a beautiful space.
        </div>
        <div className="bg_text" style={{ opacity: 0.1 }}>
          put a comma in one's daily life,
        </div>
      </div>
    </section>
  );
};

export default MainScroll;
