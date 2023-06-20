import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
    const [products] = useState(data);
    const [cart, setCart] = useState([]);

	const addItem = item => {
		const existingItem = cart.find(cartItem => cartItem.id === item.id);
	
		if (existingItem) {
			const updatedCart = cart.map(cartItem => {
				if (cartItem.id === item.id) {
					return { ...cartItem, quantity: cartItem.quantity + 1 };
				}
				return cartItem;
			});
	
			setCart(updatedCart);
		} else {
			setCart([...cart, { ...item, quantity: 1 }]);
		}
	};
	

    const removeItem = itemId => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    return (
        <ProductContext.Provider value={{ products, addItem }}>
            <CartContext.Provider value={{ cart, removeItem }}>
                <div className="App">
                    <Navigation />
                    {/* Routes */}
                    <Route exact path="/">
                        <Products />
                    </Route>

                    <Route path="/cart">
                        <ShoppingCart />
                    </Route>
                </div>
            </CartContext.Provider>
        </ProductContext.Provider>
    );
}

export default App;



