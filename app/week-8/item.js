export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="cursor-pointer bg-white w-72 mx-auto border-gray-300 border-2 p-2 rounded-lg shadow-md flex justify-start mb-2 hover:bg-blue-50 transition"
    >
      <div className="w-full pl-2">
        <ul>
          <li>{name}</li>
          <li>Quantity: {quantity}</li>
          <li className="capitalize">Category: {category}</li>
        </ul>
      </div>
    </div>
  );
}
