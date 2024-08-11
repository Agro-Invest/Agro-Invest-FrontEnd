import React from "react";
import bgUrl from "../assets/images/hero.png";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Tag } from "./ui/Tag";
const Hero = () => {
  return (
    <div
      className={`bg-[url(./hero.png)] bg-cover bg-center w-full h-full text-white py-[64px] overflow-hidden`}
    >
      <Container className={``}>
        <div className="max-w-[900px] space-y-[24px]">
          <Tag variant={"primary"} className={`translate-y-6`}>
            Welcome to AgroInvest
          </Tag>
          <h1 className="font-semibold text-[96px] leading-none w-full">
            Empowering Agriculture Through Investments
          </h1>
          <p className="text-[18px] w-1/2  ">
            We connect farmers with investers accross the world to promote
            agricultural growth and for a sustainable future
          </p>
          <Button variant={"primary"} className={`w-1/2`}>
            Get started
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
