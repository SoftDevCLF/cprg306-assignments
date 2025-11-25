"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
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
  function handleSubmit(event) {
    event.preventDefault();
    const item = {
      id: Math.random().toString(36).substring(2),
      name,
      quantity,
      category,
    };
    console.log("New Item:", item);
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-72 bg-white shadow-md border border-gray-300 rounded p-4 justify-self-end-safe mb-6"
    >
      <label htmlFor="name">Item Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
        placeholder="e.g. , milk, 4 L 🥛"
      />
      <div className="my-4 text-center">
        <p className="text-sm">Quantity 1 - 20</p>
        <p className="mb-3">
          <span className="text-sm text-gray-600">Current: </span>
          <span className="text-xl font-semibold">{quantity}</span>
        </p>
        <div className="flex  gap-3 justify-center-safe">
          <button
            type="button"
            onClick={decrement}
            className=" bg-gray-200 hover:bg-gray-300 text-shadow-gray-400 rounded px-4 py-2"
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-sans rounded px-4 py-2"
          >
            +
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-600">Allowed range: 1-20</p>
      </div>
      <div className="mb-4">
        <p className="text-sm mb-1">Category</p>
        <div>
          <select
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full border border-gray-300 rounded-md bg-white py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen Goods">Frozen Goods</option>
            <option value="canned Goods">Canned Goods</option>
            <option value="dry Goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <input
          type="submit"
          value="Add Item"
          className="bg-blue-500 hover:bg-blue-700 text-white font-sans py-2 px-4 rounded justify-center-safe w-full"
        />
      </div>
    </form>
  );
}
