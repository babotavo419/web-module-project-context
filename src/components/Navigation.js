import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Navigation = () => {
    const { cart } = useContext(CartContext);

    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <div className="navigation">
            <NavLink to="/">Products</NavLink>
            <NavLink to="/cart">
                Cart <span>{cartItemCount}</span>
            </NavLink>
        </div>
    );
};

export default Navigation;


