import AddNewItem from "./new-item";
export default function Page() {
  return (
    <main className="max-w-70 mx-auto p-6">
      <header>
        <h1 className="text-2xl font-bold mb-4 text-center">Add New Item</h1>
      </header>
      <AddNewItem />
    </main>
  );
}
