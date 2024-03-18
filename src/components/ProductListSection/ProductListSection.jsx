import { useState } from "react";
import products from "../../app/data.json";
import heartIcon from "/Public/assets/heart.png";
import redheart from "/Public/assets/redheart.png";

const ProductListSection = () => {
  // State to track products in the wishlist
  const [wishlist, setWishlist] = useState([]);

  // Function to toggle product in wishlist
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div className="product-container">
      {products.map((product, i) => {
        const isProductInWishlist = wishlist.includes(product.id);
        return (
          <div className="product-card" key={i}>
            <div className="product-card-img">
              {product.stock === 0 && (
                <span className="outofstock">OUT OF STOCK</span>
              )}
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-card-details">
              <div className="title-wishlist">
                <span className="title">{product.title}</span>
                <img
                  src={isProductInWishlist ? redheart : heartIcon}
                  alt="WishList Icon"
                  className="wishlist-product-card hide-heart-img "
                  onClick={() => toggleWishlist(product.id)}
                />
              </div>
              <div className="desc-heart-container">
                <span className="description">{product.description}</span>
                <img
                  src={isProductInWishlist ? redheart : heartIcon}
                  alt="WishList Icon"
                  className="wishlist-product-card sm-hide-element"
                  onClick={() => toggleWishlist(product.id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListSection;
