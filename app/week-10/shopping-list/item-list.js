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
    <div>
      <div className="flex gap-2 mb-2 items-center w-full">
        <span className="text-sm text-gray-600 w-full dark:text-gray-300">
          Sort by:
        </span>
        <button
          className={`px-3 py-1 rounded w-full text-white text-sm transition-colors font-semibold ${
            sortBy === "name"
              ? "bg-blue-500 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-800 "
              : "bg-gray-400 hover:bg-gray-500 text-black dark:bg-gray-500 dark:text-white dark:hover:bg-gray-600"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`px-3 py-1 rounded w-full text-white text-sm transition-colors font-semibold ${
            sortBy === "category"
              ? "bg-blue-500 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-800"
              : "bg-gray-400 hover:bg-gray-500 text-black dark:bg-gray-500 dark:text-white dark:hover:bg-gray-600"
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
