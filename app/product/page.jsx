import Link from "next/link";
import React from "react";

async function ProductsPage() {
  const response = await fetch(`https://dummyjson.com/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }

  const { products } = await response.json();
  return (
    <div>
      {products.map((p) => {
        return (
          <div key={p.id}>
            <span>{p.title}</span>
            <Link
              style={{
                background: "#396ba5",
                display: "inline-block",
                marginLeft: "10px",
                marginBottom: "20px",
              }}
              href={`/product/${p.id}`}
            >
              read more
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsPage;
