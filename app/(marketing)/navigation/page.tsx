'use client';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();

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

      <div className="flex items-center">
        <button onClick={() => router.push('/blog')}>
          Go to blog with client side navigation
        </button>
      </div>
    </nav>
  );
}
