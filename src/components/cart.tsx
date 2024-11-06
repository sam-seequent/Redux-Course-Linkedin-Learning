import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../redux/selectors/productsSelector';

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
