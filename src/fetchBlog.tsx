"use client";
import useSWR from 'swr';

const fetcher = (url: string, init?: RequestInit) => fetch(url, init).then(res => res.json());

export const useFetchBlog = () => {
  const { data, error, isValidating } = useSWR('/api/apidata', fetcher);
  const isLoading = !error && !data;

  return { data, error, isLoading, isValidating };
};
