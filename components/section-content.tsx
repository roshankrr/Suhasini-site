import React from "react";

export function HomeContent() {
  return (
    <div className="text-center w-full max-w-6xl mx-auto px-4 ">
      <div className="mb-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-h-screen object-cover mt-20 rounded-lg shadow-lg shadow-white"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h1 className="text-6xl font-bold mb-4 text-white">
          Welcome to Suhasini
        </h1>
      </div>
      <div>
        <p className="text-xl text-gray-300">
          Scroll down to explore more about us!
        </p>
      </div>
    </div>
  );
}

export function AboutContent() {
  return (
    <div className="text-center max-w-2xl mx-auto px-4 ">
      <div>
        <h2 className="text-4xl font-bold mb-4 text-white">About Suhasini</h2>
      </div>
      <div>
        <p className="text-lg text-gray-300">
          We are a creative team passionate about delivering exceptional digital
          experiences. Our expertise spans across various domains, ensuring we
          can tackle any challenge.
        </p>
        <div className="flex justify-center gap-4">
          <img
            className="w-48 h-48 rounded-full"
            src="/random.jpg"
            alt="random image"
          />
          <img
            className="w-48 h-48 rounded-full"
            src="/random.jpg"
            alt="random image"
          />
          <img
            className="w-48 h-48 rounded-full"
            src="/random.jpg"
            alt="random image"
          />
          <img
            className="w-48 h-48 rounded-full"
            src="/random.jpg"
            alt="random image"
          />
          <img
            className="w-48 h-48 rounded-full"
            src="/random.jpg"
            alt="random image"
          />
          <img
            className="w-48 h-48 rounded-full"
            src="/random.jpg"
            alt="random image"
          />
        </div>
      </div>
    </div>
  );
}

export function WorkContent() {
  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      <div>
        <h2 className="text-4xl font-bold mb-4 text-white">Our Work</h2>
      </div>
      <div>
        <ul className="text-lg text-gray-300">
          <li>Web Development</li>
          <li>Mobile Applications</li>
          <li>UI/UX Design</li>
          <li>Digital Marketing</li>
        </ul>
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
        <p className="text-lg mb-4 text-gray-300">Get in touch with us</p>
      </div>
      <div>
        <a
          href="mailto:info@example.com"
          className="text-xl underline hover:text-blue-400 text-gray-300"
        >
          info@example.com
        </a>
      </div>
    </div>
  );
}
export function FooterContent() {
  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      <div>
        <h2 className="text-7xl font-bold mb-20 text-white">
          Stay Connected
        </h2>
      </div>
      <div className="top-0 left-0 mb-40 w-full h-full flex justify-center items-center text-9xl text-white">
        <span className="animate-pulse">Suhasini</span>
      </div>
      <footer className="fixed flex mt-16 justify-end left-0 w-full text-center p-4 text-white">
        <p>
          Made by{" "}
          <a href="https://github.com/suhasini" className="underline">
            Suhasini
          </a>
        </p>
        <img src="/suhasini.png" alt="Suhasini" className="w-16 h-16 mx-auto" />
      </footer>
    </div>
  );
}
