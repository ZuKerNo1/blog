import Blogs from "@/components/Blogs";

export interface Blog {
  id: number;
  title: string;
  body: string;
  tags: object;
}

const BlogList = () => {
  return <Blogs />;
};

export default BlogList;
