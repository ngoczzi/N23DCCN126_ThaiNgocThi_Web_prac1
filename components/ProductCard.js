import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer">
        
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 w-full object-contain mb-4 bg-white rounded"
        />

        <h2 className="font-semibold text-lg line-clamp-1">
          {product.title}
        </h2>

        <p className="text-gray-400 text-sm mb-2">
          {product.category}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-green-500">
            ${product.price}
          </span>

          <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
            Add +
          </button>
        </div>
      </div>
    </Link>
  );
}