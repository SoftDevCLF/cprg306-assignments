"use client";
import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = [...items].sort((item1, item2) => {
    if (sortBy === "name") {
      if (item1.name < item2.name) {
        return -1;
      } else if (item1.name > item2.name) {
        return 1;
      } else {
        return 0;
      }
    } else if (sortBy === "category") {
      if (item1.category < item2.category) {
        return -1;
      } else if (item1.category > item2.category) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return (
    <div>
      <div className="flex gap-2 mb-2 justify-center-safe items-center">
        <span className="text-sm text-gray-600">Sort by:</span>
        <button
          className={`px-3 py-1 rounded text-white text-sm transition-colors ${
            sortBy === "name"
              ? "bg-blue-400 hover:bg-blue-600"
              : "bg-green-400 hover:bg-green-600"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`px-3 py-1 rounded text-white text-sm transition-colors ${
            sortBy === "category"
              ? "bg-blue-400 hover:bg-blue-600"
              : "bg-green-400 hover:bg-green-600"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      {sortItems.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
