import ItemList from "./item-list";
export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="font-bold text-2xl text-center mb-6">Shopping List</h1>
      <section>
        <ItemList />
      </section>
    </main>
  );
}
