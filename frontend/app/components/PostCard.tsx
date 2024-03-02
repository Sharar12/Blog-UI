import Link from 'next/link';

export default function PostCard({ id, title }: { id: number; title: string }) {
  return (
    <div className="rounded border border-gray-700 p-4">
      <Link href={`/posts/${id}`} className="text-xl font-semibold text-white hover:underline">{title}</Link>
    </div>
  );
}
