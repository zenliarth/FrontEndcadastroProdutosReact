import React from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ProductsList = (props) => {
  const products = props.products ? props.products : [];

  const notifyDelete = () => toast('Produto removido com sucesso!');
  const notifyError = () => toast('Erro ao remover produto!');

  function removeItem(id) {
      axios.delete(`http://localhost:4000/products/${id}`)
      .then(() => {
        notifyDelete();
        props.getProducts();
      })
      .catch(() => {
        notifyError();
      });
  }

  return (
    <div className="w-full flex flex-wrap gap-4 justify-around">
      {products.map((product) => (
        <ul
          className="bg-red-200 px-10 py-4 rounded-lg border border-red-600"
          key={product.idproducts}
        >
           <ToastContainer autoclose={500}/>
          <li className="text-base pt-2 font-bold text-center">{product.name}</li>
          <li className="text-base pt-2">Código: {product.idproducts}</li>
          <li className="text-base pt-2">Preço: {product.price}</li>
          <li className="text-base pt-2">Qtd:  {product.quantity}</li>
          <li className="text-base pt-2">{product.description}</li>
          <li className="text-center pt-2">
            <Button
              variant="contained"
              color="error"
              onClick={() => removeItem(product.idproducts)}
            >
              Excluir
            </Button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductsList;
