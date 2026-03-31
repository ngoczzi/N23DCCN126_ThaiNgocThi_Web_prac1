import Navbar from "@/components/Navbar";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function ProductDetail({ params }) {
  const { id } = await params;  
  const product = await getProduct(id);

  return (
    <div>
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">

          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-contain bg-white rounded"
          />

          <div>
            <h1 className="text-2xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-gray-400 mb-4">
              {product.category}
            </p>

            <p className="mb-6 text-gray-300">
              {product.description}
            </p>

            <p className="text-2xl text-green-500 font-bold mb-6">
              ${product.price}
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}