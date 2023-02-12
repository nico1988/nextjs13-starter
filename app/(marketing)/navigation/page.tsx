import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="text-blue flex flex-col items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/">Next.js 13 Starter Template</Link>
      </div>
      <div className="flex items-center">
        <Link href="/home">Home</Link>
      </div>
      <div className="flex items-center">
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
