import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-800 p-4">
      <nav className="flex gap-6">
        <Link href="/" className="text-white font-bold">Blog</Link>
        <Link href="/posts" className="text-gray-400 hover:text-white">Posts</Link>
        <Link href="/admin" className="text-gray-400 hover:text-white">Admin</Link>
      </nav>
    </header>
  );
}
