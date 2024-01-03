"use client";
import React, { useEffect, useState } from "react";

interface BlogData {
  data: {
    title: string;
    body: string;
    tags: string[];
  };
}

const BlogDetail = ({ data }: BlogData) => {
  console.log(data);

  return (
    <div>
      {data ? (
        <div className="flex flex-col items-start justify-center max-w-[960px] mx-auto gap-8 my-12">
          <h1 className="font-bold text-3xl ">{data.title}</h1>
          <div className="flex flex-row">
            {data?.tags?.map((item: string) => (
              <div key={item} className="mr-6 uppercase">
                {item}
              </div>
            ))}
          </div>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetail;
