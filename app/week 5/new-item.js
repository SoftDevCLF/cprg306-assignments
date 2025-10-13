"use client";
import { useState } from "react";

export default function AddNewItem() {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <section className="border rounded p-4 text-center">
      <p className="mb-3">
        <span className="text-sm text-gray-700">Quantity: </span>
        <span className="text-xl font-semibold">{quantity}</span>
      </p>
      <div className="flex  gap-3 justify-center-safe">
        <button
          onClick={decrement}
          className=" bg-gray-200 hover:bg-gray-300 text-shadow-gray-400 rounded px-4 py-2"
        >
          -
        </button>
        <button
          onClick={increment}
          className=" text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2"
        >
          +
        </button>
      </div>
      <p className="mt-2 text-xs text-gray-600">Allowed range: 1-20</p>
    </section>
  );
}
