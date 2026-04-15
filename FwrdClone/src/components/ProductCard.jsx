const ProductCard = ({ image, title, description, link = "#" }) => {
  return (
    <div className="shop-card">

      <div className="shop-card__image-wrapper">
        <img
          src={image}
          alt={title || "Product image"}
          className="shop-card__image"
          loading="lazy"
        />
      </div>

      <h3 className="shop-card__title">
        {title}
      </h3>

      <p className="shop-card__description">
        {description}
      </p>

      <a href={link} className="shop-card__link">
        Shop Now
      </a>

    </div>
  );
};

export default ProductCard;