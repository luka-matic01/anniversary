/* eslint-disable @next/next/no-img-element */
"use client";
import NavigationBar from "@/components/NavigationBar";
import { Carousel } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

export default function Example() {
  // Generate an array of image filenames
  const imageFilenames = [
    "galerija1.png",
    "galerija2.png",
    "galerija3.png",
    "galerija4.png",
    "galerija5.png",
    "galerija6.png",
    "galerija7.png",
    "galerija8.png",
    "galerija9.png",
  ];

  return (
    <div className="bg-galleryBackground bg-cover min-h-screen">
      <NavigationBar />
      <div className="p-12">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[600px]">
            <div className="flex flex-col items-center justify-center my-10 bg-[#ffffff86] rounded-[14px] p-4">
              <h1 className="flex items-center justify-center text-[64px] text-black">
                OUR GALLERY
              </h1>
              <div className="w-[500px]">
                <p className="flex items-center justify-center text-center">
                  Each photo tells a tale of laughter, stolen kisses, and
                  endless affection. Let the love overflow as you explore this
                  gallery, and may it remind you that our love grows stronger
                  with every passing day. Get ready to swoon and smile because
                  cuteness overload awaits
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="flex-grow"></div>
          <div className="h-[600px] w-[700px] ">
            <Carousel className="rounded-xl bg-yellow-100 ">
              {imageFilenames.map((filename) => (
                <img
                  key={filename}
                  src={`gallery/${filename}`}
                  alt={`image ${filename}`}
                  className={`h-full w-full ${
                    filename === "galerija2.png"
                      ? "object-contain"
                      : "object-cover"
                  }`}
                />
              ))}
            </Carousel>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  );
}
