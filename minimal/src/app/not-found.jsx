import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4 max-w-80 mx-auto mt-10">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
