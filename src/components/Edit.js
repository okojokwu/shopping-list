import React, { useState, useContext, useEffect } from 'react';
import { Context as ShoppingContext } from '../context/shoppingContext';
import { ModalContext } from './modal/modalContext';

const EditItem = ({ data }) => {
  const { editItem } = useContext(ShoppingContext);
  let { handleModal } = useContext(ModalContext);

  const [item, setItem] = useState(data.item);
  const [category, setCategoty] = useState(data.category);
  const [quantity, setQuantity] = useState(data.quantity);
  const [amount, setAmount] = useState(data.amount);
  useEffect(() => {
    setItem(data.item);
    setCategoty(data.category);
    setQuantity(data.quantity);
    setAmount(data.amount);
  }, [data]);
  const Edit = (e) => {
    e.preventDefault();
    let items = {
      id: data.id,
      item,
      category: category.toUpperCase(),
      quantity,
      amount,
    };
    editItem(items);
    setItem('');
    setCategoty('');
    setQuantity('');
    setAmount('');
    handleModal();
  };
  return (
    <form onSubmit={Edit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="text"
        value={data.category}
        onChange={(e) => setCategoty(e.target.value)}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit" className="btn">
        Edit
      </button>
    </form>
  );
};

export default EditItem;
