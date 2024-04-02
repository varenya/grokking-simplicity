type CartItem = { name: string; price: number };

type ShoppingCart = CartItem[];

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

function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
}

function isFreeShipping(cart: CartItem[]): boolean {
  const currTotal = calculateTotal(cart);
  return currTotal >= 20;
}

function calculateTax(cart: CartItem[], taxRate = 10): number {
  const currTotal = calculateTotal(cart);
  return (currTotal * taxRate) / 100;
}

export {
  addItemToCart,
  calculateTax,
  isFreeShipping,
  calculateTotal,
  type ShoppingCart,
  type CartItem,
};
