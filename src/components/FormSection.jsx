import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ProductsList from './ProductsList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Search from './Search';

const FormSection = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [listItens, setListItens] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const notify = () => toast('Produto adicionado com sucesso!');

  function handleSubmit(e) {
    e.preventDefault();
    saveProduct();
  }

  function createProduct() {
    const newProduct = {
      name,
      price,
      quantity,
      description,
    };
    return newProduct;
  }

  function saveProduct() {
    if (name === '' || price === '' || quantity === '' || description === '') {
      alert('Preencha todos os campos');
      return;
    } else {
      const newProduct = createProduct();
      axios
        .post('http://localhost:4000/products', newProduct)
        .then(() => {
        })
        .catch(() => {
          alert('Erro ao salvar produto');
        });
        notify();
        getProducts();
        setName('');
        setPrice('');
        setQuantity('');
        setDescription('');
    }
  }
  function getProducts() {
    axios.get('http://localhost:4000/products').then((response) => {
      setListItens(response.data);
    });
  }

  return (
    <div className="w-full h-screen flex bg-white">
      <ToastContainer autoclose={1000} />
      <div className="w-10/12 mx-auto flex flex-row">
        <div className="w-2/5 mx-auto py-20">
          <form
            onSubmit={handleSubmit}
            className="flex w-10/12 mx-auto flex-col itens-center gap-1 text-gray-100"
          >
            <h1 className="w-full text-center text-4xl text-gray-900 font-bold py-4">
              Cadastro de Produto
            </h1>
            <label className="text-xl mt-4 text-gray-900" htmlFor="name">
              Produto:{' '}
            </label>
            <input
              className="bg-gray-100 py-3 rounded text-gray-900 px-4 text-xl outline-2 outline-sky-600"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="text-xl text-gray-900" htmlFor="preco">
              Preço:{' '}
            </label>
            <input
              className="bg-gray-100 py-3 rounded text-gray-900 px-4 text-xl outline-2 outline-sky-600"
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label className="text-xl text-gray-900" htmlFor="quantidade">
              Quantidade:{' '}
            </label>
            <input
              className="bg-gray-100 py-3 rounded text-gray-900 px-4 text-xl outline-2 outline-sky-600"
              type="text"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label className="text-xl text-gray-900" htmlFor="descricao">
              Descrição:{' '}
            </label>
            <textarea
              className="bg-gray-100 py-3 px-4 rounded text-gray-900 mb-2 outline-2 outline-sky-600"
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button variant="contained" color="info" type="submit">
              Cadastrar
            </Button>
          </form>
        </div>
        <div className="w-3/5 mx-auto pt-20">
          <h1 className="text-4xl pt-4 font-bold text-center text-gray-900 w-11/12">
            Buscar Produto
          </h1>
          <Search products={listItens}/>
          {/* <div className=" w-10/12 mx-auto">
            {listItens.length > 0 ? (
              <div>
                <h1 className="text-3xl py-4 font-bold text-center text-gray-900 w-11/12 mx-auto">
                  Mostrando todos os produtos
                </h1>
                <ProductsList
                  products={listItens}
                  getProducts={getProducts}
                />
              </div>
            ) : (
              <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-xl text-gray-900">
                  Nenhum produto cadastrado ...
                </h1>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FormSection;
