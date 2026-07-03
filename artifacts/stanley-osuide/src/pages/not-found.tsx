import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground relative z-10 px-4">
      <h1 className="text-8xl md:text-[150px] font-serif font-bold text-white mb-4">404</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="px-8 py-4 bg-primary text-black font-semibold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
        Return Home
      </Link>
    </div>
  );
}
