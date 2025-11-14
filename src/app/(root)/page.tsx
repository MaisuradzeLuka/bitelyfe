import BreakingNews from "@/features/breakingNews/ui/views/breakingNews-view";

import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";
import EditorsPick from "@/features/editorsPick/ui/views/editorsPick-view";
import Gallery from "@/features/gallery/ui/views/gallery-view";
import HeroSection from "@/features/heroSection/ui/views/heroSection-view";
import HomePageBlogs from "@/features/homePageBlogs/ui/views/homePageBlogs-view";

export default function Home() {
  return (
    <main>
      <BreakingNews />
      <HeroSection />
      <EditorsPick />
      {/*<HomePageBlogs />
      <Gallery /> */}

      <DontMiss className="purpleLinearBackground text-white" />
    </main>
  );
}
