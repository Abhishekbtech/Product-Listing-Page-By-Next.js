import React from 'react'

interface Product {
    image: string;
    title: string;
    price: number;
}

interface ProductCardProps {
    product: Product;
    onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    return (
        <div
            className="border p-4 bg-white text-black rounded cursor-pointer flex flex-col justify-between transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
            onClick={onClick}
        >
            <img src={product.image} alt={product.title} className="w-full h-48  mb-2" />
            <div>
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-gray-700 mb-5 mt-5">${product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard
