import { Header } from "@/components";
import { HeroSection } from "./components/HeroSection";
import { Accordion } from "./components/Accordion";
import { Testi } from "./components/Testi";

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <Testi />
    </main>
  );
};
