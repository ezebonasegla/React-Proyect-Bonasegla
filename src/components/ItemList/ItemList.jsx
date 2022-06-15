import Item from "../Item/Item"
import './ItemList.css'
import { Dropdown } from 'react-bootstrap';
import { useState } from "react";


function ItemList({ products, id }) {

  const [sort, setSort] = useState('default');
  
  const sortBy = (sort) => {
    if (sort === 'lowest-price') {
      return products.sort((a, b) => a.price - b.price)
    } else if (sort === 'highest-price') {
      return products.sort((a, b) => b.price - a.price)
    } else if (sort === 'relevance') {
      return products.sort((a, b) => b.relevance - a.relevance)
    } else {
      return products
    }
  }

  return (
    <div className="view">
      <h1>{id}</h1>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Ordenar por
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item  onClick={() => setSort('relevance')}>Mas relevantes</Dropdown.Item>
          <Dropdown.Item  onClick={() => setSort('lowest-price')}>Menor precio</Dropdown.Item>
          <Dropdown.Item onClick={() => setSort('highest-price')}>Mayor precio</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


      <div className="item-list">
        {id ?
          sortBy(sort).filter(product => product.type === id).map((product) => <Item key={product.id} product={product} />)
          :
          sortBy(sort).map(product => <Item key={product.id} product={product} />)
        }
      </div>
      </div>
  )
}

export default ItemList
