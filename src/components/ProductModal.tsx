import React from 'react';

interface Product {
    image: string;
    title: string;
    description: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
}

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-black">
            <div className="bg-white p-4 rounded max-w-xl w-full flex">
                <div className="w-1/2 pr-2">
                    <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                    <img src={product.image} alt={product.title} className="w-full h-65 object-cover mb-2" />
                </div>
                <div className="w-1/2 pl-2 flex flex-col justify-between mt-5">
                    <div>
                        <p>{product.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700 mt-2">${product.price}</span>
                            <span className="text-gray-700 mt-2">Rating: {product.rating.rate}</span>
                        </div>
                    </div>
                    <button
                        className="mb-4 mt-3 px-4 py-2 rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-red-800 ..."
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;