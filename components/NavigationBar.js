"use client";
import "@/app/globals.css";
import { Rajdhani } from "next/font/google";
import { AiFillHome } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BsCameraFill } from "react-icons/bs";
import { FaSpaceShuttle } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import {
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
} from "@material-tailwind/react";

import { useRouter } from "next/navigation";

export default function NavigationBar() {
  const router = useRouter();
  return (
    <div className="absolute top-4 right-4 z-50">
      <SpeedDial placement="left" className="bg-[#8b3dff]">
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full bg-[#8b3dff]">
            <FiMenu className="h-5 w-5 transition-transform group-hover:rotate-45 bg-[#8b3dff]" />
          </IconButton>
        </SpeedDialHandler>

        <SpeedDialContent className="flex-row justify-between gap-12">
          <button onClick={() => router.push("/")}>
            <SpeedDialAction
              className="p-4 flex flex-row gap-3"
              onClick={() => router.push("/")}
            >
              <AiFillHome />
              <h1 className="uppercase font-[500]">Homepage</h1>
            </SpeedDialAction>
          </button>

          <button onClick={() => router.push("/gallery")}>
            <SpeedDialAction className="p-4 flex flex-row gap-3">
              <GrGallery />
              <h1 className="uppercase font-[500]">Our Gallery</h1>
            </SpeedDialAction>
          </button>
          <button onClick={() => router.push("/art")}>
            <SpeedDialAction className="p-4 flex flex-row gap-3">
              <BsCameraFill />
              <h1 className="uppercase font-[500]">Your Art</h1>
            </SpeedDialAction>
          </button>
          <button onClick={() => router.push("/universe")}>
            <SpeedDialAction
              className="p-4 flex flex-row gap-3"
              onClick={() => router.push("/universe")}
            >
              <FaSpaceShuttle />
              <h1 className="uppercase font-[500]">Universe</h1>
            </SpeedDialAction>
          </button>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
