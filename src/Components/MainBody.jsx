import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import InfoRow from "./InfoRow";
import AppCard from "./AppCard";
import Footer from "./Footer";
import { appsData } from "./Data/config";
import Hero from "./Hero";

function MainBody() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextCard = () => {
    setCurrentIndex((prev) => (prev === appsData.length - 1 ? 0 : prev + 1));
  };
  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? appsData.length - 1 : prev - 1));
  };

  return (
    <div className="w-full min-h-screen bg-[#f6f6f7] px-10 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">
        Welcome to Vidify
      </h1>
      <p className="text-sm text-gray-600 mb-8">
        Enhance your video creation with the power of AI
      </p>
      <Hero />
      
      <FeatureCard
        image="/images/b1.png"
        heading="Generate Stunning AI-Videos from Product Images"
        text="Turn your product images into scroll-stopping marketing videos in seconds. Just upload images; we'll add dynamic animations and effects for a high-converting result."
        icon="/images/gen.png"
        buttonText="Generate AI Video"
      />

      <div className="max-w-5xl mx-auto rounded-2xl bg-[#f4f2ff] my-8 p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-gray-900">
          Drive More Sales with Vidify AI Product Videos
        </h2>
        <p className="mt-1 mb-6 text-sm text-gray-500">
          Transform product marketing & your brand presence with stunning
          videos.
        </p>

        <div className="space-y-3">
          <InfoRow
            icon="/images/pg.png"
            heading="Documentation"
            text="Read our step-by-step guidelines to explore and master every Vidify feature."
            arrow="/images/arr1.png"
          />
          <InfoRow
            icon="/images/cst.png"
            heading="Support"
            text="Our team is always ready to help reach out anytime to solve any issue."
            arrow="/images/arr1.png"
          />
          <InfoRow
            icon="/images/success.png"
            heading="Vidify Walkthroughs"
            text="Learn how to get the most out of Vidify with expert guidance."
            arrow="/images/arr1.png"
          />
        </div>
      </div>

      <FeatureCard
        image="/images/c4.png"
        heading="Want to schedule a call?"
        text="We have marketing experts ready to help build your video marketing strategy and guide you in scaling your store with video. Want to book a one-to-one session? It’s FREE!"
        icon="/images/call.png"
        buttonText="Talk to Vidify Expert"
      />

      <div className="relative mx-auto mt-8 rounded-2xl bg-gray-50 p-6 shadow-lg">
        <h2 className="mb-4 text-sm font-semibold text-gray-700">
          Other apps from Storeware
        </h2>

        <AppCard {...appsData[currentIndex]} />

        <div className="pt-4 bg-gray-50 bottom-4 right-6 flex gap-3">
          <button
            onClick={prevCard}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100"
          >
            <img src="/images/prev.png" alt="Previous" className="h-4 w-4" />
          </button>

          <button
            onClick={nextCard}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100"
          >
            <img src="/images/next.png" alt="Next" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainBody;
