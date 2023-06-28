import { useEffect, useState } from 'react';
import './style.scss'
import Block from '../../../platform/global/oneproduct';

export default function Allprod() {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setAllProducts(data));
      }, []);
    return (<>
    <div className='uxaki'>

    </div>
        <div className='mainProd'>
            <h2>SHOP</h2>
            <div className='getAll'>
            {allProducts.map((item, index) => (
                    <Block pro={item} key={index} />
            ))}
            </div>
        </div>
    </>)
}