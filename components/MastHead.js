import React from "react";
import Image from "next/image";
import HeroImg from "../assets/images/hero-img.jpg";

const MastHead = () => {
  return (
    <div>
      <Image src={HeroImg} />
    </div>
  );
};

export default MastHead;
