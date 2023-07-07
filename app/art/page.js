/* eslint-disable @next/next/no-img-element */
"use client";

import NavigationBar from "@/components/NavigationBar";
import React from "react";

const Art = () => {
  return (
    <div className="bg-artBackground bg-repeat">
      <div>
        <NavigationBar />
        <div className="flex flex-col items-center justify-center">
          <div className="mt-16">
            <h1 className="flex items-center justify-center text-[64px] text-black font-bold">
              Your Art
            </h1>
            <div className="w-[500px] bg-[#ffffffe0] p-4 rounded-lg mb-4">
              <p className="flex items-center justify-center text-center">
                Reconnect with the magic of your art. This gallery whispers a
                gentle reminder of the joy it brings. Embrace your creativity
                once more, allowing your passion to shine through your
                creations. Let your art be a channel of happiness and
                fulfillment. Rekindle your love for this beautiful craft, and
                watch as your soul dances with delight.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 py-7 lg:px-32 bg-[#bdb5b5c2]">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(3).png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(2).png"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(1).png"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto1(4).png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(5).png"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(10).png"
              />
            </div>
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(6).png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(7).png"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(8).png"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(9).png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(11).png"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(12).png"
              />
            </div>
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(13).png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(14).png"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(15).png"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(16).png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/art/artphoto(17).png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
