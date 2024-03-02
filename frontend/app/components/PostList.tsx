import PostCard from './PostCard';

export default function PostList({ posts }: { posts: { id: number; title: string }[] }) {
  return (
    <div className="grid gap-4">
      {posts.map(p => <PostCard key={p.id} id={p.id} title={p.title} />)}
    </div>
  );
}
