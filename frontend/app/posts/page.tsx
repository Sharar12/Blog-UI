import Link from 'next/link';

export default function PostsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Posts</h1>
      <Link href="/admin/create" className="rounded bg-indigo-600 px-4 py-2 text-white">Create Post</Link>
    </div>
  );
}
