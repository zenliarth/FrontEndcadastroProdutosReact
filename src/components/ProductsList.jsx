import React from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsList = (props) => {
  
  const products = props.products ? props.products : [];

  const notifyDelete = () => toast('Produto removido com sucesso!');

  function removeItem(id) {
    const list = JSON.parse(localStorage.getItem('products'));
    const newList = list.filter(item => item.id !== id);
    localStorage.setItem('products', JSON.stringify(newList));
    notifyDelete();
    props.getProducts();
  }

  return (
    <div className="w-full flex flex-wrap gap-4 justify-around">
      {products.map((product) => (
        <ul
          className="bg-red-200 px-10 py-4 rounded-lg border border-red-600"
          key={product.id}
        >
        <ToastContainer autoclose={500}/>
          <li className="text-base font-bold text-center">{product.name}</li>
          <li className="text-base pt-2">Preço: {product.price}</li>
          <li className="text-base pt-2">R$ {product.quantity},00</li>
          <li className="text-base pt-2">{product.description}</li>
          <li className="text-center pt-2">
            <Button variant="contained" color="error" 
            onClick={() => removeItem(product.id)}>
              Excluir
            </Button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductsList;
