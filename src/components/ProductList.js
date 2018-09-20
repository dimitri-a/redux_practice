import React from 'react'
import { getUsers } from '../actions/counterAction';

export const ProductList = (props) => {

  const { products,getUsers } = props;

  console.log('actions',getUsers);

  getUsers();
    
  return (
    
    <ul>
      {products.map((p) => {
        return <li>{p.name}</li>
      })}
    </ul>
  )

}