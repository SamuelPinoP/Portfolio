import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for is not part of this portfolio.</p>
        <Link className="button primary-button" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
