"use client";
import ProductCard from "@/components/ProductCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductModal from "@/components/ProductModal";

// Define a type for the product
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="container mx-auto p-4 bg-black text-white ">
      <div className="container mx-auto p-4 bg-black text-white flex flex-wrap justify-center">
        <h1 className="text-5xl font-bold mb-4 w-full text-center">
          Product Listing
        </h1>
        <input
          type="search"
          placeholder="Search products"
          className="mb-6 mt-2 p-2 border border-gray-300 rounded text-black w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
