import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-signal-600">404</p>
          <h1 className="h-display mt-4">Page not found</h1>
          <p className="lead mt-4">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back to the transformation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
