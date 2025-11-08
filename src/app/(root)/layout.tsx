import Footer from "@/features/footer/ui/views/footer-view";
import Header from "@/features/header/ui/views/header-view";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
