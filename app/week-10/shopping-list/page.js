"use client";
import { useState } from "react";
import { useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "@/app/contexts/AuthContext";
import LandingPage from "../page";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    addItem(user.uid, newItem).then((id) => {
      if (id) {
        const itemWithId = { id, ...newItem };
        setItems((prevItems) => [...prevItems, itemWithId]);
      }
    });
  }

  function handleItemSelect(itemName) {
    if (!itemName) {
      return;
    }
    let cleanedItemName = itemName.trim().toLowerCase();
    cleanedItemName = cleanedItemName
      .split(",")[0]
      .replace(
        /[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]| /g,
        ""
      );
    console.log("Selected item:", cleanedItemName);
    setSelectedItemName(cleanedItemName);
  }

  async function loadItems() {
    try {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  if (!user) {
    return <LandingPage />;
  }

  return (
    <main className="bg-gray-5 p-4 max-w-5xl mx-auto">
      <h1 className="font-bold text-2xl text-center mb-6">
        Shopping List + Meal Ideas
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <NewItem onAddItem={handleAddItem} />

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <h2 className="font-bold mb-2">
            {selectedItemName
              ? `Meal Ideas for "${selectedItemName}"`
              : `Meal Ideas (select an item)`}
          </h2>

          <div>
            {selectedItemName ? (
              <MealIdeas ingredient={selectedItemName} />
            ) : (
              <p className="text-md text-gray-500">
                Choose an item to see ideas.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
