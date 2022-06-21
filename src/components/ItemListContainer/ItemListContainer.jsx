import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from 'firebase/firestore'


function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore()

    const queryCollection = collection(db, 'productos')
    getDocs(queryCollection)
      .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [])


  const { id } = useParams();

  return (

    <>
      {loading ? <Loader />
        : (<ItemList products={products} id={id} />)}
    </>
  )
}

export default ItemListContainer;

