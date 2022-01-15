import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

const Search = () => {
  const [inputProduct, setInputProduct] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [isNull, setIsNull] = useState(false);


  const handleSearch = () => {
    if (products.lenght === 0) {
      setIsNull(true);
    } else if (inputProduct === '') {
      setIsNull(true);
      alert('Por favor insira um código!');
    } else {
      setIsNull(false);
      axios
        .get(`http://localhost:4000/products/${inputProduct}`)
        .then((response) => {
          console.log(response.data);
          if (response.data === '') {
            return;
          } else {
            setProducts(response.data);
            setError('Código/produto não encontrado!');
          }
        });
      setInputProduct('');
    }
  };

  return (
    <div className="w-full pt-8 pb-4 mt-10">
      <div className="w-10/12 mx-auto">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-10/12 mx-auto flex gap-2"
        >
          <input
            className="bg-gray-100 text-gray-900 py-3 rounded px-4 w-full outline-2 outline-sky-600"
            type="text"
            placeholder="Digite o código do produto"
            id="search"
            value={inputProduct}
            onChange={(e) => setInputProduct(e.target.value)}
          />
          <Button variant="contained" type="submit" onClick={handleSearch}>
            Procurar
          </Button>
        </form>
      </div>
      <div className="w-full">
        {products.length > 0 && !isNull
          ? products.map((product) => (
              <div
                key={product.idproducts}
                className="w-6/12 mx-auto py-8 border mt-8 bg-red-200 border-red-600 rounded-md"
              >
                <div className="w-full">
                  <h1 className="w-full text-center text-2xl text-gray-900 font-bold">
                    Produto: {product.name}
                  </h1>
                </div>
                <div className="w-full">
                  <p className="w-8/12 mx-auto text-xl text-gray-900">
                    R$ {product.price},00
                  </p>
                </div>
                <div className="w-full">
                  <p className="w-8/12 mx-auto text-xl text-gray-900">
                    Estoque: {product.quantity}
                  </p>
                </div>
                <div className="w-full">
                  <p className="w-8/12 mx-auto text-xl text-gray-900">
                    Decrição: {product.description}
                  </p>
                </div>
              </div>
            ))
          : error && (
              <div className="w-full">
                <div className="w-6/12 mx-auto mt-4 bg-red-200 border border-red-400 rounded">
                  <p className="w-full text-center text-base text-red-900 font-bold py-2">
                    {error}
                  </p>
                </div>
              </div>
            )}
      </div>
    </div>
  );
};

export default Search;
