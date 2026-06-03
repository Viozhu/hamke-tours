"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Tours from "@/components/Tours";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { fetchTours, fetchTestimonials } from "@/lib/sheets";
import type { Tour, Testimonial } from "@/lib/data";
import { TOURS, TESTIMONIALS } from "@/lib/data";

export default function Home() {
  const [solid, setSolid] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const [tours, setTours] = useState<Tour[]>(TOURS as Tour[]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([...TESTIMONIALS]);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40);
      setOverHero(window.scrollY < window.innerHeight * 0.82);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetchTours().then(setTours);
    fetchTestimonials().then(setTestimonials);
  }, []);

  return (
    <>
      <Header solid={solid} overHero={overHero} />
      <main>
        <Hero />
        <ValueProps />
        <Tours tours={tours} />
        <Gallery />
        <Testimonials testimonials={testimonials} />
        <About />
        <Faq />
        <Waitlist tours={tours} />
      </main>
      <Footer />
    </>
  );
}
