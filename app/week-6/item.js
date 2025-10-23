export default function Item({ name, quantity, category }) {
  return (
    <ItemCard>
      <ul>
        <li>{name}</li>
        <li>Quantity: {quantity}</li>
        <li className="capitalize">Category: {category}</li>
      </ul>
    </ItemCard>
  );
}

function ItemCard({ children }) {
  return (
    <div className="w-72 mx-auto border p-2 rounded-lg shadow-md flex justify-start mb-2">
      <div className="pr-4 border-amber-600 border-r-2">
        <input type="checkbox" />
      </div>

      <div className="w-full pl-2">{children}</div>
    </div>
  );
}
