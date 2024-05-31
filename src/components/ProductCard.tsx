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
            className="border p-4 bg-white text-black rounded cursor-pointer hover:shadow-lg transition duration-400 flex flex-col justify-between"
            onClick={onClick}
        >
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover mb-2" />
            <div>
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-gray-700 mb-5 mt-5">${product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard
