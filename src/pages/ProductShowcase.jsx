import React from "react";
import BackButton from "../components/ui/BackButton";
import { portfolioData } from "../data/content";
import "./ProductShowcase.css";

const ProductShowcase = () => {
  return (
    <div className="product-page">
      <BackButton />
      <h2 className="section-header">INVENTORY — BUILT ITEMS</h2>

      <div className="product-grid">
        {portfolioData.products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-platform-badge">{product.platform}</div>
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-tech-list">
                {product.tech.map((t, i) => (
                  <span key={i} className="product-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              {product.link && (
                <a
                  href={product.link}
                  className="product-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ VIEW PROJECT
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
