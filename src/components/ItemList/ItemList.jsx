import Item from "../Item/Item"
import './ItemList.css'


function ItemList({products, id}) {
  return (
    <div className="view">
    <h1>{id}</h1>
    <div className="item-list">
      {id?
        products.filter(product => product.type === id).map((product) => <Item key={product.id} product={product}/>):
        products.map(product => <Item key={product.id} product={product}/>)
      }
    </div></div>
  )
}

export default ItemList
