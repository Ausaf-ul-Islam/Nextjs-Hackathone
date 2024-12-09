
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProduct";

import Footer from "./components/Footer";
import LatestProducts from "./components/LatestProducts";
import ShopexOffer from "./components/ShopeOffer";
import UniqueFeature from "./components/UniqueFeature";
import TrendingProducts from "./components/TrendingProducts";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <UniqueFeature />
      <TrendingProducts />
      <Footer />
    </>
  );
}
