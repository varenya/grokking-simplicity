import {
  isFreeShipping,
  calculateTax,
  calculateTotal,
  ShoppingCart,
  removeItemFromCart,
} from "./cart";
import { describe, it, expect, beforeEach } from "vitest";

const carts: ShoppingCart[] = [
  new Map([
    ["dove", 20],
    ["axe", 10],
  ]),
  new Map([]),
];

const totalTable = [
  { input: carts[0], expected: 30 },
  { input: carts[1], expected: 0 },
];
const taxTable = [
  { input: carts[0], expected: 3 },
  { input: carts[1], expected: 0 },
];
const freeShippingTable = [
  {
    input: carts[0],
    expected: true,
  },
  {
    input: carts[1],
    expected: false,
  },
];

describe("Shopping Cart", () => {
  it.each(totalTable)(
    "should find the total from the given cart",
    ({ input, expected }) => {
      expect(calculateTotal(input)).toEqual(expected);
    },
  );
  it.each(taxTable)(
    "should find the total tax from the given cart",
    ({ input, expected }) => {
      expect(calculateTax(input)).toEqual(expected);
    },
  );
  it.each(freeShippingTable)(
    "should determine whether shipping is free for the item to be added",
    ({ input: cart, expected }) => {
      expect(isFreeShipping(cart)).toEqual(expected);
    },
  );
});

describe("remove item from cart", () => {
  let cart: ShoppingCart;
  beforeEach(() => {
    cart = new Map([
      ["dove", 20],
      ["axe", 10],
    ]);
  });
  it("should remove an item from cart using the given name", () => {
    const updatedCart = removeItemFromCart(cart, "axe");
    expect(updatedCart).toHaveLength(1);
  });
});
