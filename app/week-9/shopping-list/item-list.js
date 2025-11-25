"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = [...items].sort((item1, item2) => {
    switch (sortBy) {
      case "name":
        return item1.name.localeCompare(item2.name);

      case "category":
        return item1.category.localeCompare(item2.category);

      default:
        return 0;
    }
  });

  return (
    <div className="justify-self-end-safe">
      <div className="flex gap-2 mb-2 items-center w-72">
        <span className="text-sm text-gray-600 w-full">Sort by:</span>
        <button
          className={`px-3 py-1 rounded w-full text-white text-sm transition-colors ${
            sortBy === "name"
              ? "bg-blue-400 hover:bg-blue-600"
              : "bg-gray-300 hover:bg-gray-400 text-black"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`px-3 py-1 rounded w-full text-white text-sm transition-colors ${
            sortBy === "category"
              ? "bg-blue-400 hover:bg-blue-600"
              : "bg-gray-300 hover:bg-gray-400 text-black"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      {sortItems.map((item) => (
        <Item
          key={item.id}
          {...item}
          onSelect={() => onItemSelect(item.name)}
        />
      ))}
    </div>
  );
}
