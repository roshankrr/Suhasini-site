import React from "react";
// import { motion } from "framer-motion";

export function HomeContent() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          What we do
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-lg md:text-xl text-gray-300 drop-shadow-lg">
          Scroll down to explore more about us!
        </p>
      </div>

      {/* Optional Overlay for Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
}


export function AboutContent() {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      {/* Heading */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-white">
          About Suhasini
        </h2>
      </div>

      {/* Description */}
      <div>
        <p className="text-base md:text-lg text-gray-300 mb-8">
          We are a creative team passionate about delivering exceptional digital
          experiences. Our expertise spans across various domains, ensuring we
          can tackle any challenge.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {/* Image Items */}
        {Array.from({ length: 6 }).map((_, index) => (
          <img
            key={index}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full"
            src="/random.jpg"
            alt={`random image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


// export function AboutContent() {
//   return (
//     <motion.div
//       className="text-center max-w-2xl mx-auto px-4"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <div>
//         <h2 className="text-4xl font-bold mb-16 text-white">About Suhasini</h2>
//       </div>
//       <div>
//         <p className="text-lg text-gray-300 mb-8">
//           We are a creative team passionate about delivering exceptional digital
//           experiences. Our expertise spans across various domains, ensuring we
//           can tackle any challenge.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           {Array.from({ length: 6 }).map((_, index) => (
//             <motion.img
//               key={index}
//               className="w-48 h-48 rounded-full"
//               src="/random.jpg"
//               alt={`random image ${index + 1}`}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true, amount: 0.2 }}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }



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
          className="w-12 h-12 md:w-16 md:h-16 mx-auto sm:mx-0"
        />
      </footer>
    </div>
  );
}
