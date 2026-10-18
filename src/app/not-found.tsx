import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="wrap section">
      <div className="eyebrow">404 / Not found</div>
      <h1 className="font-serif text-5xl">This page is not here.</h1>
      <Link className="btn" href="/#work">
        Explore selected work ↗
      </Link>
    </main>
  );
}
