import React, { MouseEventHandler, Ref } from "react";

interface Props {}

const Background: React.FC<Props> = ({}) => {
  return (
    <div>
      <video
        loop
        autoPlay
        muted
        playsInline
        className="fixed w-screen h-screen object-fill"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
