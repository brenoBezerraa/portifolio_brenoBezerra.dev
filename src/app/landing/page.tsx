"use client";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      <Header />

      <Hero />

    </main>
  );
}