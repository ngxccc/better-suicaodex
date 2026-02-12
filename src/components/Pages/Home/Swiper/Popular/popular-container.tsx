import { getCachedPopularMangas } from "@/lib/mangadex/manga";
import PopularSwiper from "./index";

export default async function PopularContainer() {
  const popularData = await getCachedPopularMangas(["vi"], false);

  return <PopularSwiper initialData={popularData} />;
}
