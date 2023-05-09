import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";

function ProductOverview() {
  const { name } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const q = query(collection(db, "products"), where("name", "==", name));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size === 0) {
        console.log("No matching products found.");
      } else {
        querySnapshot.forEach((doc) => {
          setProduct(doc.data());
        });
      }
    };

    fetchProduct();
  }, [name]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {product.description}
          </h2>
          <p className="mt-4 text-gray-500">{product.description}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div key={product.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{product.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {product.description}
              </dd>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
