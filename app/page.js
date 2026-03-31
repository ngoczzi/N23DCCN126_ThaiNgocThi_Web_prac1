import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  try {
    const res = await fetch(
      "https://api.allorigins.win/raw?url=https://fakestoreapi.com/products",
      { cache: "no-store" }
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Fetch error:", error);
    return [];
  }
}
export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}