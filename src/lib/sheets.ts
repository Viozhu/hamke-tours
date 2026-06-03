import { Tour, Testimonial, TOURS, TESTIMONIALS } from "./data";

const BASE =
  typeof window !== "undefined"
    ? process.env.NEXT_PUBLIC_SHEETS_URL ?? ""
    : "";

export async function fetchTours(): Promise<Tour[]> {
  if (!BASE) return [...TOURS] as Tour[];
  try {
    const res = await fetch(`${BASE}?sheet=tours`);
    if (!res.ok) return [...TOURS] as Tour[];
    const data = (await res.json()) as Tour[];
    if (!Array.isArray(data) || data.length === 0) return [...TOURS] as Tour[];
    return data;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[sheets] fetch failed, using static fallback:", err);
    }
    return [...TOURS] as Tour[];
  }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  if (!BASE) return [...TESTIMONIALS];
  try {
    const res = await fetch(`${BASE}?sheet=testimonios`);
    if (!res.ok) return [...TESTIMONIALS];
    const data = (await res.json()) as Testimonial[];
    if (!Array.isArray(data) || data.length === 0) return [...TESTIMONIALS];
    return data;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[sheets] fetch failed, using static fallback:", err);
    }
    return [...TESTIMONIALS];
  }
}
