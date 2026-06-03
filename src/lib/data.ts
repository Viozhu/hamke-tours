export const BRAND = {
  name: "Hamke Tours",
  ko: "함께",
  meaning: '"juntos" en coreano',
  tagline: "Tours en español por Corea del Sur",
  followers: "53.7K",
  posts: "696",
  guide: "@comekimchi",
  instagram: "https://www.instagram.com/hamketours",
  youtube: "https://www.youtube.com/watch?v=lax4kk9qtio",
} as const;

export type TourStatus = "open" | "wait" | "soon";

export interface Tour {
  id: string;
  season: string;
  title: string;
  dates: string;
  days: number;
  status: TourStatus;
  popular: boolean;
  blurb: string;
  places: string[];
  priceLabel: string;
  slot: string;
  placeholder: string;
}

export const VALUE_PROPS = [
  { icon: "lang",  title: "100% en español",     desc: "Tu guía habla tu idioma todo el viaje. Cero barreras, cero traductores." },
  { icon: "group", title: "Grupos pequeños",      desc: "Cupos limitados por salida. Trato cercano y nada de multitudes." },
  { icon: "all",   title: "Todo incluido",        desc: "Hoteles, traslados internos, entradas y experiencias. Tú solo disfruta." },
  { icon: "local", title: "Guía local de verdad", desc: "Chang vive en Corea y te muestra el país real, no la versión de folleto." },
] as const;

export const TOURS: Tour[] = [
  {
    id: "otono-2026",
    season: "Otoño",
    title: "Tour Otoño 2026",
    dates: "Octubre 2026",
    days: 10,
    status: "open",
    popular: true,
    blurb: "El follaje dorado de Corea en su mejor momento. Nuestra salida estrella del año.",
    places: ["Seúl", "Nami Island", "DMZ", "Suwon", "Gyeongju", "Busan"],
    priceLabel: "Consultar precio",
    slot: "tour-otono",
    placeholder: "Foto otoño / Nami Island",
  },
  {
    id: "primavera-2026",
    season: "Primavera",
    title: "Tour Primavera 2026",
    dates: "Abril 2026",
    days: 9,
    status: "wait",
    popular: false,
    blurb: "Cerezos en flor por todo el país. La temporada más fotogénica de Corea.",
    places: ["Seúl", "Jinhae", "Gyeongju", "Busan", "Jeju"],
    priceLabel: "Consultar precio",
    slot: "tour-primavera",
    placeholder: "Foto cerezos en flor",
  },
  {
    id: "invierno-2026",
    season: "Invierno",
    title: "Tour Invierno 2026",
    dates: "Diciembre 2026 – Enero 2027",
    days: 8,
    status: "soon",
    popular: false,
    blurb: "Nieve, mercados de invierno, templos y luces. Corea en su versión más mágica.",
    places: ["Seúl", "Nami Island", "Gangwon", "Busan"],
    priceLabel: "Próximamente",
    slot: "tour-invierno",
    placeholder: "Foto invierno / nieve",
  },
];

export const DAY_TOURS = [
  { id: "dmz",      name: "DMZ",          sub: "Frontera con Corea del Norte" },
  { id: "nami",     name: "Nami Island",  sub: "+ Petite France & Italy Village" },
  { id: "suwon",    name: "Suwon",        sub: "Fortaleza Hwaseong" },
  { id: "gyeongju", name: "Gyeongju",     sub: "La capital milenaria" },
] as const;

export const GALLERY = [
  { id: "g-gyeongbok", label: "Palacio Gyeongbokgung", span: 2 },
  { id: "g-nami",      label: "Nami Island en otoño",  span: 1 },
  { id: "g-hanbok",    label: "Hanbok",                 span: 1 },
  { id: "g-grupo",     label: "Grupo Hamke 2025",       span: 2 },
  { id: "g-dmz",       label: "DMZ",                    span: 1 },
  { id: "g-comida",    label: "Comida coreana",          span: 1 },
  { id: "g-busan",     label: "Busan",                  span: 1 },
  { id: "g-noche",     label: "Seúl de noche",          span: 1 },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Fue mejor de lo que imaginé. La paciencia y la serenidad de Chang para llevar al grupo no tienen precio. La mejor decisión que tomé.",
    name: "Holi M.",
    place: "Viajera 2025 · 🇲🇽",
    slot: "t-1",
  },
  {
    quote: "Conocer un país tan maravilloso de la mano de alguien que lo vive de verdad cambia todo. Nunca olvidaré este viaje.",
    name: "Carolina R.",
    place: "Tour Otoño · 🇨🇴",
    slot: "t-2",
  },
  {
    quote: "Todo en español, todo resuelto. Solo me dediqué a disfrutar. Gente increíble y momentos que me llevo para siempre.",
    name: "Diego A.",
    place: "Tour 2024 · 🇦🇷",
    slot: "t-3",
  },
] as const;

export const FAQ = [
  { q: "¿En qué idioma son los tours?",         a: "100% en español, de principio a fin. Tu guía habla tu idioma durante todo el viaje, así que no necesitas saber coreano ni inglés." },
  { q: "¿Qué incluye el tour?",                 a: "Alojamiento, traslados internos, entradas a las atracciones del itinerario, guía en español y varias comidas típicas. Te enviamos el detalle exacto de cada salida al consultar." },
  { q: "¿De cuántas personas son los grupos?",  a: "Trabajamos con grupos pequeños y cupos limitados por salida. Por eso las fechas se llenan rápido y manejamos lista de espera." },
  { q: "¿Necesito visa para Corea del Sur?",    a: "La mayoría de viajeros latinoamericanos no necesita visa para estancias turísticas cortas, pero según tu nacionalidad puede pedirse el permiso K-ETA. Te orientamos con tu caso al reservar." },
  { q: "¿Cómo aparto mi cupo?",                 a: "Te unes a la lista de espera del tour que te interesa, te contactamos por WhatsApp con la info y precio, y aseguras tu lugar con un depósito." },
  { q: "¿Cómo me conecto a internet en Corea?", a: "Recomendamos una eSIM (trabajamos con Holafly) para que llegues con datos desde el primer minuto. Te pasamos el código de descuento al reservar." },
] as const;
