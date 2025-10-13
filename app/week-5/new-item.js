"use client";
import { useState } from "react";

export default function AddNewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
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
    const item = { name, quantity, category };
    console.log("New Item:", item);
    alert(
      `Item: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`
    );
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md border border-gray-300 rounded p-4"
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
      <div className="my-4">
        <p className="text-sm">Quantity 1 - 20</p>
        <p className="mb-3 text-center">
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
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Goods">Frozen Goods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <input
          type="submit"
          value="Add Item"
          className="bg-blue-500 hover:bg-blue-700 text-white font-sans py-2 px-4 rounded"
        />
      </div>
    </form>
  );
}
