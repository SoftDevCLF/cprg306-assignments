import Link from "next/link";

export default function Home() {
  return (
    <main className="m-5">
      <header>
        <h1 className="text-3xl font-bold font-sans text-center mb-5">
          CPRG 306: Web Development 2 - Assignments
        </h1>
      </header>
      <section>
        <ul>
          <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline rounded-lg border border-gray-300 p-2 max-w-xs mx-auto px-10 py-4 text-center">
            <Link href="/week-2">Go to Week 2</Link>
          </li>
          <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline rounded-lg border border-gray-300 p-2 max-w-xs mx-auto px-10 py-4 text-center">
            <Link href="/week-3">Go to Week 3</Link>
          </li>
          <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline rounded-lg border border-gray-300 p-2 max-w-xs mx-auto px-10 py-4 text-center">
            <Link href="/week-4">Go to Week 4</Link>
          </li>
          <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline rounded-lg border border-gray-300 p-2 max-w-xs mx-auto px-10 py-4 text-center">
            <Link href="/week-5">Go to Week 5</Link>
          </li>
          <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline rounded-lg border border-gray-300 p-2 max-w-xs mx-auto px-10 py-4 text-center">
            <Link href="/week-6">Go to Week 6</Link>
          </li>
          <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline rounded-lg border border-gray-300 p-2 max-w-xs mx-auto px-10 py-4 text-center">
            <Link href="/week-7">Go to Week 7</Link>
          </li>
          <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline rounded-lg border border-gray-300 p-2 max-w-xs mx-auto px-10 py-4 text-center">
            <Link href="/week-8">Go to Week 8</Link>
          </li>
          <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline rounded-lg border border-gray-300 p-2 max-w-xs mx-auto px-10 py-4 text-center">
            <Link href="/week-9">Go to Week 9</Link>
          </li>
          <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline rounded-lg border border-gray-300 p-2 max-w-xs mx-auto px-10 py-4 text-center">
            <Link href="/week-10">Go to Week 10</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
