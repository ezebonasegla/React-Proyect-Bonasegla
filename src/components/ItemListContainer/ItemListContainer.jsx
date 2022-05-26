import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, where, query } from 'firebase/firestore'


function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore()

    const queryCollection = collection(db, 'productos')
    /* const queryCollectionFilter = query(queryCollection, where('type', '==', 'vodka')) */
    getDocs(queryCollection)
      .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [])

  /* useEffect(() => {
    const db = getFirestore()
    const dbQuery = doc(db, 'productos', 'ALtDxAhPxyKV7CBUXmfm')
    getDoc(dbQuery)
    .then(resp => setProducts( { id: resp.id, ...resp.data() }))
  }, []) */

  console.log(products);

  const { id } = useParams();

  return (

    <>
      {loading ? <Loader />
        : (<ItemList products={products} id={id} />)}
    </>
  )
}

export default ItemListContainer;

