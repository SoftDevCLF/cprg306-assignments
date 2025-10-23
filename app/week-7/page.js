"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="font-bold text-2xl text-center mb-6">Shopping List</h1>
      <section>
        <NewItem onAddItem={handleAddItem} />
      </section>
      <section className="mt-6">
        <ItemList items={items} />
      </section>
    </main>
  );
}
