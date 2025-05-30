import { BlogClient } from "./components/BlogClient";
type Params = Promise<{ slug: string }>

export default async function Page(props: {params: Params}){
    const params = await props.params
    return <BlogClient slug={params.slug} />;
}


