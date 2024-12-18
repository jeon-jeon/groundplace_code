const Intro = () => {
  return (
    <section
      style={{
        width: "100vw",
        padding: "100px 0",
        backgroundColor: "#ebf5ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "#6e7ea5",
          fontSize: "26px",
          fontWeight: 700,
          letterSpacing: "10px",
        }}
      >
        [GROUND PLACE]
      </div>
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/970246499?h=a498af65f5?autoplay=1"
        width="1200px"
        height="800px"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default Intro;
