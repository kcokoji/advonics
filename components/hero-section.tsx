"use client";
// import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Container from "./container";
import { Button } from "./ui/button";
// import { Input } from "./ui/input";
import Image from "next/image";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { SearchSchema } from "@/schemas/search";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function HeroSection() {
  const searchParams = useSearchParams();

  const { replace } = useRouter();

  //   const form = useForm<z.infer<typeof SearchSchema>>({
  //     resolver: zodResolver(SearchSchema),
  //     defaultValues: {
  //       query: "",
  //     },
  //   });

  //   const handleQuery = (value: z.infer<typeof SearchSchema>) => {
  //     const params = new URLSearchParams(searchParams);
  //     if (value && value.query) {
  //       params.set("query", value.query);
  //     } else {
  //       params.delete("query");
  //     }
  //     replace(`/marketplace?${params.toString()}`);
  //   };

  return (
    <Container className="flex justify-center items-center flex-col py-32 gap-4">
      <h1 className="max-w-4xl text-center  text-3xl font-bold leading-tight  sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
        Home Of Innovative <span className="text-primary">Aerospace</span> and{" "}
        <span className="text-blue">Defense</span> Solutions
      </h1>
      <p className="max-w-3xl text-muted-foreground text-center  text-lg leading-relaxed md:text-2xl md:leading-relaxed">
        Your Partner in Innovation and Operational Excellence
      </p>

      <div className="flex justify-center bg-muted-foreground/50 mt-8 items-center text-center relative aspect-[1/1] md:aspect-[2.6/1] z-0 overflow-hidden rounded-lg shadow-xl w-full">
        {/* Image */}
        <Image
          src="/images/plane-1.jpg"
          alt="Hero section background image"
          className="absolute inset-0 object-cover w-full h-full z-0"
          fill
          priority
          loading="eager"
        />

        {/* Dimmed overlay */}
        <div className="backdrop backdrop-brightness-50 absolute inset-0 z-1"></div>
      </div>
    </Container>
  );
}
