import HomeClient from "@/components/HomeClient";
import { getInstagramImages } from "@/lib/instagram";

export default async function Home() {
  const images = await getInstagramImages();

  return <HomeClient initialImages={images} />;
}
