import { useEffect, useState } from 'react';
import Block from '../../../../platform/global/oneproduct';
import './style.scss'

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8')
          .then(response => response.json())
          .then(data => setProducts(data));
      }, []);
    

return (<>

    <div className='someColl'>
    <h2>
        FEATURED PRODUCTS
    </h2>
            {products.map((item, index) => (
                    <Block pro={item} key={index} />
            ))}
    </div>
 </>)
}