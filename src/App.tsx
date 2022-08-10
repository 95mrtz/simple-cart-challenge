import {useEffect, useState} from "react";

import api from "./api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Product} from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  return (
    <main className="flex flex-col justify-between">
      <Header />
      <section className="p-4 flex-1 grid grid-cols-auto-fill gap-3">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col gap-3">
            <img className="w-full object-contain rounded-lg" src={product.image} />
            <div className="flex flex-col gap-2 h-full">
              <p className="font-medium text-xl">{product.title}</p>
              <p className="text-gray-400">{product.description}</p>
            </div>
            <button className="text-slate-100	bg-blue-500 leading-[48px] rounded text-xl font-medium cursor-pointer px-4 mt-auto">Agregar</button>
          </article>
        ))}
      </section>
      <aside className="sticky bottom-0 m-auto pb-4 ">
        <button className="text-slate-100	bg-blue-600 leading-[48px] rounded text-xl font-medium cursor-pointer px-4 shadow-gray-300">3 productos (total: $12)</button>
      </aside>
      <Footer />
    </main>
  );
}

export default App;
