'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import posts from '@/data/posts';
import { Post } from '@/types/posts';
import { useRouter } from 'next/navigation';

interface PostTableProps {
  limit?: number;
  title?: string;
}

const PostsTable = ({ limit, title }: PostTableProps) => {
  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/posts/${id}/edit`);
  };

  // Sort posts in dec order based on date
  const sortedPosts: Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) :  sortedPosts;

  return (
    <div className='mt-10'>
      <h1 className='text-2xl mb-4 font-semibold'>{title ? title : 'Posts'}</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead className='hidden lg:table-cell'>Body</TableHead>
            <TableHead className='text-right w-[120px]'>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow
              key={post.id}
              className='cursor-pointer'
              onClick={() => handleRowClick(post.id)}
            >
              <TableCell className='font-medium'>{post.title}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell className='hidden lg:table-cell'>
                {post.body.length > 100
                  ? post.body.slice(0, 100) + '...'
                  : post.body}
              </TableCell>
              <TableCell className='text-right'>{post.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
