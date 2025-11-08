import Image from "next/image";
import React from "react";

export default function AboutMain() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
      <div className="relative aspect-[1.5] lg:aspect-[1.1] xl:aspect-[1.5]">
        <Image
          src="/aboutMain.webp"
          alt="about"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col text-left text-[#333]  justify-center">
        <h1 className="text-[#333] uppercase mb-3">About us</h1>
        <h2 className="text-[22px] text-black font-bold tracking-tighter leading-[1.2] mb-3">
          Celebrating the Culinary World
        </h2>
        <p>
          Welcome to our corner of flavor and curiosity — where food is more
          than what’s on the plate. Our blog explores the heart of the culinary
          scene: from the newest restaurant openings and local dining gems to
          global food trends, gourmet products, and vibrant festivals that bring
          people together.
        </p>
        <p>
          We’re here to taste, experience, and tell the stories behind what
          makes every bite, aroma, and dish special. Whether it’s a cozy bistro
          tucked away in Tbilisi or a groundbreaking food trend taking over
          kitchens worldwide — we dig deeper to uncover the passion, creativity,
          and culture that shape the culinary world.
        </p>
        <p>
          Our mission is to inspire food lovers, travelers, and curious eaters
          alike — offering honest reviews, insider insights, and a flavorful
          journey through everything food-related.
        </p>
      </div>
    </section>
  );
}
