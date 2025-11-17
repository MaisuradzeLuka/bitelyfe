import React, { Suspense } from "react";
import TravelNews from "./travelNews";
import RecentPosts from "./recentPosts";
import LifeStyle from "./lifeStyle";

export default function HomeBlogsContainer() {
  return (
    <>
      <LifeStyle />
      <TravelNews />
      <Suspense fallback={null}>
        <RecentPosts />
      </Suspense>
    </>
  );
}
