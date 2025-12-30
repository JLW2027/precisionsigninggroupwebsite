export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-neutral-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-neutral mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <a
          href="/"
          className="btn-primary inline-block"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

