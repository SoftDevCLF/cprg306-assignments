import Link from "next/link";

export default function Home() {
  return (
    <main className="m-5">
      <h1 className="text-3xl font-bold font-sans">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul>
        <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline">
          <Link href="/week-2">Go to Week 2</Link>
        </li>
        <li className="text-blue-400 hover:text-blue-700 mt-3 hover:underline">
          <Link href="/week-3">Go to Week 3</Link>
        </li>
      </ul>
    </main>
  );
}
