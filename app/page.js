import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold px-6 pt-6">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}