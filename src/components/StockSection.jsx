import React from 'react'
import ProductsList from './ProductsList';

const StockSection = (props) => {
    const products = props.products ? props.products : [];

    return (
    <div className="w-full py-20 flex bg-gray-900" name="#products">
      <ProductsList products={products}/>
    </div>
  );
}

export default StockSection
