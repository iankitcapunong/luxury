import { useEffect } from "react";
import Hero from "../components/Hero";
import Discover from "../components/Discover";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Hero />
      <Discover />
    </>
  );
}
