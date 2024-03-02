export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <div className="p-8"><h1 className="text-3xl font-bold text-white">Category: {slug}</h1></div>;
}
