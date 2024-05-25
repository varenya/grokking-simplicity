import { calculateTotal, isInCart, ShoppingCart } from "./cart";

function getWatchDiscount(cart: ShoppingCart): boolean {
  const cartTotal = calculateTotal(cart);
  const isWatchPresent = isInCart(cart, { name: "watch", price: 100 });
  return cartTotal > 100 && isWatchPresent;
}

export { getWatchDiscount };
