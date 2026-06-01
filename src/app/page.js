import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="container text-center py-16">
    <h1 className="head-text text-gray-900">
      Click the button below
    </h1>
    <Link href="/about">
      <button className="btn-primary mt-4">
        About
      </button>
    </Link>
    </div>
    </>
  );
}
