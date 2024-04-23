import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductCart = () => {
  const cartItems = useSelector((state) => state.product.ProductCart); // Replace `cart` with your actual cart state name
  const renderList = cartItems.map((cartItem) => {
    const { id, title, image, price, category } = ProductCart.product; // Assuming each cart item has a `product` property
    return (
      <div className="four wide column" key={id}>
        <NavLink to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
                {/* You might also display quantity if available */}
                <div className="meta">Quantity: {cartItem.quantity}</div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductCart;
