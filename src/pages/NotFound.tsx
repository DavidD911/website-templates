import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-32 text-center">
      <Compass className="h-16 w-16 text-brand-300" strokeWidth={1.25} />
      <h1 className="mt-6 font-display text-3xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 text-ink/60">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-[var(--radius-button)] bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
      >
        Back to home
      </Link>
    </div>
  );
}
