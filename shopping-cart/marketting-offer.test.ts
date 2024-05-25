import { getWatchDiscount } from "./marketting-offer";
import { ShoppingCart } from "./cart";
import { test, expect } from "vitest";

const discountCart: ShoppingCart[] = [
  new Map([
    ["dove", 50],
    ["watch", 500],
  ]),
];
const noDiscount: ShoppingCart[] = [
  new Map([
    ["dove", 50],
    ["watch", 10],
  ]),
  new Map([
    ["dove", 50],
    ["soap", 51],
  ]),
  new Map([]),
];

test.each(discountCart)("give discount to the cart", (cart) => {
  expect(getWatchDiscount(cart)).toBe(true);
});

test.each(noDiscount)("give no discount to the cart", (cart) => {
  expect(getWatchDiscount(cart)).toBe(false);
});
