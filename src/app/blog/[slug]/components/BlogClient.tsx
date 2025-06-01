"use client";
import LoadingSpinner from '@/app/components/LoadingSpinner';
import { useFetchBlog } from '@/fetchBlog';
import { User } from 'lucide-react';
import React from 'react';

export const BlogClient = ({ slug }: { slug: string }) => {
  const { data, error, isLoading } = useFetchBlog();

  if (error) {
    return <h1>Something unexpected happened!</h1>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Find blog by ID using the passed slug
  const blog = data.blogs.find((b) => b.id === slug);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <section className='max-w-7xl mx-auto mt-8'>
      <div className='md:flex px-4 space-x-12'>
        <div className='max-w-5xl'>
          <h1 className='text-4xl font-semibold text-heading'>{blog.title}</h1>
          <div className="belowtext mt-4 flex items-center gap-4">
            <span className='flex gap-2 items-center cursor-pointer text-white'>
              <User /> Pranav
            </span>
            <span>.</span>
            <span className='text-white'>March 22, 2024</span>
          </div>
          <div>
            <img src={blog.thumb} alt="" className='w-full mt-4 aspect-video' />
          </div>
          <p className='text-white'>{blog.desc}</p>
        </div>
        <div>
          <h3 className='text-white text-xl font-bold'>Related Articles</h3>
        </div> 
      </div>
    </section>
  );
};
