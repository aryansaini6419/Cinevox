import React from 'react'
  import { ShieldCheck, Tv, Zap, Globe, Download, Sparkles } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Tv className="w-8 h-8 text-white" />,
    title: "Ultra HD Streaming",
    description:
      "Watch your favorite movies in stunning 4K Ultra HD with crystal-clear visuals and immersive sound.",
  },
  
  {
    id: 2,
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Lightning Fast",
    description:
      "Enjoy instant streaming with fast servers and minimal buffering on every device.",
  },
  {
    id: 3,
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Worldwide Access",
    description:
      "Stream Hollywood, Bollywood, and international content from anywhere in the world.",
  },
  {
    id: 4,
    icon: <Download className="w-8 h-8 text-white" />,
    title: "Offline Download",
    description:
      "Download your favorite movies and watch them anytime without an internet connection.",
  },
  {
    id: 5,
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Safe & Secure",
    description:
      "Your viewing experience is protected with secure streaming and privacy-focused technology.",
  },
  {
    id: 6,
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "Always Updated",
    description:
      "New movies and trending TV shows are added regularly, so there's always something new to watch.",
  },
];


const boxes2 = () => {
  return (
    <div>
      

    <section className="py-20 px-5 md:px-10 lg:px-16 bg-transparent text-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose <span className="text-green-400">CineVox?</span>
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
          Discover a premium movie streaming experience with ultra-fast
          performance, stunning picture quality, and an ever-growing collection
          of entertainment.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:bg-white/20"
          >
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-6">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-300 leading-7">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  
    </div>
  )
}

export default boxes2