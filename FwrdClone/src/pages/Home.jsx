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
  }
];

const Home = () => {
  return (
    <section className="shop-section">
      
      <h1 className="shop-title">
        Welcome to FaSHioN StOrE
      </h1>

      <div className="shop-grid">
        {shops.map((shop) => (
          <ProductCard key={shop.title} {...shop} />
        ))}        
      </div>
    </section>

  );
};

export default Home;