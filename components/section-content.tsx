import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { motion } from "framer-motion";
import { FaChevronCircleDown } from "react-icons/fa";
import Pamplate from "./pamplate";


const qr='/images/Suhasini_QR.png'
const images=['/images/File3.png','/images/File5.png','/images/File6.png','/images/File16.png','/images/File16.png','/images/File17.png','/images/File18.png','/images/File19.png','/images/File20.png','/images/File23.png']
export function HomeContent() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative mt-40 z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          What we are
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-lg md:text-xl text-gray-300 drop-shadow-lg">
          Scroll down to explore more about us!
        </p>
        <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} >
        <FaChevronCircleDown className="text-4xl mt-4 animate-bounce cursor-pointer" />
        </button>
      </div>

      {/* Optional Overlay for Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
}


export function AboutContent (){
  return (
    <section id="about" className="bg-black text-white py-16 px-8 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-6">About Suhasini</h2>

        {/* Section Content */}
        <p className="text-lg leading-relaxed">
          Suhasini is a social club dedicated to empowering young girls and
          promoting social awareness through impactful initiatives. Established
          on <strong>January 24, 2014</strong>, our club works towards creating
          a society where every girl child has access to education, equal
          opportunities, and a life of dignity.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          Our initiatives include <strong>awareness campaigns</strong>,{" "}
          <strong>skill development programs</strong>, and social initiatives
          like <strong>Story Behind Red</strong> to educate and empower
          communities. Suhasini is a movement to inspire change, bring smiles,
          and empower lives.
        </p>

        {/* CTA (optional) */}
        <div className="mt-8">
          <a
            href="https://www.instagram.com/jecrc.suhasini/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow-md transition"
          >
            Join Us Today
          </a>
        </div>
      </div>
    </section>
  );
};



export function WorkContent() {
  return (
    <div className="text-center  mx-auto px-4">
      <div className="my-28">
        <h2 className="text-4xl  mb-4 text-white underline font-extrabold">What We Do?</h2>
      </div>
      <div>
        {/* Image Section */}
      <div className="flex flex-wrap w-full justify-center gap-8 mb-16">
        {/* Image Items */}
        {images.map((image, index) => (
          <Image
            key={index}
            className="w-32 h-32 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full"
            src={image}
            width={200}
            height={200}
            alt={`random image`}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export function ContactContent() {
  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      <div>
        <h2 className="text-4xl font-bold mb-4 text-white">
          Join our community
        </h2>
      </div>
      <div>
        <p className="text-lg mb-4 text-gray-300">Get regular updates </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <Image
          src={qr}
          alt="QR Code"
          width={250}
          height={250}
          className="rounded-lg"
        />
      </div>
      {/* <Pamplate /> */}
    </div>
  );
}


export function FooterContent() {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      {/* Heading */}
      <div>
        <h2 className="text-4xl md:text-7xl font-bold mb-12 text-white">
          Stay Connected
        </h2>
      </div>

      {/* Animated Name Section */}
      <div className="mb-20 flex justify-center items-center text-5xl md:text-9xl text-white">
        <span className="animate-pulse">Suhasini</span>
      </div>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-between mt-16 p-4 text-white space-y-4 sm:space-y-0">
        {/* Footer Text */}
        <p className="text-sm md:text-base">
          Made by{" "}
          <a
            href="https://github.com/suhasini"
            className="underline hover:text-gray-300 transition-colors"
          >
            Suhasini
          </a>
        </p>

        {/* Footer Image */}
        <img
          src="/suhasini.png"
          alt="Suhasini"
          className="h-10 mx-auto sm:mx-0"
        />
      </footer>
    </div>
  );
}

