import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import FormDialog from '../Dialog/dialog';

const ProductsList = (props) => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    getProducts();
  }, [products]);

  const notifyDelete = () => toast('Produto removido com sucesso!');

  function getProducts() {
    axios.get('http://localhost:4000/products').then((response) => {
      setProducts(response.data);
    });
  }

  function removeItem(id) {
    axios.delete(`http://localhost:4000/products/${id}`).then(() => {
      notifyDelete();
      getProducts();
    });
  }
  function selectProduct(product) {
    setOpen(true);
    setSelectedProduct(product);
  }

  

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        idproducts={selectedProduct.idproducts}
        name={selectedProduct.name}
        price={selectedProduct.price}
        quantity={selectedProduct.quantity}
        description={selectedProduct.description}
        getProducts={getProducts}
        setProducts={setProducts}
      />
      <div className="w-full flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <ul
            className="bg-red-200 w-60 flex flex-col justify-around px-10 py-4 rounded-lg border border-red-600 cursor-pointer"
            key={product.idproducts}
          >
            <ToastContainer />

            <li className="text-base pt-2 font-bold text-center">
              {product.name}
            </li>
            <li className="text-base pt-2">Código: {product.idproducts}</li>
            <li className="text-base pt-2">Preço: {product.price},00</li>
            <li className="text-base pt-2">Qtd: {product.quantity}</li>
            <li className="text-base pt-2">{product.description}</li>
            <li className="text-center pt-2 flex gap-2">
              <Button
                variant="contained"
                color="primary"
                onClick={() => selectProduct(product)}
              >
                Editar
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  if (
                    window.confirm(`Deseja remover o produto ${product.name}`)
                  )
                    removeItem(product.idproducts);
                }}
              >
                Excluir
              </Button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
