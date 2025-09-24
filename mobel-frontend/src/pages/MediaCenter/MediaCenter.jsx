import React, { useState } from "react";
import styles from "./MediaCenter.module.css";
import bond from "../../assets/MediaCenter/bond.jpg";
import Dextrin from "../../assets/MediaCenter/Dextrin.jpg";
import FastRedGlue from "../../assets/MediaCenter/FastRedGlue.jpg";
import MobelBond from "../../assets/MediaCenter/MobelBond.jpg";
import Polythane from "../../assets/MediaCenter/Polythane.jpg";
import PVC from "../../assets/MediaCenter/PVC.jpg";
import super_bond from "../../assets/MediaCenter/super_bond.jpg";

// بيانات المنتجات
const products = [
  {
    id: 1,
    name: "Bond",
    description: "High quality transparent Wood glue high Concentration P.V.A",
    image: bond,
  },
  {
    id: 2,
    name: "Super Bond",
    description: "Extra strong adhesive for wood and industrial usage.",
    image: super_bond,
  },
  {
    id: 3,
    name: "Mobel Bond",
    description: "Special glue designed for furniture and interior works.",
    image: MobelBond,
  },
  {
    id: 4,
    name: "Fast Red Glue",
    description: "Resin widely used for adhesives, finishes, and molded objects.",
    image: FastRedGlue,
  },
  {
    id: 5,
    name: "PVC",
    description: "Durable polyvinyl chloride resin for industrial applications.",
    image: PVC,
  },
  {
    id: 6,
    name: "Dextrin",
    description: "Starch-based adhesive ideal for paper and packaging.",
    image: Dextrin,
  },
  {
    id: 7,
    name: "Fast Red Quick",
    description: "Quick-drying adhesive for fast repairs and industrial use.",
    image: FastRedGlue,
  },
  {
    id: 8,
    name: "Polythane fast spray glue",
    description: "Easy-to-use spray adhesive for multiple surfaces.",
    image: Polythane,
  },
];

export default function MediaCenter() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section className={styles.mediaCenter}>
      <div className={styles.container}>
        {/* تفاصيل المنتج */}
        <div className={styles.productDetails}>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className={styles.productImage}
          />
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
        </div>

        {/* قائمة المنتجات */}
        <aside className={styles.sidebar}>
          <h4>OUR PRODUCTS</h4>
          <ul>
            {products.map((product) => (
              <li
                key={product.id}
                className={
                  selectedProduct.id === product.id ? styles.active : ""
                }
                onClick={() => setSelectedProduct(product)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
