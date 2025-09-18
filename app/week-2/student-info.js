import Link from "next/link";

export default function StudentInfo() {
  return (
    <section className="m-3">
      <h2>Name:Cintya Lara</h2>
      <Link
        className="underline text-blue-500 hover:text-blue-800"
        href="https://github.com/SoftDevCLF/cprg306-assignments"
      >
        github: https://github.com/SoftDevCLF/cprg306-assignments
      </Link>
    </section>
  );
}
