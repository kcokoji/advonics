import React from "react";
import Container from "./container";
import Image from "next/image";
import Header from "./header";
import Link from "next/link";
import { Button } from "./ui/button";

export default function AboutUs() {
  return (
    <Container className="bg-muted py-28 flex justify-center items-center flex-col space-y-10 text-blue">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
        <Image
          src="/images/plane-1.jpg"
          width={500}
          height={500}
          alt="Mobile Phone"
          className="rounded-md object-cover"
        />
        <div className="flex flex-col gap-8">
          <Header title="Who We Are" />
          <div className="flex gap-4 justify-start flex-col items-start">
            <span className="flex items-center gap-2">
              <h2>
                Over the last 15 years, we have become one of the leading
                company known for quality performance, innovative in strategies
                and Technology, also customer responsiveness with a reputation
                for dependability and high integrity. Advonics today is stronger
                than ever, we have the resources and capacity to grow the vision
                to meet your changing needs
              </h2>
            </span>
          </div>
          <div className="flex gap-4 justify-start flex-col items-start">
            <span className="flex items-center gap-2">
              <h2>
                Today, Advonics Services Nigeria Limited provides a wide-range
                service of the entire major domestic and foreign products, a
                full range of both Security & Safety Surveillance, Telecoms,
                Maritime-Security, Aviation, Transportation and Logistics
                Services, with our Corporate Head office in Lagos, Nigeria.
              </h2>
            </span>
          </div>
          <Button className="w-fit">Read More</Button>
        </div>
      </div>
    </Container>
  );
}

// Logo

// +234 810 170 5756
// support@whotstudios.com
// ©2021 Whotafrica. All Rights Reserved.
