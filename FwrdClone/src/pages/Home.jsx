import React from "react";
import ProductCard from "../components/ProductCard";
import "../home.css";

const shops = [
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_MatchingSets_2x.jpg",
    title: "Matching Sets",
    description:
      "Elegance, made easy. These chic sets take all the guesswork out of getting ready.",
    category: "matching-sets"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_KJEdit_2x.jpg",
    title: "Kendall's Edit",
    description:
      "Get inspired by our forever muse's new-season buys, imbued with a confident minimalism.",
    category: "kendalls-edit"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_DestinationDresses_2x.jpg",
    title: "Destination Dresses",
    description:
      "Because picturesque beach sunsets call for equally captivating dresses.",
    category: "destination-dresses"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_SpringShop_2x.jpg",
    title: "The Spring Shop",
    description:
    "Fresh pastels, floaty fabrics, and more of the season's best trends, all in one place.",
    category: "spring-shop"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_VacationShop_2x.jpg",
    title: "The Vacation Shop",
    description:
    "Everything to pack for a tropical paradise. Think matching sets, swim, dresses, & more.",
    category: "vacation-shop"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_RHWPicks_2x.jpg",
    title: "Rosie's Picks",
    description:
    "Explore FWRD Fashion Director Rosie Huntington-Whiteley's wardrobe foundations and seasonal heroes.",
    category: "rosies-picks"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_WesternBoho.jpg",
    title: "Desert Bound",
    description:
      "Live out your Western dreams with this edit of lived-in denim, statement belts, and flowy tops.",
    category: "desert-bound"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_CleanLines.jpg",
    title: "Clean Lines",
    description:
      "Considered tailoring, refined accessories, and well-cut separates, curated for the modern minimalist.",
    category: "clean-lines"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_NewArrivals.jpg",
    title: "New Arrivals",
    description:
      "Your ultimate destination for the latest designer ready-to-wear and accessories.",
    category: "new-arrivals"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_ColorCombos.jpg",
    title: "Trending Color Pairings",
    description:
      "Dial up the saturation with the hottest color combinations of the moment.",
    category: "trending-color-pairings"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_MiuMiu.jpg",
    title: "Why Miu Miu Is a Style Essential",
    description:
      "From instantly recognizable accessories to preppy separates, Miu Miu transforms everyday pieces into pillars of cool-girl style.",
    category: "miu-miu-style-essential"
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_FutureHeirlooms.jpg",
    title: "Future Heirlooms",
    description:
      "Today's buys, tomorrow's staples. These are the investment buys you'll reach for time and time again.",
    category: "future-heirlooms"
  }

];

const Home = () => {
  return (
    <>
      {/* SECTION 1 */}
      <section className="shop-section">
        <h1 className="shop-title">
          Welcome to LUXION StOrE
        </h1>

        <div className="shop-grid">
          {shops.slice(0,6).map((shop) => (
            <ProductCard key={shop.title} {...shop} />
          ))}
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="shop-section second-section">
        <h1 className="shop-title">
          trends
        </h1>

        <div className="shop-grid">
          {shops.slice(6).map((shop) => (
            <ProductCard key={shop.title} {...shop} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;