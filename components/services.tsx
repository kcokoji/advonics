import React from "react";
import Container from "./container";
import Image from "next/image";
import Header from "./header";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Services() {
  return (
    <Container className="py-28 flex justify-center items-center flex-col space-y-10 text-blue">
      <Header title="Our Services" className="text-center" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/plane-1.jpg"
            alt="Plane 1"
            width={400}
            height={400}
            className="rounded-md"
          />
          <h2 className="text-3xl font-semibold">Technical Support</h2>
          <p>
            {" "}
            Provides expert assistance to ensure optimal performance of
            aerospace and defense equipment.
          </p>
          <Button className="w-fit">Read more</Button>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src="/images/plane-1.jpg"
            alt="Plane 1"
            width={400}
            height={400}
            className="rounded-md"
          />
          <h2 className="text-3xl font-semibold">Operational Training</h2>
          <p>
            {" "}
            Offers comprehensive training programs for operators and technical
            staff.
          </p>
          <Button className="w-fit">Read more</Button>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src="/images/plane-1.jpg"
            alt="Plane 1"
            width={400}
            height={400}
            className="rounded-md"
          />
          <h2 className="text-3xl font-semibold">Site Surveys</h2>
          <p>
            Conducts detailed site evaluations to identify and implement
            operational improvements.
          </p>
          <Button className="w-fit">Read more</Button>
        </div>
      </div>
    </Container>
  );
}

// Logo

// +234 810 170 5756
// support@whotstudios.com
// ©2021 Whotafrica. All Rights Reserved.
