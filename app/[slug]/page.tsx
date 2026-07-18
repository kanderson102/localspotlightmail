import HomePage from "../page";

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <HomePage initialSlug={slug} />;
}
