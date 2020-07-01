import React, { useContext } from 'react'

import CartList from '../cartList/cartList'

import { CartContext } from '../../context/cartContext'

function Cart() {
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((accumulator, currentValue)=> accumulator + currentValue.price, 0)
    return (
        <div>
            <h1>Quantidade de Cursos {cart.length}</h1>
            <h2>Preço total R$ {totalPrice}</h2>
            <hr/>
            {cart.map(item=><CartList name={item.name} price={item.price} id={item.id}/>)}
        </div>
    )
}

export default Cart
