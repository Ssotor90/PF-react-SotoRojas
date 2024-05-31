import { useState } from 'react';

export default function useItemQuantity(initialQuantity = 1, maxQuantity) {
const [quantity, setQuantity] = useState(initialQuantity);

const increment = () => {
    if (quantity < maxQuantity) {
    setQuantity(quantity + 1);
    }
};

const decrement = () => {
    if (quantity > 1) {
    setQuantity(quantity - 1);
    }
};

const reset = () => {
    setQuantity(initialQuantity);
};

return {
    quantity,
    increment,
    decrement,
    reset,
};
}