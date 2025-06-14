import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../redux/selectors/productsSelector';

//IMPORTANT: Difference between global state and local state
// Global state is managed by Redux and can be accessed from any component in the application.
// example: The total number of items in the cart is stored in the Redux store and can be accessed by any component that needs it.
// Local state is managed within a component using React's useState hook and is not accessible outside that component.
// example: The delivery note is managed within the Cart component and is not accessible outside that component.

export const Cart: FC = () => {
  const totalItems = useSelector(selectCartTotalItems);
  const [deliveryNote, setDeliveryNote] = useState<string>('')

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDeliveryNote(e.target.value)
  }
  return (
    <div>
        <div>Total Items: {totalItems}</div>
        <div>Quatity: <textarea onChange={handleOnChange} value={deliveryNote}/></div>
    </div>
  );
};
