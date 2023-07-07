"use client";
import Image from "next/image";
import date from "@/public/date.png";

import NavigationBar from "@/components/NavigationBar";
import { GiJourney } from "react-icons/gi";
import { BsFillEnvelopeHeartFill } from "react-icons/bs";
import { FaSpaceShuttle } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex  flex-col w-full  justify-between ">
      <NavigationBar />
      <div className="bg-coverPhoto bg-cover w-full flex flex-row justify-around rounded-b-[55px]">
        <div className="flex flex-col items-center gap-12 p-10">
          <Image src={date} width={300} alt="Your Image" />
          <div className="flex flex-row justify-center items-center gap-4 text-white">
            <h1 className="text-[64px]">7</h1>
            <div className="flex flex-col justify-center items-center font-bold">
              <p>th</p>
              <p>THU</p>
            </div>
            <h1 className="text-[28px] font-semibold text-[#222">
              The day we looked at each other differently.
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {/* <NavigationBar /> */}
          <div></div>
          <h1 className="mr-10 mt-12 text-white flex items-center justify-center  font-bold text-[42px] uppercase">
            Oh and you in all your vibrant youth
            <br /> How could anything bad ever happen to you?
          </h1>
          <div></div>
        </div>
      </div>
      <div className="bg-[#F5F5DC]  min-h-screen">
        <div className="flex flex-col gap-12 pt-4 justify-center items-center pb-12">
          <h1 className="text-[#FADA5E] font-bold text-[42px] uppercase">
            THE JOURNEY
          </h1>
          <div className="flex flex-row justify-between gap-24  items-center">
            <button
              className="flex gap-2 items-center text-[24px] bg-green-200 rounded-xl p-12 hover:bg-green-400"
              onClick={() => router.push("/gallery")}
            >
              <GiJourney size={25} className="text-green-400" />
              <h1 className="font-medium">gallery</h1>
            </button>
            <button
              className="flex gap-2 items-center text-[24px] bg-yellow-200 rounded-xl p-12"
              onClick={() => router.push("/art")}
            >
              <BsFillEnvelopeHeartFill size={25} className="text-yellow-400" />
              your art
            </button>
            <button
              onClick={() => router.push("/universe")}
              className="flex gap-2 items-center text-[24px] bg-purple-200 rounded-xl p-12"
            >
              <FaSpaceShuttle size={25} className="text-purple-400" />
              your space
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
