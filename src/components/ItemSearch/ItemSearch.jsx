import { React, useState } from 'react';
import { TextField } from '@mui/material';
import Item from '../Item/Item';
import { useEffect } from 'react';

function ItemSearch({ products }) {
    const [search, setSearch] = useState('');
    const [searchedProducts, setSearchedProducts] = useState(products);

    useEffect(() => {
        setSearchedProducts(
            products.filter(product =>
                product.type.toLowerCase().includes(search.toLowerCase()
                )
                ||

                product.name.toLowerCase().includes(search.toLowerCase()
                ))
        );

    }, [search, products]);



    return (
        <>
            <div className="search-container">
                <TextField
                    id="search"
                    label="Buscar"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    margin="normal"
                    variant="outlined"
                />
            </div>
            <div className="item-list">
                {
                    searchedProducts.map(product => <Item key={product.id} product={product} />)
                }
            </div>

        </>
    );
}

export default ItemSearch;


