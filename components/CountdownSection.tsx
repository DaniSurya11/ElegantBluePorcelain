"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Tanggal target: 90 hari ke depan agar hitungan mundur selalu aktif & dinamis
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 90);

    const interval = setInterval(() => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[100svh] flex flex-col justify-between items-center text-center overflow-hidden select-none"
    >
      {/* 1. SECTION 2 BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ElegantBluePorcelain-Theme/assets/bg-CountDown.png"
          alt="Countdown Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. DYNAMIC ACTIVE HTML LAYER - Positioned precisely at identical absolute coordinates */}
      <div className="absolute inset-0 z-20 w-full h-full max-w-[430px] mx-auto pointer-events-none">

        {/* TITLE HEADER LAYER - Canva: Brittany size 32, letter-spacing 110, line-spacing 1.4 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
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
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
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
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
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
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
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
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          className="absolute top-[61.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-[210px] sm:w-[210px] ml-[0px]"
        >
          <img
            src="/ElegantBluePorcelain-Theme/assets/devider1.svg"
            alt="Divider Ornament"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* PREMIUM COUNTDOWN TIMER (Posisi top-[78%] menggantikan Guest Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between items-center w-[85%] max-w-[340px] bg-white/[0.45] backdrop-blur-[4px] rounded-[20px] py-4 px-6 shadow-[0_8px_32px_0_rgba(15,42,74,0.04)] pointer-events-auto ml-[0px]"
        >
          {/* Card Hari */}
          <div className="flex flex-col items-center flex-1">
            <span className="font-sans text-[22px] font-semibold text-[#0f2a4a] leading-none">{timeLeft.days}</span>
            <span className="font-sans text-[9px] font-medium text-[#3A5C80] tracking-wider uppercase mt-1">Hari</span>
          </div>

          <div className="text-[#3A5C80]/[0.4] font-light text-[18px] px-1 select-none">:</div>

          {/* Card Jam */}
          <div className="flex flex-col items-center flex-1">
            <span className="font-sans text-[22px] font-semibold text-[#0f2a4a] leading-none">{timeLeft.hours}</span>
            <span className="font-sans text-[9px] font-medium text-[#3A5C80] tracking-wider uppercase mt-1">Jam</span>
          </div>

          <div className="text-[#3A5C80]/[0.4] font-light text-[18px] px-1 select-none">:</div>

          {/* Card Menit */}
          <div className="flex flex-col items-center flex-1">
            <span className="font-sans text-[22px] font-semibold text-[#0f2a4a] leading-none">{timeLeft.minutes}</span>
            <span className="font-sans text-[9px] font-medium text-[#3A5C80] tracking-wider uppercase mt-1">Menit</span>
          </div>

          <div className="text-[#3A5C80]/[0.4] font-light text-[18px] px-1 select-none">:</div>

          {/* Card Detik */}
          <div className="flex flex-col items-center flex-1">
            <span className="font-sans text-[22px] font-semibold text-[#c89116] leading-none">{timeLeft.seconds}</span>
            <span className="font-sans text-[9px] font-medium text-[#3A5C80] tracking-wider uppercase mt-1">Detik</span>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
