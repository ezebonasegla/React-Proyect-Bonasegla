import { Dropdown } from 'react-bootstrap';
import ItemSearch from '../ItemSearch/ItemSearch';
import { useState } from 'react';

function ItemSort({products}) {
    const [sort, setSort] = useState('lowest-price');

    const sortBy = (sort) => {
        if (sort === 'lowest-price') {
            products.sort((a, b) => a.price - b.price)
            return Array.from(products)
        } else if (sort === 'highest-price') {
            products.sort((a, b) => b.price - a.price)
            return Array.from(products)
        } else if (sort === 'relevance') {
            products.sort((a, b) => b.relevance - a.relevance)
            return Array.from(products)
        } else {
            return products
        }
    }


    return (
        <>
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
            {<ItemSearch products={sortBy(sort)} />}
        </>
    )
}

export default ItemSort;