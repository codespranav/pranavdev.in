import { BlogClient } from "./components/BlogClient";

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogClient slug={params.slug} />;
}
