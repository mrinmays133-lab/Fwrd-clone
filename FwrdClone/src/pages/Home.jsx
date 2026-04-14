import React from "react";
import ProductCard from "../components/ProductCard";
import "../home.css";

const shops = [
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_MatchingSets_2x.jpg",
    title: "Matching Sets",
    description:
      "Elegance, made easy. These chic sets take all the guesswork out of getting ready."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_KJEdit_2x.jpg",
    title: "Kendall's Edit",
    description:
      "Get inspired by our forever muse's new-season buys, imbued with a confident minimalism."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_DestinationDresses_2x.jpg",
    title: "Destination Dresses",
    description:
      "Because picturesque beach sunsets call for equally captivating dresses."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_SpringShop_2x.jpg",
    title: "The Spring Shop",
    description:
    "Fresh pastels, floaty fabrics, and more of the season's best trends, all in one place."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_VacationShop_2x.jpg",
    title: "The Vacation Shop",
    description:
    "Everything to pack for a tropical paradise. Think matching sets, swim, dresses, & more."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_RHWPicks_2x.jpg",
    title: "Rosie's Picks",
    description:
    "Explore FWRD Fashion Director Rosie Huntington-Whiteley's wardrobe foundations and seasonal heroes."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_SoftFocus_2x.jpg",
    title: "Soft Focus",
    description:
    "Easy separates, delicate hues, and dainty fabrics that welcome a spring refresh."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_TheColorReport_2x.jpg",
    title: "The Color Report",
    description:
    "The most-wanted seasonal hues we're predicting to be the next big thing."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_SpringDressShop_2x.jpg",
    title: "The Spring Dress Shop",
    description:
    "Refresh your dress collection with these standout designer silhouettes."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_WeddingGuest_2x.jpg",
    title: "For the Wedding Guest",
    description:
    "Your style guide to RSVP season, from destination weddings to garden ceremonies."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_NightOut_2x.jpg",
    title: "Night Out",
    description:
    "Striking pieces for those who know dressing up is the best part of the night."
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/031626_FW_Shops_ElevatedEssentials_2x.jpg",
    title: "Elevated Essentials",
    description:
    "Well-made basics that transform everyday dressing into effortless luxury."
  },
   {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_WesternBoho.jpg",
    title: "Desert Bound",
    description:
      "Live out your Western dreams with this edit of lived-in denim, statement belts, and flowy tops.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_CleanLines.jpg",
    title: "Clean Lines",
    description:
      "Considered tailoring, refined accessories, and well-cut separates, curated for the modern minimalist.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_NewArrivals.jpg",
    title: "New Arrivals",
    description:
      "Your ultimate destination for the latest designer ready-to-wear and accessories.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_ColorCombos.jpg",
    title: "Trending Color Pairings",
    description:
      "Dial up the saturation with the hottest color combinations of the moment.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_MiuMiu.jpg",
    title: "Why Miu Miu Is a Style Essential",
    description:
      "From instantly recognizable accessories to preppy separates, Miu Miu transforms everyday pieces into pillars of cool-girl style.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_FutureHeirlooms.jpg",
    title: "Future Heirlooms",
    description:
      "Today’s buys, tomorrow’s staples. These are the investment buys you’ll reach for time and time again.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_MatchingSets.jpg",
    title: "Matching Sets",
    description:
      "Whether paired together or styled apart, matching sets make everyday dressing a breeze.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_SpringFWRDPastel.jpg",
    title: "Spring FWRD in Pastels",
    description:
      "From light yellows to peach tones, let these pastel hues grace your wardrobe.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_NeutralDresses.jpg",
    title: "Neutral Dresses",
    description:
      "Embrace a subtle refresh in these easy, always polished neutrals.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_PersonalityPacked.jpg",
    title: "Personality Packed Wardrobe",
    description:
      "Explore this maximalist edit of Pucci prints, bold hues, & playful details.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/April/041326_FW_Trends_HaeloDrop3.jpg",
    title: "Haelo: Season 3",
    description:
      "Introducing Haelo Season 3, a vision of sculpted sensuality crafted from embroidered lace corsetry, pleated sheer jersey, and draped, lace-trimmed georgette.",
  },
  {
    image: "https://is4.revolveassets.com/images/up/2026/March/033026_FW_Trends_8Dresses.jpg",
    title: "8 Dresses You Need",
    description:
      "Let us sort out your capsule dress collection, from your new favorite LBD to your ultimate vacation essentials.",
  }
];

const Home = () => {
  return (
    <>
      {/* SECTION 1 */}
      <section className="shop-section">
        <h1 className="shop-title">
          Welcome to FaSHioN StOrE
        </h1>

        <div className="shop-grid">
          {shops.slice(0, 12).map((shop) => (
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
          {shops.slice(12).map((shop) => (
            <ProductCard key={shop.title} {...shop} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;