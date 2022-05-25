import React from "react";

interface Props {}

function Appbar({}: Props) {
  return (
    <>
      <div
        className="fixed left-1 z-50 text-5xl p-4 font-bold text-white mobile:text-2xl"
        style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
      >
        WE HAVE ALL GIF IMAGE FILES ABOUT RETRO
      </div>
      <div
        className="fixed right-1 z-50 text-5xl p-4 font-bold text-white mobile:text-2xl"
        style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
      >
        DO YOU LOVE RETRO?
      </div>
      <div className="fixed bottom-1 z-50 text-5xl p-4 font-bold text-white mobile:text-base">
        PLEASE CLICK GIFS AND SEE MORE INFO
      </div>
    </>
  );
}

export default Appbar;
