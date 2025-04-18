import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'List of Categories',
};

const Categories = () => {
  return (
    <div className="space-y-2">
      <div className="flex-between">
        <div className="flex gap-3">
          <h1 className="h2-bold text-center">List of Categories</h1>
        </div>
        <a href="/admin/categories/create" className="">
          <Button variant="default">Create Category</Button>
        </a>
      </div>
      <div className="mt-7">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="w-[200px]">ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Web</TableCell>
              <TableCell className="flex gap-5">
                <a href={`/admin/categories/id`}>
                  <Button>Edit</Button>
                </a>
                <a href={`/admin/categories/id`}>
                  <Button className="bg-red-800 text-gray-200 hover:bg-red-700">
                    Delete
                  </Button>
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Categories;
