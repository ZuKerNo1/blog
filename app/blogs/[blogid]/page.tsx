import BlogDetail from "@/components/BlogDetail";

const Blog = async ({ params }: { params: { blogid: string } }) => {
  const res = await fetch(
    `http://localhost:3000/api/blog?blogid=${params.blogid}`
  );
  const data = await res.json();

  return <BlogDetail data={data} />;
};

export default Blog;
