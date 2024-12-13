import Image from "next/image";
import Bannertrial from "../components/Bannertrial";

export default function Home() {
  return (
    <>
      {/* First Section */}
      <div>
        <Bannertrial/>
        {/* Using a regular <img> tag for the first banner */}
        <img
          src="/banner/mainbanner.png"
          alt="Main Banner"
          className="w-full"
        />
      </div>

      {/* Second Section */}
      <div className="relative h-screen">
        {/* Using Next.js Image component for optimized loading */}
        <Image
          src="/banner/mainbanner.png" // Replace with your image path
          alt="Banner Image"
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Maintains the aspect ratio
          quality={100} // Keeps the highest quality
          priority // Loads the image quickly
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center text-center md:text-left items-start text-white font-semibold p-6 md:p-24 space-y-6">
          <p className="text-lg">SUMMER 2020</p>
          <h1 className="text-4xl md:text-6xl font-bold">NEW COLLECTION</h1>
          <div className="text-sm md:text-base font-normal space-y-1">
            <p>We know how large objects will act, but things on a small scale.</p>
            <p>But things on a small scale.</p>
          </div>
          <button className="px-8 py-3 bg-buttoncolor text-lg rounded-md hover:bg-green-700 transition duration-300">
            SHOP NOW
          </button>
        </div>
      </div>
    </>
  );
}
