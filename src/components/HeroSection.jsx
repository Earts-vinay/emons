// import React, { useRef, useEffect, useState } from "react";
// import "./HeroSection.css";

// const segments = [
//   { start: 0, end: 8, loopStart: 0 }, // Segment 1 — full loop
//   { start: 9, end: 16, loopStart: 11 }, // Segment 2 — loop 11–16
//   { start: 17, end: 24, loopStart: 20 }, // Segment 3 — loop 19–24
//   { start: 25, end: 33, loopStart: 28 }, // Segment 4 — loop 27–33
//   { start: 33, end: 46, loopStart: 35 }, // Segment 5 — loop 36–46
// ];

// const HeroSection = () => {
//   const videoRef = useRef(null);
//   const [currentSegment, setCurrentSegment] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;

//       // Determine which segment we are currently in
//       const newSegment = Math.min(
//         Math.floor(scrollY / windowHeight),
//         segments.length - 1
//       );

//       if (newSegment !== currentSegment) {
//         setCurrentSegment(newSegment);
//         const video = videoRef.current;
//         video.currentTime = segments[newSegment].start;
//         video.play();
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [currentSegment]);

//   // Loop handling
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const { end, loopStart } = segments[currentSegment];

//     const checkLoop = () => {
//       // When video reaches end of segment, jump back to loopStart
//       if (video.currentTime >= end) {
//         video.currentTime = loopStart;
//         video.play();
//       }
//     };

//     video.addEventListener("timeupdate", checkLoop);
//     video.play();

//     return () => {
//       video.removeEventListener("timeupdate", checkLoop);
//     };
//   }, [currentSegment]);

//   return (
//     <div style={{ height: `${segments.length * 100}vh`, position: "relative" }}>
//       <video
//         ref={videoRef}
//         src="/video/video-emons.mp4"
//         muted
//         playsInline
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//         }}
//       />
//     </div>
//   );
// };

// export default HeroSection;



import React, { useRef, useEffect, useState } from "react";
import "./HeroSection.css";

// const segments = [
//   { start: 0, end: 8, loopStart: 0 },
//   { start: 9, end: 16, loopStart: 11 },
//   { start: 17, end: 24, loopStart: 19 },
//   { start: 25, end: 33, loopStart: 27 },
//   { start: 34, end: 46, loopStart: 36 },
// ];

const segments = [
  { start: 0, end: 8, loopStart: 0 }, // Segment 1 — full loop
  { start: 9, end: 16, loopStart: 11 }, // Segment 2 — loop 11–16
  { start: 17, end: 24, loopStart: 20 }, // Segment 3 — loop 19–24
  { start: 25, end: 33, loopStart: 28 }, // Segment 4 — loop 27–33
  { start: 33, end: 46, loopStart: 35 }, // Segment 5 — loop 36–46
];

const HeroSection = () => {
  const videoRef = useRef(null);
  const [currentSegment, setCurrentSegment] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const newSegment = Math.min(
        Math.floor(scrollY / windowHeight),
        segments.length - 1
      );

      if (newSegment !== currentSegment) {
        setCurrentSegment(newSegment);
        const video = videoRef.current;
        video.currentTime = segments[newSegment].start;
        video.play();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSegment]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const { end, loopStart } = segments[currentSegment];

    const checkLoop = () => {
      if (video.currentTime >= end) {
        video.currentTime = loopStart;
        video.play();
      }
    };

    video.addEventListener("timeupdate", checkLoop);
    video.play();

    return () => {
      video.removeEventListener("timeupdate", checkLoop);
    };
  }, [currentSegment]);

  return (
    <div style={{ height: `${segments.length * 100}vh`, position: "relative" }}>
      <video
        ref={videoRef}
        src="/video/video-emons.mp4"
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

 {/* Linear gradient overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
        }}
      ></div>

      {/* Segment labels */}
      {segments.map((segment, index) => (
        <div
          key={index}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingBottom: "50px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Segment {index + 1} — Loop {segment.loopStart}s to {segment.end}s
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
