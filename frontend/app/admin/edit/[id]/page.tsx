export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div className="p-8"><h1 className="text-3xl font-bold text-white">Edit Post {id}</h1></div>;
}
