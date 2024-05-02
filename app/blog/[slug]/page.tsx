type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post: { slug: any; }) => ({
    slug: post.slug,
  }))
}

export default function Page({ params }: Params) {
  const { slug } = params
  return <h1>Slug: {params.slug}</h1>;
}
