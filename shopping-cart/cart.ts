type CartItem = { name: string; price: number };

type ShoppingCart = Map<string, number>;

function makeCartItem(name: string, price: number): CartItem {
  return {
    name,
    price,
  };
}

function addItemToCart(
  cart: CartItem[],
  { name, price }: CartItem,
): CartItem[] {
  return [...cart, { name, price }];
}

function isInCart(cart: ShoppingCart, { name, price }: CartItem): boolean {
  return cart.has(name);
}

function removeItemFromCart(cart: ShoppingCart, name: string): ShoppingCart {
  const newCart = new Map(cart);
  newCart.delete(name);
  return newCart;
}

function calculateTotal(cart: ShoppingCart): number {
  return [...cart.values()].reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

function isFreeShipping(cart: ShoppingCart): boolean {
  const currTotal = calculateTotal(cart);
  return currTotal >= 20;
}

function calculateTax(cart: ShoppingCart, taxRate = 10): number {
  const currTotal = calculateTotal(cart);
  return (currTotal * taxRate) / 100;
}

export {
  addItemToCart,
  calculateTax,
  isFreeShipping,
  calculateTotal,
  removeItemFromCart,
  type ShoppingCart,
  type CartItem,
};
