export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div className="p-8"><h1 className="text-3xl font-bold text-white">Post {id}</h1></div>;
}
