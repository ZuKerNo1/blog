"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
export interface Blog {
  id: number;
  title: string;
  body: string;
  tags: object;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(0);

  const getData = async () => {
    const res = await fetch(`/api/blogs?limit=10&skip=${page}`);
    const data = await res.json();
    return data.posts;
  };

  const loadMoreBlogs = async () => {
    setPage(page + 10);
  };

  const fetchData = async () => {
    const data = await getData();

    setBlogs((prevBlogs) => [...prevBlogs, ...data]);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="max-w-[960px] p-8 mx-auto">
      <h1 className="flex justify-start font-bold text-2xl mb-12">Home</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-24">
            <Link href={`/blogs/${blog.id}`}>
              <p className="font-bold text-2xl underline my-6">{blog.title}</p>
              <p>{blog.body}</p>
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="p-4 rounded-lg bg-blue-400 text-white"
        onClick={loadMoreBlogs}
      >
        Load More
      </button>
    </div>
  );
};

export default Blogs;
