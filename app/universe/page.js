"use client";
import NavigationBar from "@/components/NavigationBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Universe = () => {
  const [universe, setUniverse] = useState(null);

  const handleFetching = async () => {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=BZNJeXwdnkwAl0czwns5NdOw3StVUpBQjE7yuJFv`
    );
    if (response.ok) {
      const data = await response.json();
      setUniverse(data);
    }
  };
  console.log(universe);

  useEffect(() => {
    handleFetching();
  }, []);

  return (
    <div className="min-h-screen bg-galaxy bg-cover">
      <NavigationBar />
      <h1 className="text-white p-4 uppercase text-[48px]">
        Today&apos;s fun fact
      </h1>
      <div className="flex justify-center items-center">
        <div className="max-w-[600px] mx-auto p-8 bg-white shadow-md rounded-lg mt-6">
          {universe && (
            <div>
              <h1 className="text-3xl font-bold mb-4">{universe.title}</h1>
              {universe.date && (
                <p className="text-gray-600 mb-2">
                  {new Date(universe.date).toLocaleDateString("de-DE")}
                </p>
              )}
              <p className="text-[#181717] font-medium mb-4">
                {universe.explanation}
              </p>
              <div className="flex items-center justify-center">
                <Image
                  alt="Image of the Day"
                  src={universe.hdurl}
                  width={400}
                  height={400}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Universe;
