import { BlogClient } from "./components/BlogClient";

const page = ({params}: {params: {slug: string}}) => {
    return <BlogClient slug={params.slug} />; 
}

export default page
