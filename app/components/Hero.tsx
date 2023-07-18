"use client";

import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-fill object-center absolute inset-0 z-[-1]"
            autoPlay
            muted
          >
            <source src="/videos/BibleAdventures.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex justify-center items-center gap-24 absolute bottom-64 left-[450px]">
          <Link href="/journeyOne">
            <img
              src="/pointer.png"
              alt=""
              className="w-12 h-12"
              title="Click here for the First Journey"
            />
          </Link>
          <Link href="/journeyTwo">
            <img
              src="/pointer.png"
              alt=""
              className="w-12 h-12"
              title="Click here for the Second Journey"
            />
          </Link>
          <Link href="/journeyThree">
            <img
              src="/pointer.png"
              alt=""
              className="w-12 h-12"
              title="Click here for the Third Journey"
            />
          </Link>
          <Link href="/journeyFour">
            <img
              src="/pointer.png"
              alt=""
              className="w-12 h-12"
              title="Click here for the Fourth Journey"
            />
          </Link>
          <Link href="/journeyFive">
            <img
              src="/pointer.png"
              alt=""
              className="w-12 h-12"
              title="Click here for the Fifth Journey"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
