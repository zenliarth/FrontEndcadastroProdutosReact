import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormDialog(props) {
  const [editProduct, setEditProduct] = useState({
    idproducts: props.idproducts,
    name: props.name,
    price: props.price,
    quantity: props.quantity,
    description: props.description,
  });

  const editProductNotify = () => toast('Produto editado com sucesso!');

  const handleEditProduct = () => {
    axios.put('http://localhost:4000/edit', {
      id: editProduct.idproducts || props.idproducts,
      name: editProduct.name || props.name,
      price: editProduct.price || props.price,
      quantity: editProduct.quantity || props.quantity,
      description: editProduct.description || props.description,
    });
    handleClose();
    editProductNotify();
    props.getProducts();
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (event) => {
    setEditProduct((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <ToastContainer />
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do produto"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.name}
            onChange={handleChangeValues}
            minLength="3"
            maxLength="20"
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Preço do produto"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.price}
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="Quantidade do produto"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.quantity}
            onChange={handleChangeValues}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descrição do produto"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={props.description}
            minLength="3"
            maxLength="20"
            onChange={handleChangeValues}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleEditProduct}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
