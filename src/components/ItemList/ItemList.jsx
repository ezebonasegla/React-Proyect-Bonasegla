import ItemSearch from '../Search/Search';
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


  const filteredType = sortBy(sort).filter(product => product.type === id);


  return (
    <div className="view">
      <h1>{id}</h1>
      <br></br>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Ordenar por
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSort('relevance')}>Mas relevantes</Dropdown.Item>
          <Dropdown.Item onClick={() => setSort('lowest-price')}>Menor precio</Dropdown.Item>
          <Dropdown.Item onClick={() => setSort('highest-price')}>Mayor precio</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


      <>
        {id ?
          <ItemSearch products={filteredType} />
          :
          <ItemSearch products={sortBy(sort)} />
        }
      </>
    </div>
  )
}

export default ItemList
