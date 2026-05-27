"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function OpeningSection() {
  const [guestName, setGuestName] = useState("Nama Tamu");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const toParam = params.get("to");
      if (toParam) {
        setGuestName(toParam);
      }
    }
  }, []);

  return (
    <section className="relative w-full h-[100svh] flex flex-col justify-between items-center text-center overflow-hidden select-none">

      {/* 1. SOLID DECORATIVE BACKGROUND LAYER - Rendered at 100% full, solid opacity (No transparency!) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ElegantBluePorcelain-Theme/assets/bg-image.png"
          alt="Elegant Blue Porcelain Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. DYNAMIC ACTIVE HTML LAYER - Positioned precisely at absolute coordinates */}
      <div className="absolute inset-0 z-20 w-full h-full max-w-[430px] mx-auto pointer-events-none">

        {/* MONOGRAM GRAPHIC WREATH - monocres-group.svg */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-[20.2%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] flex items-center justify-center ml-[0px]"
        >
          <img
            src="/ElegantBluePorcelain-Theme/assets/monocres-group.svg"
            alt="Monogram Wreath"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* MONOGRAM INITIALS LAYER - Center-anchored precisely at 25.2% top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-[20.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ml-[0px]"
        >
          <div className="shimmer-smooth font-sans text-[34px] sm:text-[34px] font-medium select-none tracking-normal translate-y-[2px]">
            D|S
          </div>
        </motion.div>

        {/* TITLE HEADER LAYER - Canva: Brittany size 32, letter-spacing 110, line-spacing 1.4 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="absolute top-[38.8%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full ml-[0px]"
        >
          <span
            className="font-signature text-[18px] sm:text-[18px] font-normal leading-[1.4] select-none tracking-[0.11em] inline-block py-3 px-2"
            style={{
              backgroundImage: "linear-gradient(90deg, #000000 0%, #c89116 50%, #c89116 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            The Wedding Of
          </span>
        </motion.div>

        {/* GROOM NAME LAYER - Center-anchored precisely at 45.2% top */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="absolute top-[45.2%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full ml-[0px]"
        >
          <h1 className="shimmer-smooth font-sans text-[34px] sm:text-[34px] leading-none uppercase font-medium text-center select-none">
            DENY KURNIA
          </h1>
        </motion.div>

        {/* AMPERSAND LAYER - Center-anchored precisely at 51.0% top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="absolute top-[51.2%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full ml-[0px]"
        >
          <span
            className="font-signature text-[34px] sm:text-[34px] font-normal leading-none select-none tracking-normal"
            style={{
              backgroundImage: "linear-gradient(90deg, #000000 0%, #c89116 50%, #c89116 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            &
          </span>
        </motion.div>

        {/* BRIDE NAME LAYER - Center-anchored precisely at 55.8% top */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          className="absolute top-[56.2%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full ml-[0px]"
        >
          <h2 className="shimmer-smooth font-sans text-[34px] sm:text-[34px] leading-none uppercase font-medium text-center select-none">
            SEPTIANI
          </h2>
        </motion.div>

        {/* ORNAMENTAL DIVIDER LAYER - Center-anchored precisely at 62.2% top */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.95, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="absolute top-[61.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-[210px] sm:w-[210px] ml-[0px]"
        >
          <img
            src="/ElegantBluePorcelain-Theme/assets/devider1.svg"
            alt="Divider Ornament"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* CARD CONTAINER FOR GUEST DETAILS & ACTION BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[78%] max-w-[310px] bg-white/[0.45] backdrop-blur-[4px] rounded-[20px] pt-[14px] pb-[12px] px-5 shadow-[0_8px_32px_0_rgba(15,42,74,0.04)] pointer-events-auto ml-[0px]"
        >
          {/* GUEST DETAILS */}
          <div className="flex flex-col items-center space-y-0.5 text-center leading-[1.5]">
            <p className="font-sans text-[12px] font-light tracking-normal text-[#3A5C80]">
              Kepada Yth.
            </p>
            <p className="font-sans text-[12px] font-light tracking-normal text-[#3A5C80]">
              Bapak/ Ibu/ Saudara/ i
            </p>
          </div>

          {/* GUEST NAME DISPLAY */}
          <div className="mt-2 select-all text-center">
            <h3 className="font-sans text-[17px] font-normal text-[#5A92B4] tracking-normal leading-[1.5]">
              {guestName}
            </h3>
          </div>

          {/* OPEN INVITATION BUTTON */}
          <div className="mt-2.5 flex justify-center w-full">
            <button
              type="button"
              className="px-[22px] py-[6px] bg-[#3A5C80] hover:bg-[#2C4866] text-white font-sans font-medium text-[12.5px] tracking-normal uppercase rounded-[30px] transition-all duration-300 ease-out transform active:scale-95 cursor-pointer shadow-sm"
            >
              Open Invitation
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
