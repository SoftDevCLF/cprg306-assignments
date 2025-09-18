import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <h2>Name: Cintya Lara</h2>
      Github:
      <Link
        className="underline text-blue-500 hover:text-blue-800 ml-1"
        href="https://github.com/SoftDevCLF/cprg306-assignments"
      >
        https://github.com/SoftDevCLF/cprg306-assignments
      </Link>
    </section>
  );
}
