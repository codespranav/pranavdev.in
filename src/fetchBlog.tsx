"use client";
import useSWR from 'swr';

const fetcher = (...args: any[]) => fetch(...args).then(res => res.json());

export const useFetchBlog = () => {
  const { data, error, isLoading } = useSWR('/api/apidata', fetcher);
  return { data, error, isLoading };
};
