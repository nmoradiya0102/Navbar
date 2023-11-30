import React, { useEffect, useState } from 'react'
import { dataOfproduct } from './Data'
import Card from './Card';

const Home = () => {
    const [products, setProducts] = useState([]);
    const filterData = () => {
        const filterProduct = dataOfproduct.filter((pro) => pro.availability === true);
        setProducts(filterProduct);
    };

    useEffect(() => {
        filterData()
    }, []);
    return (
        <>
            <div className='row md-4'>
                {products?.map((item, index) => (
                    <Card productname={item.product_name} price={item.product_price} description={item.description} status={item.availability} />
                ))}
            </div>
        </>
    )
}

export default Home;