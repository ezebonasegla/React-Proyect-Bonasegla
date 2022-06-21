import ItemSort from '../ItemSort/ItemSort';
import './ItemList.css'


function ItemList({ products, id }) {

  const filteredType = products.filter(product => product.type === id);


  return (
    <div className="view">
      <h1>{id}</h1>
      <br></br>

      <>
        {id ?
          <ItemSort products={filteredType} />
          :
          <ItemSort products={products} />
        }
      </>
    </div>
  )
}


export default ItemList
