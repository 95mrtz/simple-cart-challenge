import {useEffect, useState} from "react";

import api from "./api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Product} from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [listShopping, setListShopping] = useState<{id: string; cant: number}[]>([]);
  const [sumPrice, setSumPrice] = useState(0);
  const [cantProducts, setCantProducts] = useState(0);

  useEffect(() => {
    api.list().then(setProducts);
  }, []);

  const mostrarBtn = (idProdcuct: string) => {
    const aux = listShopping.find((element) => element.id === idProdcuct);
    let result = 0;

    if (aux) {
      result = aux.cant;
    }

    return result > 0 ? true : false;
  };

  const mostrarCant = (idProdcuct: string) => {
    const aux = listShopping.find((element) => element.id === idProdcuct);

    return aux ? aux.cant : "ESTO NO FUNCIONO";
  };

  const addStamp = (idProdcuct: string, price: number) => {
    const aux = listShopping.find((element) => element.id === idProdcuct);

    if (!aux) {
      let product: {id: string; cant: number} = {id: idProdcuct, cant: 1};

      if (listShopping.length === 0) {
        setListShopping([product]);
      }
      if (listShopping.length !== 0) {
        setListShopping([...listShopping, product]);
      }
    }

    if (aux) {
      aux.cant = aux.cant + 1;
      setListShopping([...listShopping]);
    }

    setCantProducts(cantProducts + 1);
    setSumPrice(sumPrice + price);
  };

  const removeStamp = (idProdcuct: string, price: number) => {
    const aux = listShopping.find((element) => element.id === idProdcuct);

    if (!aux) {
      alert("ESTA ESTAMPITA NO ESTA");
    }

    if (aux) {
      aux.cant = aux.cant - 1;
      setListShopping([...listShopping]);
    }

    setCantProducts(cantProducts - 1);
    setSumPrice(sumPrice - price);
  };

  return (
    <main className="flex flex-col justify-between bg-slate-50 dark:bg-gray-800">
      <Header />
      <section className="p-4 flex-1 grid grid-cols-auto-fill gap-3">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col gap-3">
            <img className="w-full object-contain rounded-lg" src={product.image} />
            <div className="flex flex-col gap-2 h-full">
              <p className="font-medium text-xl dark:text-slate-200">{product.title}</p>
              <p className="text-gray-400 dark:text-slate-300">{product.description}</p>
            </div>
            {mostrarBtn(product.id) ? (
              <div className="flex flex-row gap-1">
                <button
                  className="text-slate-100	bg-blue-500 leading-[48px] rounded text-xl font-medium cursor-pointer px-4 mt-auto"
                  onClick={() => removeStamp(product.id, product.price)}
                >
                  -
                </button>
                <span className="grow text-slate-100	bg-blue-500 leading-[48px] rounded text-xl font-medium text-center px-4 mt-auto">
                  {mostrarCant(product.id)}
                </span>
                <button
                  className="text-slate-100	bg-blue-500 leading-[48px] rounded text-xl font-medium cursor-pointer px-4 mt-auto"
                  onClick={() => addStamp(product.id, product.price)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="text-slate-100	bg-blue-500 leading-[48px] rounded text-xl font-medium cursor-pointer px-4 mt-auto"
                onClick={() => addStamp(product.id, product.price)}
              >
                Agregar
              </button>
            )}
          </article>
        ))}
      </section>
      <aside className="sticky bottom-0 m-auto pb-4 ">
        <button className="text-slate-100	bg-blue-600 leading-[48px] rounded text-xl font-medium cursor-pointer px-4 shadow-gray-300">
          {cantProducts} productos (total: ${sumPrice})
        </button>
      </aside>
      <Footer />
    </main>
  );
}

export default App;
