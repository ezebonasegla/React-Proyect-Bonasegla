import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../data/data";
import Loader from "../Loader/Loader";

const items = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});



function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    items
      .then(resp => {
        setProducts(resp);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <Loader/> : (<ItemList products={products} />)}
    </div>
  )
}

export default ItemListContainer;



