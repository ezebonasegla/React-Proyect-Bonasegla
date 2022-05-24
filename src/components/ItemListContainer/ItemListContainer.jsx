import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../data/data";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const items = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});



function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    items
      .then(resp => {
        setProducts(resp);
      })
      .finally(() => setLoading(false));
  }, []);

  return (

    <>
      {loading ? <Loader />
        : (<ItemList products={products} id={id} />)}
    </>
  )
}

export default ItemListContainer;



