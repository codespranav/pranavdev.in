import { BlogClient } from "./components/BlogClient";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: PageProps) => {
  return <BlogClient slug={params.slug} />;
};

export default Page;
