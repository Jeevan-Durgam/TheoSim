import React from "react";

type Props = {};

const Background = (props: Props) => {
  return (
    <div className="absolute inset-0 brightness-125">
      <div
        className="h-full w-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("/bgimage2.jpg")' }}
      ></div>
      <div className="absolute inset-0 bg-black/0"></div>
    </div>
  );
};

export default Background;
