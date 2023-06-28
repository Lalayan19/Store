import { useEffect, useState } from 'react';
import Block from '../../../platform/global/oneproduct';
import './style.scss'

export default function Featured() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (<>
        <div className='featured'>

            {products.map((item, index) => (
                <Block pro={item} key={index} />
            ))}

        </div>
    </>)
}